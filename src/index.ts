import Express from "express";
import { bot } from "./TelegramBotSetup";
import { OnTelegramMessageHandler } from "./OnTelegramMessageHandler";
// Create a new express application instance
const app = Express();

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", OnTelegramMessageHandler);

// bot.sendMessage("7198186743", "Di si rista!");

/*
  Start the Express server
*/

// The port the express app will listen on
const port = process.env.PORT || 3000;

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
