const https = require("https");

const options = {
  hostname: "r.jina.ai",
  path: "https://pubmed.ncbi.nlm.nih.gov/16447982/",
  method: "GET",
  headers: {
    Authorization:
      "Bearer jina_5064b0a12f304164ba5a91df56b70b4aVsR-M5J060b4aBda43-0WbTqUykO",
  },
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(data);
  });
});

req.on("error", (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
