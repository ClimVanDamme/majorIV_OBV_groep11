module.exports = (client, reaction, user) => {
  const str = reaction.message.embeds[0].description;
  const userId = str.substring(str.lastIndexOf("@") + 1, str.lastIndexOf(">"));

  if (
    reaction.message.embeds[0].title === "Wie ben jij?" &&
    user.id === userId
  ) {
    if (reaction.emoji.name === "💀") {
      reaction.message.guild.members.get(userId).setNickname("Macbeth");
    }
    if (reaction.emoji.name === "👸") {
      reaction.message.guild.members.get(userId).setNickname("Lady Macbeth");
    }
    if (reaction.emoji.name === "👑") {
      reaction.message.guild.members.get(userId).setNickname("Koning Duncan");
    }
  }

  //   if (reaction.emoji.name === "💀") {
  //     const str = reaction.message.embeds[0].description;
  //     var userId = str.substring(str.lastIndexOf("@") + 1, str.lastIndexOf(">"));
  //     if (
  //       reaction.message.embeds[0].title === "Wie ben jij?" &&
  //       user.id === userId
  //     ) {
  //       reaction.message.guild.members.get(userId).setNickname("Macbeth");
  //     }
  //   }
  //   if (reaction.emoji.name === "👸") {
  //   }
  //   if (reaction.emoji.name === "👑") {
  //   }
};
