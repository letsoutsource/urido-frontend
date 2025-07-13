"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import "./helplineForm.css";
import { subjects, inputs } from "../helpLineData";
import { toast } from "react-toastify";
import axios from "axios";

const HelplineForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]?.value);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    setIsSubmitting(true);
    try {
      const response = await axios.post("/frontend-api/sendEmail", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("🚀 ~ onSubmit ~ response:", response)
        toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
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
    <form onSubmit={handleSubmit(onSubmit)} className="helpline-form">
      <div className="form-name-email-inputs">
        {inputs.map((input, index) => (
          <div className="form-input-wrapper" key={index}>
            <Image
              src={input.icon}
              alt={input.name === "email" ? "Email taxi support" : "Name for cab booking"}
              height={20}
              width={20}
            />
            <span className="input-divider">|</span>
            <input
              {...register(input.name, input.validation || {})}
              placeholder={input.placeholder}
              className="form-input"
            />
            {errors[input.name] && (
              <p className="error-message">{errors[input.name].message}</p>
            )}
          </div>
        ))}
      </div>
      <div className="helpine-subjectSection">
        <FormLabel id="subject-label">Select Subject</FormLabel>
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
      <div className="form-message-input">
        <Image src="/mail.png"  alt="Message about Luton Airport taxi or Peterborough cab"  height={20} width={20} />
        <span className="input-divider">|</span>
        <input
          {...register("message", {
            required: "Message is required",
            validate: (value) =>
              value.split(" ").filter(Boolean).length >= 5 ||
              "Message must be at least 05 words",
          })}
          placeholder="Write your Message"
          className="form-input"
        />
        {errors.message && (
          <p className="error-message">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="helpline-form-button"
        disabled={isSubmitting}
        >
        {isSubmitting ? "Submitting..." : "Get Help"}</button>
    </form>
  );
};

export default HelplineForm;