const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "blowjob",
  category: "nsfw",
description: "",
run: async (client, message, args, level) => {
//command
if (!message.channel.nsfw) return message.react('💢');
superagent.get('https://nekos.life/api/v2/img/blowjob')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setFooter("Tags: Blowjob")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};