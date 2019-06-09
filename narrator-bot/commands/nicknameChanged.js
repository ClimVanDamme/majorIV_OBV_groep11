const Discord = module.require(`discord.js`);

module.exports = (reaction, user) => {
  const firstMemberCalls = [
    `Hey ${user}, blij dat je er bent! Er zullen spoedig anderen komen.`,
    `Dag ${user}. Nog even geduld, je medespelers zijn op komst!`,
    `${user} is alleen hier? Geen paniek! Ik zoek zo spoedig mogelijk medespelers.`
  ];

  const memberCalls = [
    `${user} treedt het podium op.`,
    `${user} is ook van de partij!`,
    `Hé allen, ${user} is net toegekomen!`
  ];

  if (reaction.message.guild.memberCount < 2) {
    let embed = new Discord.RichEmbed()
      .setDescription(
        firstMemberCalls[Math.floor(Math.random() * firstMemberCalls.length)]
      )
      .setColor(`#C4DDE9`);

    return reaction.message.channel.send(embed);
  } else {
    let embed = new Discord.RichEmbed()
      .setDescription(
        memberCalls[Math.floor(Math.random() * memberCalls.length)]
      )
      .setColor(`#C4DDE9`);

    return reaction.message.channel.send(embed);
  }
};
