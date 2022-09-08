require("dotenv/config");

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

import { sendHelpMessage } from "./commands/help.js";
import { sendScheduleMessage } from "./commands/schedule.js";

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "help") sendHelpMessage(interaction);
  else if (commandName === "schedule") sendScheduleMessage(interaction);
});

client.login(process.env.DISCORD_TOKEN);
