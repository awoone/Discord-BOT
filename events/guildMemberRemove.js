module.exports = async (client, member) => {
    let myGuild = client.guilds.cache.get('364926866487902208');
    let memberCount = myGuild.memberCount;
    console.log('Usúarios no servidor: ' + memberCount);
    let memberCountChannel = myGuild.channels.cache.get('704815480967266385');
    memberCountChannel.setName('👥 | Usuários: ' + memberCount);

    member.guild.channels.cache.get('694285200582115418').send(`<@${user.id}> fugiu da reabilitação! Vocês conhecem alguém da familia dele?`)
}