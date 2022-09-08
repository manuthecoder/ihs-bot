const { EmbedBuilder } = require("discord.js");

export const sendHelpMessage = async (interaction: any) => {
  const helpEmbed = new EmbedBuilder()
    .setColor(0x385c3c)
    .setTitle("Commands")
    .setThumbnail("https://i.ibb.co/6Y7GYzq/Untitled-design-1.png")
    .addFields({ name: "/help", value: "List all of my commands" })
    .addFields({
      name: "/schedule",
      value: "Get the schedule for the current or upcoming week",
    })
    .addFields({
      name: "/flextime",
      value: "Opens a link to the flextime site",
    })
    .setTimestamp();
  // Send help embed
  await interaction.reply({ embeds: [helpEmbed] });
};
