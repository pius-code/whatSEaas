import { initializeWhatsApp } from "./whatsapp.js";
import client from "./core/whatsapp_client";
import { handleSearch } from "./handler/brave";
import { getUrls } from "./helper/getURls";
import webScrape from "./handler/webScrape";
import { LLMHandler } from "./handler/groq";

initializeWhatsApp();

client.on("message", async (message) => {
  // change thse number to your  whatsapp number
  if (message.from === "233536287642@c.us") {
    // uncomment to enable search and scraping
    // const response = await handleSearch(message.body);
    // const urls = await getUrls(response);
    // console.log("Extracted URLs:", urls);
    // webScrape(urls);

    // uses groq search instead of scraping + search + LLM summary
    const aiResponse = await LLMHandler(message);
  }
});
