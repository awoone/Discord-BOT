const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let igor = [
    'https://i.imgur.com/XMtjIED.png', 
    'https://i.imgur.com/ce8DKTF.png', 
    'https://i.imgur.com/ERIxAtp.png',
    'https://i.imgur.com/CGn88XO.png', 
    'https://i.imgur.com/z72jJKL.png'
];

const cookembed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`Pinscher Malvoso, ele mesmo!`)
.setImage(igor[Math.floor(Math.random() * igor.length)])
.setFooter(message.author.tag)
.setTimestamp()
message.channel.send(cookembed)
}