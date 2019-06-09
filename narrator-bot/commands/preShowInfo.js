const Discord = module.require(`discord.js`);
const random = require(`../functions`);

module.exports = client => {
  const sendMessage = channel => {
    const messageType = random(0, 3);

    let randomMessage;
    switch (messageType) {
      case 0:
        randomMessage = client.sentences[`tips`][random(0, 3)];
        const embed = new Discord.RichEmbed()
          .setTitle(`💡 Tip: tijdens de voorstelling.`)
          .setDescription(randomMessage)
          .setColor(`#FFCB30`);
        channel.send({ embed: embed });
        break;
      case 1:
        randomMessage = client.sentences[`videos`][random(0, 1)];
        channel.send(
          `🎥 Ben jij beniewd hoe het er achter de schermen aan toe gaat? Kijk even mee.`
        );
        channel.send(randomMessage);
        break;
      case 2:
        randomMessage = client.sentences[`muziek`][random(0, 1)];
        channel.send(
          `🎶 Kan je niet wachten tot de voorstelling? Luister alvast naar de spotify playlist.`
        );
        channel.send(randomMessage);
        break;
    }
  };

  if (client.channels.find(c => c.name === `podium`)) {
    sendMessage(client.channels.find(c => c.name === `podium`));
  } else if (client.channels.find(c => c.name === `general`)) {
    sendMessage(client.channels.find(c => c.name === `general`));
  } else {
    console.log(`no suitable channel found`);
  }
};
