import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();
const PORT = process.env.PORT || 10000;

// ton token de bot
const TOKEN = "8371944735:AAGBDsJu0uUlLeVdRiwlXVWJFko3j1Ao2Hg";
const WEB_APP_URL = "https://herrer83-webapp-2.onrender.com";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Bienvenue sur Herrer83 🌿", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Ouvrir le menu", web_app: { url: WEB_APP_URL } }]
      ]
    }
  });
});

app.get("/", (req, res) => res.send("Bot en ligne ✅"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
