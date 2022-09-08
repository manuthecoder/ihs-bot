require("dotenv/config");

import REST from "./rest";
const { SlashCommandBuilder, Routes } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("help")
    .setDescription("List all of my commands"),
  new SlashCommandBuilder()
    .setName("flextime")
    .setDescription("Opens a link to the flextime site"),
  new SlashCommandBuilder()
    .setName("schedule")
    .setDescription("Get the schedule for the current or upcoming week"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID
    ),
    {
      body: commands,
    }
  )
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
