const Discord = module.require(`discord.js`);
const nicknameChanged = require(`../commands/nicknameChanged`);
const conversatieStarter = require(`../commands/conversationStarter`);

module.exports = async (client, reaction, user) => {
  const str = reaction.message.embeds[0].description;
  const userId = str.substring(str.lastIndexOf("@") + 1, str.lastIndexOf(">"));

  let adminEmbed = new Discord.RichEmbed()
    .setDescription(`Ik kan de bijnaam van een administrator niet veranderen.`)
    .setColor(`#E63B44`);

  // PERSONAGES

  if (
    reaction.message.embeds[0].title === "Wie ben jij?" &&
    user.id === userId
  ) {
    if (
      !reaction.message.guild.members
        .find(member => member.id === user.id)
        .permissions.has(`ADMINISTRATOR`)
    ) {
      switch (reaction.emoji.name) {
        case "💀":
          reaction.message.guild.members.get(userId).setNickname("Macbeth");
          break;
        case "👸":
          reaction.message.guild.members
            .get(userId)
            .setNickname("Lady Macbeth");
          reaction.message.delete();
          break;
        case "👑":
          reaction.message.guild.members
            .get(userId)
            .setNickname("Koning Duncan");
          break;
      }
      // async
      await reaction.message.delete();
      await nicknameChanged(reaction, user);
      await conversatieStarter(reaction.message.channel);
    } else {
      reaction.message.delete();
      reaction.message.channel.send(adminEmbed);
    }
  }

  // INTRO

  if (reaction.message.embeds[0].title === "Welkom!" && user.id === userId) {
    if (reaction.emoji.name === "👍") {
      reaction.message.delete(500);
    }
  }
};
