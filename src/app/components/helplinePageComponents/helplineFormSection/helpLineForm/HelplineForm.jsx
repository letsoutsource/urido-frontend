"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import "./helplineForm.css";
import { subjects, inputs } from "../helpLineData";
import { toast } from "react-toastify";
import axios from "axios";

const HelplineForm = () => {
  const defaultSubject = subjects[0]?.value || "";
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      Name: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  });
  const [selectedSubject, setSelectedSubject] = useState(defaultSubject);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

  const resetCaptcha = () => {
    setCaptchaToken("");
    if (widgetIdRef.current !== null && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch {
        // Ignore reset errors if widget was already removed
      }
    }
  };

  useEffect(() => {
    if (!siteKey || !turnstileRef.current) return undefined;

    const scriptId = "cf-turnstile-script";
    const onLoad = () => {
      if (!window.turnstile || !turnstileRef.current) return;
      if (widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore remove errors
        }
        widgetIdRef.current = null;
      }
      turnstileRef.current.innerHTML = "";
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        callback: (token) => {
          setCaptchaToken(token);
          setCaptchaError("");
        },
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    };

    if (window.turnstile) {
      onLoad();
      return () => {
        if (widgetIdRef.current !== null && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch {
            // Ignore remove errors
          }
          widgetIdRef.current = null;
        }
      };
    }

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.addEventListener("load", onLoad);
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", onLoad);
      document.body.appendChild(script);
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        script.removeEventListener("load", onLoad);
      }
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore remove errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setCaptchaError("Please complete the CAPTCHA");
      toast.error("Please complete the CAPTCHA");
      return;
    }

    const matchedSubject = subjects.find(
      (item) => item.value === data.subject || item.label === data.subject
    );
    const formattedSubject = matchedSubject ? matchedSubject.label : data.subject;

    setIsSubmitting(true);
    try {
      const payload = { ...data, subject: formattedSubject, captchaToken };
      await axios.post("/frontend-api/sendEmail", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Email sent successfully");
      reset({
        Name: "",
        email: "",
        subject: defaultSubject,
        message: "",
      });
      setSelectedSubject(defaultSubject);
      setCaptchaError("");
      resetCaptcha();
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMsg =
        error?.response?.data?.message || "Failed to send email";
      toast.error(errorMsg);
      resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubjectChange = (event, fieldOnChange) => {
    const value = event.target.value;
    setSelectedSubject(value);
    fieldOnChange(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="helpline-form" noValidate>
      <div className="form-name-email-inputs">
        {inputs.map((input, index) => (
          <div className="form-field-group" key={index}>
            <div
              className={`form-input-wrapper ${
                errors[input.name] ? "input-error" : ""
              }`}
            >
              <Image
                src={input.icon}
                alt={input.name === "email" ? "Email taxi support" : "Name for cab booking"}
                height={20}
                width={20}
              />
              <span className="input-divider">|</span>
              <input
                {...register(input.name, input.validation || {})}
                type={input.name === "email" ? "email" : "text"}
                placeholder={input.placeholder}
                className="form-input"
              />
            </div>
            {errors[input.name] && (
              <p className="helpline-error">{errors[input.name].message}</p>
            )}
          </div>
        ))}
      </div>
      <div className="helpine-subjectSection">
        <FormLabel id="subject-label" className="helpine-subject-heading">
          Select Subject
        </FormLabel>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              row
              value={selectedSubject || ""}
              onChange={(event) => handleSubjectChange(event, field.onChange)}
              className="helpline-form-subjects"
            >
              {subjects.map((subject, index) => (
                <FormControlLabel
                  key={index}
                  value={subject.value}
                  control={
                    <Radio
                      color="default"
                      sx={{ "&.Mui-checked": { color: "white" } }}
                    />
                  }
                  label={subject.label}
                  labelPlacement="start"
                  className={`helpline-form-subject ${
                    selectedSubject === subject.value ? "active" : ""
                  }`}
                />
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <div className="form-field-group form-field-full">
        <div
          className={`form-message-input ${
            errors.message ? "input-error" : ""
          }`}
        >
          <Image
            src="/mail.png"
            alt="Message about Luton Airport taxi or Peterborough cab"
            height={20}
            width={20}
          />
          <span className="input-divider">|</span>
          <input
            {...register("message", {
              required: "Message is required",
              validate: (value) =>
                value.trim().split(/\s+/).filter(Boolean).length >= 5 ||
                "Message must be at least 5 words",
            })}
            placeholder="Write your Message (at least 5 words)"
            className="form-input"
          />
        </div>
        {errors.message && (
          <p className="helpline-error">{errors.message.message}</p>
        )}
      </div>
      <div className="form-turnstile-wrapper">
        {siteKey ? (
          <div ref={turnstileRef} />
        ) : (
          <p className="helpline-error">
            CAPTCHA is not configured. Please try again later.
          </p>
        )}
        {captchaError && <p className="helpline-error">{captchaError}</p>}
      </div>
      <button
        type="submit"
        className="helpline-form-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Get Help"}
      </button>
    </form>
  );
};

export default HelplineForm;