require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require("axios");
const bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.get("/test", async (req, res) => {
  res.send("API SEC WORKS !!!");
});

// Green API
const instanceId = process.env.INSTANCE_ID || "7105280605";
const token =
  process.env.GREEN_API_TOKEN ||
  "904dd5ae73594130a7b9ae1e92ff91ef9e42964e1c744d03ac";
app.get("/sendWhatsappMessage/:number/:message", async (req, res) => {
  let { number, message } = req.params;

  if (!number || !message)
    return res.status(400).json({ error: "number and message are required" });

  // normalize number: remove non-digits and convert 0-prefix to 972
  number = number.replace(/\D/g, "");
  if (number.startsWith("0")) number = "972" + number.slice(1);

  try {
    const url = `https://api.green-api.com/waInstance${instanceId}/SendMessage/${token}`;
    const response = await axios.post(
      url,
      {
        chatId: `${number}@c.us`,
        message,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res
      .status(500)
      .json({ error: error?.response?.data || "Failed to send message" });
  }
});

// pinger || websites check

async function checkClientsWebs() {
  const clients = [
    { name: "optimum", env: process.env.Optimum },
    { name: "trianglek", env: process.env.TriangleK },
    { name: "sukkahdepot", env: process.env.SukkahDepot },
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
  console.log(`Server running on port ${PORT}`);
});
