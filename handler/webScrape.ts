const webScrape = async (urls: string[]) => {
  const response = await Promise.all(
    urls.map((url) =>
      fetch(`https://r.jina.ai/${url}`, {
        headers: {
          "X-Return-Format": "markdown",
        },
      }),
    ),
  );
  const cleanTexts = await Promise.all(
    response.map((response) => response.text()),
  );
  const limitedTexts = cleanTexts.map((text) => text.slice(1000, 5000));
  console.log("Scraped texts:", limitedTexts);
  return limitedTexts;
};
export default webScrape;
