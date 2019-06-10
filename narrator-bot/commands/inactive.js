const conversationStarter = require(`../commands/conversationStarter`);
const random = require(`../functions`);

module.exports = client => {
  // inactivePrompts = [
  //   `Koekoek, iemand hier? Ik heb een nieuw onderwerp voor jullie.`,
  //   `De pauze is over, laten we er terug invliegen.`,
  //   `Je kan hier een speld horen vallen. Wat vinden jullie hiervan?`
  // ];

  if (client.channels.find(c => c.name === `podium`)) {
    conversationStarter(client, client.channels.find(c => c.name === `podium`));
  } else if (client.channels.find(c => c.name === `general`)) {
    conversationStarter(
      client,
      client.channels.find(c => c.name === `general`)
    );
  } else {
    console.log(`no suitable channel found`);
  }
};
