const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "pussyart",
  category: "nsfw",
description: "",
run: async (client, message, args, level) => {
//command
if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/pussy_jpg')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: Pussy Art`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};