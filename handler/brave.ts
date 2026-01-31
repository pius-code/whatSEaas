import { Bclient } from "../core/brave";
import "dotenv/config";

export const handleSearch = async (query: string) => {
  const apiKey = process.env["BRAVE_API"];
  if (!apiKey) {
    throw new Error("BRAVE_API key is not set in environment variables.");
  }

  const excludeSites =
    "NOT site:youtube.com NOT site:tiktok.com NOT site:reddit.com NOT site:amazon.com";
  const enhancedQuery = `${query} ${excludeSites}`;

  const response = await fetch(
    `https://api.search.brave.com/res/v1/web/search?${new URLSearchParams({
      q: enhancedQuery,
      count: "5",
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
