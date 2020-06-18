const weather = require('weather-js')
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {

        if(result[0] != undefined){
            var current = result[0].current;
            var location = result[0].location;
            const tempEmbed = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Clima atual na região de: ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('BLUE')
            .addField(`Fuso horário`, `UTC${location.timezone}`, true)
            .addField(`Temperatura`, `${current.temperature} Cº`, true)
            .addField(`Sensação`, `${current.feelslike} Cº`, true)
            .addField(`Vento`, `${current.winddisplay}`, true)
            .addField(`Umidade`, `${current.humidity}%`, true)
            .setTimestamp()
            .setFooter(message.author.tag);
            message.channel.send(tempEmbed);
        }else{
            message.reply('Esta localização não está em meu alcance! Me desculpe.')
        }
    })
}
    
    
