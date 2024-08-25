import TelegramBot from "node-telegram-bot-api";
import { sendTelegramMessage } from "./TelegramBotSetup.js";

type TelegramOnListener = (
  message: TelegramBot.Message,
  metadata: TelegramBot.Metadata
) => any;

export const OnTelegramMessageHandler: TelegramOnListener = (message, metadata) => {
  const chatId = message.chat.id;

  console.log(message);
  // send a message to the chat acknowledging receipt of their message

  sendTelegramMessage(chatId, `Received your message ${chatId}. Poslano u MUP!`);
};
