import { initializeWhatsApp } from "./whatsapp.js";
import client from "./core/whatsapp_client";
import { handleSearch } from "./handler/brave";
import { getUrls } from "./helper/getURls";
import webScrape from "./handler/webScrape";
import { LLMHandler } from "./handler/groq";

initializeWhatsApp();

client.on("message", async (message) => {
  if (message.from === "233536287642@c.us") {
    console.log("Received message from authorized user:", message.body);
    // const response = await handleSearch(message.body);
    // const urls = await getUrls(response);
    // console.log("Extracted URLs:", urls);
    // webScrape(urls);
    const aiResponse = await LLMHandler(message);
  }
});
