import OpenAI from "openai";
import "dotenv/config";

export const Bclient = new OpenAI({
  apiKey: process.env["BRAVE_API"],
  baseURL: "https://api.search.brave.com/res/v1",
});
