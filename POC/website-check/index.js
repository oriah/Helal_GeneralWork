require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;
const axios = require("axios");

async function checkClientsWebs() {
  const clients = [
    { name: "optimum", env: process.env.Optimum },
    { name: "trianglek", env: process.env.TriangleK },
    { name: "sukkahdepot", env: process.env.SukkahDepot },
    { name: "yevilim", env: process.env.Yevilim },
  ];

  const results = [];

  for (const client of clients) {
    const url = client.env;

    if (!url) {
      results.push({
        client: client.name,
        isOk: "❌",
        error: "URL is missing",
      });
      continue;
    }

    try {
      const axiosRes = await axios.get(url, {
        timeout: 20000, // 20 seconds
        maxRedirects: 5,
        validateStatus: () => true, // allow 4xx/5xx
      });

      const ok = axiosRes.status >= 200 && axiosRes.status < 400;

      results.push({
        client: client.name,
        url,
        isOk: ok ? "✅" : "❌",
        status: axiosRes.status,
      });

      console.log(
        `${ok ? "✅" : "❌"} ${client.name} [${axiosRes.status}] ${url}`
      );
    } catch (err) {
      console.error(
        `❌ ERROR checking ${client.name}:`,
        "code =",
        err.code,
        "message =",
        err.message
      );

      results.push({
        client: client.name,
        url,
        isOk: "❌",
        error: err.code || err.message,
      });
    }
  }

  return results;
}

app.get("/", (req, res) => {
  res.send("works");
});
app.get("/CheckClientsWebs/:client", async (req, res) => {
  let { client } = req.query;
  let url = "";
  if (client.toString().toLocaleLowerCase() == "optimum")
    url = process.env.Optimum;
  if (client.toString().toLocaleLowerCase() == "trianglek")
    url = process.env.TriangleK;
  if (
    client.toString().toLocaleLowerCase() == "sukkahdepot" ||
    "sukkot" ||
    "sokkut"
  )
    url = process.env.SukkahDepot;
  console.log("Checking website: " + url);
  if (!url) {
    return res.status(400).json({ ok: false, error: " url missing" });
  }
  try {
    const axiosRes = await axios.head(url, {
      timeout: 10000,
      validateStatus: () => true, // don't throw on 4xx/5xx
    }); // 5 sec
    return res.json({
      ok: axiosRes.status >= 200 && axiosRes.status < 400,
      status: axiosRes.status,
    });
  } catch (err) {
    return res.json({
      ok: false,
      error: err.message,
    });
  }
});

app.get("/CheckClientsWebs", async (req, res) => {
  try {
    const results = await checkClientsWebs();
    return res.json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.get("/CheckClientsWebsRunner", async (req, res) => {
  try {
    // first run
    checkClientsWebs().then((r) =>
      console.log(
        "Initial auto check:",
        r.map((x) => `${x.client}=${x.isOk}`)
      )
    );
    setInterval(async () => {
      const results = await checkClientsWebs();
      console.log(
        " check every 10 mins:",
        results.map((x) => `${x.client}=${x.isOk}`)
      );
    }, 10 * 60 * 1000); //1000= every 10 minutes
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  return res.json({
    started: true,
    message: "runner client web check started",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
