const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", async (req, res) => {
  try {
    const query = `SELECT * FROM ridosoft_optimum.buildings ;`;
    const [rows] = await (await connection()).execute(query);
    console.log("a:", rows);
    res.send(rows);
  } catch (err) {
    console.error("error getting buildings", err);
    res.status(500).json({ message: "general error" });
  }
});

module.exports = router;
