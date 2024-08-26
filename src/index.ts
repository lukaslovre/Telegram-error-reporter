import Express from "express";
import { bot, sendToSubscribedUsers } from "./TelegramBotSetup.js";
import { OnTelegramMessageHandler } from "./OnTelegramMessageHandler.js";
// Create a new express application instance
const app = Express();

app.use(Express.json());

// Listen for any kind of message.
bot.on("message", OnTelegramMessageHandler);

app.post("/report_error", (req, res) => {
  const sentErrorReport = req.body;

  console.log(sentErrorReport);

  if (!sentErrorReport) {
    return res.status(400).send("Request needs to be a valid JSON.");
  }

  const stringifiedError = JSON.stringify(sentErrorReport, null, 2).slice(
    0,
    4096
  ); // Max message length

  sendToSubscribedUsers(stringifiedError);

  res.status(200).send();
});

// The port the express app will listen on
const port = process.env.PORT || 3000;

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
