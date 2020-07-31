exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      'Você precisa estar em um canal de voz primeiro!'
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue)
    return message.channel.send(
      'Não tem nada tocando no momento para pular.'
    );
  const embed = {
    "description": 'Pulando para a próxima música!',
    "color": "YELLOW",
  };
  message.channel.send({ embed }).then(msg => {
    msg.react('⏭️')
  }).then(r => {
    message.delete()
  });
  serverQueue.connection.dispatcher.end();
};
