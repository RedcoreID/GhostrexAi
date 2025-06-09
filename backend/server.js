const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GHOSTREX_API_KEY;  // rename ENV variable juga

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", { // endpoint asli tetap
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Kamu adalah GhostreX, asisten AI pintar buatan GhostreX Indonesia. Jawablah sebagai GhostreX." },
          { role: "user", content: userMessage }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Tidak ada respon dari GhostreX.";
    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Terjadi kesalahan di server GhostreX." });
  }
});

app.listen(PORT, () => {
  console.log(`GhostreX AI aktif di http://localhost:${PORT}`);
});
