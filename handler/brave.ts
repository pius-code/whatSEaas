import { Bclient } from "../core/brave";
import "dotenv/config";

export const handleSearch = async (query: string) => {
  const apiKey = process.env["BRAVE_API"];
  if (!apiKey) {
    throw new Error("BRAVE_API key is not set in environment variables.");
  }

  const response = await fetch(
    `https://api.search.brave.com/res/v1/web/search?${new URLSearchParams({
      q: query,
      count: "10",
      country: "us",
      search_lang: "en",
    })}`,
    {
      headers: {
        "X-Subscription-Token": apiKey,
      },
    },
  );
  const data = await response.json();
  return data["web"].results;
};

export default handleSearch;
