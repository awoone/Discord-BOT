const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))
    } else {
        if (!args[1]) {
            let member = message.mentions.members.first();
            const user = message.mentions.users.first();
            member.voice.setMute(true);
            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setThumbnail(user.displayAvatarURL())
                .setDescription(`O usuário ${member} foi mutado por tempo indefinido!`)
                .addField("Staff", message.author.username, true)
                .addField("Motivo", args[2], true)
                .setTimestamp()
                .setFooter(`Comando =mute`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            message.channel.send(embed)
        } else {
            var segundos = args[1];
            let member = message.mentions.members.first();
            const user = message.mentions.users.first();
            member.voice.setMute(true);
            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setThumbnail(user.displayAvatarURL())
                .setDescription(`O usuário ${member} foi mutado por ${segundos} segundos!`)
                .addField("Staff", message.author.username, true)
                .addField("Motivo", args[2], true)
                .setTimestamp()
                .setFooter(`Comando =mute`, `https://cdn.discordapp.com/avatars/704392967074349087/50aae36a503d4f4f4d32253aa8010afc.png`)
            message.channel.send(embed).then(msg => msg.delete({ timeout: `${segundos}` * 1000 }))
            setTimeout(() => { member.voice.setMute(false) }, `${segundos}` * 1000);
        }

    }
}

exports.conf = {
    commands: ["mute", "mutar"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'mute', 
    description: 'Muta um usuário',
    usage: '[=]mute',
    kategori: 'staff'
};