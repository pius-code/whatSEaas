import { AIclient } from "../core/groq";

export const LLMHandler = async (query: string) => {
  const response = await AIclient.chat.completions.create({
    messages: [
      {
        role: "user",
        content: query,
      },
    ],
    model: "openai/gpt-oss-120b",
    temperature: 1,
    max_completion_tokens: 2048,
    top_p: 1,
    stream: false,
    reasoning_effort: "medium",
    stop: null,
    tool_choice: "required",
    tools: [
      {
        type: "browser_search",
      },
    ],
  });
  console.log(response.choices[0].message.content);
};
