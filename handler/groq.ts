import { AIclient } from "../core/groq";
import WAWebJS from "whatsapp-web.js";
import { SYSTEM_PROMPT } from "../prompts/sys_pro";
import { formatForWhatsApp } from "../helper/formatResponse";

export const LLMHandler = async (query: WAWebJS.Message) => {
  const msg = await query.getChat();
  await msg.sendStateTyping();

  try {
    const response = await AIclient.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: query.body,
        },
      ],
      model: "openai/gpt-oss-20b",
      temperature: 1,
      max_completion_tokens: 2048,
      top_p: 1,
      stream: false,
      reasoning_effort: "medium",
      stop: null,
      tool_choice: "auto",
      tools: [
        {
          type: "browser_search",
        },
      ],
    });
    msg.clearState();
    const content = response.choices[0].message.content;
    if (content) {
      const formattedContent = formatForWhatsApp(content);
      query.reply(formattedContent);
    } else {
      console.log(response.choices[0]);
      query.reply("Sorry, I couldn't generate a response.");
    }
  } catch (error) {
    query.reply("An error occurred while processing your request.");
    console.error("Error in LLMHandler:", error);
  }
};
