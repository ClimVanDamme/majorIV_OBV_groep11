const Discord = module.require(`discord.js`);
const random = require(`../functions`);

module.exports = (client, channel) => {
  let randomPrompt = client.sentences["inactivePrompts"][random(0, 3)].message;

  const getRandomStarter = () => {
    const unsent = [];

    Object.keys(client.sentences[`starters`]).forEach(starter => {
      if (client.sentences[`starters`][starter].sent === false) {
        unsent.push(client.sentences[`starters`][starter]);
      }
    });

    if (unsent.length == 1) {
      console.log(`no more starters`);
      randomPrompt = `Dit is mijn laatste onderwerp. Hierna zullen jullie zelf creatief moeten zijn!`;
      // endInactiveTimer();
    } else if (unsent.length < 1) {
      // endInactiveTimer();
      return;
    }

    const _randomMessage = unsent[random(0, unsent.length)];
    Object.keys(client.sentences[`starters`]).forEach(starter => {
      if (
        client.sentences[`starters`][starter].message === _randomMessage.message
      ) {
        client.sentences[`starters`][starter].sent = true;
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

  // const endInactiveTimer = () => {
  //   channel.send(`!clearInactiveTimeout`);
  // };

  const lastMessage = () => {
    channel.send(
      `Dit is mijn laatste onderwerp. Hierna zullen jullie zelf creatief moeten zijn!`
    );
  };

  const randomStarter = getRandomStarter();

  if (randomStarter) {
    const embed = new Discord.RichEmbed()
      .setDescription(randomStarter.message)
      .setColor(`#594157`);
    channel.send(randomPrompt);
    channel.send({ embed: embed });
  } else {
    console.log(`no more starters`);
  }
};
