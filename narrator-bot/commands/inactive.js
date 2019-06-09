const conversationStarter = require(`../commands/conversationStarter`);
const random = require(`../functions`);

module.exports = client => {
  // inactivePrompts = [
  //   `Koekoek, iemand hier? Ik heb een nieuw onderwerp voor jullie.`,
  //   `De pauze is over, laten we er terug invliegen.`,
  //   `Je kan hier een speld horen vallen. Wat vinden jullie hiervan?`
  // ];

  const randomPrompt = client.sentences["inactivePrompts"][random(0, 3)];

  if (client.channels.find(c => c.name === `podium`)) {
    client.channels.find(c => c.name === `podium`).send(randomPrompt);
    conversationStarter(client, client.channels.find(c => c.name === `podium`));
  } else if (client.channels.find(c => c.name === `general`)) {
    client.channels.find(c => c.name === `general`).send(randomPrompt);
    conversationStarter(
      client,
      client.channels.find(c => c.name === `general`)
    );
  } else {
    console.log(`no suitable channel found`);
  }
};
