import { Telegraf, Markup } from "telegraf";
import "dotenv/config";

const token = process.env.bot_token;
const web_app_url = process.env.web_app_url;
const message = process.env.message ?? "open app link";
const button_title = process.env.button_title ?? "link";
const bot_command = process.env.bot_command ?? "start";

const bot = new Telegraf(token);

const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
  Markup.button.url(button_title, web_app_url),
]);

const sendBtn = (ctx) =>
  ctx.telegram.sendMessage(ctx.chat.id, message, inlineMessageRatingKeyboard);

bot.command(bot_command, sendBtn);

bot.launch();
