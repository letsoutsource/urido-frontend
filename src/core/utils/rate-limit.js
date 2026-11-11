// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";

let sendEmailRateLimiter = null;

// try {
//   sendEmailRateLimiter = new Ratelimit({
//     redis: Redis.fromEnv(),
//     limiter: Ratelimit.slidingWindow(5, "15 m"),
//     analytics: true,
//     prefix: "ratelimit:sendEmail",
//   });
// } catch (error) {
//   console.error("Upstash rate limiter init failed. Check env vars.", error);
//   sendEmailRateLimiter = null;
// }

export { sendEmailRateLimiter };
