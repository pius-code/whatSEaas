export const getUrls = async (response: any) => {
  const urlArray: string[] = [];
  if (response) {
    for (const result of response) {
      if (result.url) {
        urlArray.push(result.url);
      }
    }
  }
  return urlArray;
};
