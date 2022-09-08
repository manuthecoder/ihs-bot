const { EmbedBuilder } = require("discord.js");
let Parser = require("rss-parser");
let parser = new Parser();

export const sendScheduleMessage = async (interaction: any) => {
  let feed = await parser.parseURL(
    "https://irvinehigh.iusd.org/school-events-feeds/rss/all"
  );

  let helpEmbed = new EmbedBuilder()
    .setColor(0x385c3c)
    .setTitle("Events")
    .setThumbnail("https://i.ibb.co/6Y7GYzq/Untitled-design-1.png")
    // .addFields({ name: "/help", value: "List all of my commands" })
    .setTimestamp();

  feed.items.forEach((item: any) => {
    helpEmbed.addFields({
      name: item.title.replace("&#039;", "'"),
      value: item.link,
    });
  });
  // Send help embed
  await interaction.reply({ embeds: [helpEmbed] });
};
