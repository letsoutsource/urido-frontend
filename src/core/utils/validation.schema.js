import { z } from "zod";

const wordCount = (value) =>
  value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

export const contactFormSchema = z.object({
  Name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(5, "Message is required")
    .max(2000, "Message is too long")
    .refine((value) => wordCount(value) >= 5, {
      message: "Message must be at least 05 words",
    }),
  captchaToken: z.string().min(1, "CAPTCHA is required"),
});
