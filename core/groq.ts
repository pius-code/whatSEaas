import Groq from "groq-sdk";

export const AIclient = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
