const webScrape = async (urls: string[]) => {
  const response = await Promise.all(
    urls.map((url) =>
      fetch(`https://r.jina.ai/${url}`, {
        headers: {
          "X-Return-Format": "markdown",
          Authorization:
            "Bearer jina_5064b0a12f304164ba5a91df56b70b4aVsR-M5J060b4aBda43-0WbTqUykO",
        },
      }),
    ),
  );
  const cleanTexts = await Promise.all(
    response.map((response) => response.text()),
  );
  const limitedTexts = cleanTexts.map((text) => text.slice(2000, 1000000));
  console.log("Scraped texts:", limitedTexts);
  return limitedTexts;
};
export default webScrape;
