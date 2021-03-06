const Discord = require("discord.js");
const Database = require("../../Helpers/Database");
const vt = new Database("Database", "Voice");
const mdb = new Database("Database", "Message");
const vtWeekly = new Database("Database", "VoiceWeekly");
const mdbWeekly = new Database("Database", "MessageWeekly");
const vtMonthly = new Database("Database", "VoiceMonthly");
const mdbMonthly = new Database("Database", "MessageMonthly");
const vtDaily = new Database("Database", "VoiceDaily");
const mdbDaily = new Database("Database", "MessageDaily");
// exports.onLoad = (client) => {};
/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has("MANAGE_GUILD")) return message.reply("você não tem permissão para isso");
    let deleteMessages = [];

    let msg = await message.reply("quais dados você deseja redefinir? `(tudo, voz e mensagens)` digite um destes.");
    deleteMessages.push(msg);

    let reply = await message.channel.awaitMessages((m) => m.author.id == message.author.id, {
        time: 15000,
        max: 1
    }).then(messages => messages.first()).catch(err => undefined);
    if (!reply) {
        message.reply("15 segundos se passaram e você não conseguiu responder corretamente.")
        return delete_Messages(deleteMessages);
    }
    deleteMessages.push(reply);

    if (!["tudo", "voz", "mensagens"].some(type => reply.content.toLowerCase() == type)) return delete_Messages(deleteMessages);

    switch (reply.content) {
        case "tudo":
            vt.set(`stats.${message.guild.id}`, {});
            mdb.set(`stats.${message.guild.id}`, {});
            vtWeekly.set(`stats.${message.guild.id}`, {});
            mdbWeekly.set(`stats.${message.guild.id}`, {});
            vtDaily.set(`stats.${message.guild.id}`, {});
            mdbDaily.set(`stats.${message.guild.id}`, {});
            vtMonthly.set(`stats.${message.guild.id}`, {});
            mdbMonthly.set(`stats.${message.guild.id}`, {});
            break;
        case "voz":
            vt.set(`stats.${message.guild.id}`, {});
            vtWeekly.set(`stats.${message.guild.id}`, {});
            vtDaily.set(`stats.${message.guild.id}`, {});
            vtMonthly.set(`stats.${message.guild.id}`, {});
            break;
        case "mensagens":
            mdb.set(`stats.${message.guild.id}`, {});
            mdbWeekly.set(`stats.${message.guild.id}`, {});
            mdbDaily.set(`stats.${message.guild.id}`, {});
            mdbMonthly.set(`stats.${message.guild.id}`, {});
            break;
        default:
            vt.set(`stats.${message.guild.id}`, {});
            mdb.set(`stats.${message.guild.id}`, {});
            vtWeekly.set(`stats.${message.guild.id}`, {});
            mdbWeekly.set(`stats.${message.guild.id}`, {});
            vtDaily.set(`stats.${message.guild.id}`, {});
            mdbDaily.set(`stats.${message.guild.id}`, {});
            vtMonthly.set(`stats.${message.guild.id}`, {});
            mdbMonthly.set(`stats.${message.guild.id}`, {});
            break;
    }
    delete_Messages(deleteMessages);
    message.reply(`\`${reply.content}\` informação foi apagada com sucesso.`).then(m => m.delete({ timeout: 5000 }));
};

exports.conf = {
    commands: ["reset", "rstats", "resetstat", "resetstats"],
    enabled: true,
    guildOnly: true
};

exports.help = {
    name: 'reset',
    description: 'Reseta suas informações.',
    usage: '[=]reset',
    kategori: 'stats'
};

function delete_Messages(messages) {
    messages.forEach(message => {
        if (message.deletable && !message.deleted) message.delete().catch();
    });
}
