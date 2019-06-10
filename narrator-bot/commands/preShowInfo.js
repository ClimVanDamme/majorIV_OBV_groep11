const Discord = module.require(`discord.js`);
fs = require("fs");
const random = require(`../functions`);

module.exports = client => {
  // client.sentences[`tips`][`0`].sent = true;
  // fs.writeFile(
  //   "./assets/sentences.json",
  //   JSON.stringify(client.sentences, null, 4),
  //   err => {
  //     if (err) throw err;
  //   }
  // );
  // console.log(client.sentences);

  //

  // NAAR JSON KIJKEN -> CHECK VOOR FALSE -> CHECK TYPE -> HANDLE ACCORDINGLY

  const getRandomMessage = () => {
    const unsent = [];

    Object.keys(client.sentences[`tips`]).forEach(tip => {
      if (client.sentences[`tips`][tip].sent === false) {
        unsent.push(client.sentences[`tips`][tip]);
      }
    });

    if (unsent.length == 1) {
      console.log(`no more tips`);
      endInfoTimer();
      lastMessage();
    } else if (unsent.length < 1) {
      endInfoTimer();
      return;
    }

    const _randomMessage = unsent[random(0, unsent.length)];
    Object.keys(client.sentences[`tips`]).forEach(tip => {
      if (client.sentences[`tips`][tip].message === _randomMessage.message) {
        client.sentences[`tips`][tip].sent = true;
        fs.writeFile(
          "./assets/sentences.json",
          JSON.stringify(client.sentences, null, 4),
          err => {
            if (err) throw err;
          }
        );
      }
    });
    return _randomMessage;
  };

  const endInfoTimer = () => {
    if (client.channels.find(c => c.name === `podium`)) {
      client.channels.find(c => c.name === `podium`).send(`!clearInfoTimeout`);
    } else if (client.channels.find(c => c.name === `general`)) {
      client.channels.find(c => c.name === `general`).send(`!clearInfoTimeout`);
    } else {
      console.log(`no suitable channel found`);
    }
  };

  const lastMessage = () => {
    if (client.channels.find(c => c.name === `podium`)) {
      client.channels
        .find(c => c.name === `podium`)
        .send(`Dit is mijn laatste tip. Geniet van de voorstelling!`);
    } else if (client.channels.find(c => c.name === `general`)) {
      client.channels
        .find(c => c.name === `general`)
        .send(`Dit is mijn laatste tip. Geniet van de voorstelling!`);
    } else {
      console.log(`no suitable channel found`);
    }
  };

  const sendMessage = channel => {
    const randomMessage = getRandomMessage();
    if (randomMessage) {
      switch (randomMessage.type) {
        case `tip`:
          const embed = new Discord.RichEmbed()
            .setTitle(`💡 Tip: tijdens de voorstelling.`)
            .setDescription(randomMessage.message)
            .setColor(`#FFCB30`);
          channel.send({ embed: embed });
          break;
        case `video`:
          console.log(`video`);
          channel.send(
            `🎥 Ben jij beniewd hoe het er achter de schermen aan toe gaat? Kijk even mee.`
          );
          channel.send(randomMessage.message);
          break;
        case `music`:
          console.log(`music`);
          channel.send(
            `🎶 Kan je niet wachten tot de voorstelling? Luister alvast naar de spotify playlist.`
          );
          channel.send(randomMessage.message);
          break;
      }
    } else {
      console.log(`no message`);
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
