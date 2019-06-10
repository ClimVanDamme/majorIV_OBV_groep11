const Discord = module.require(`discord.js`);

module.exports = message => {
  // info
  let embed = new Discord.RichEmbed()
    .setTitle(`Dag vrienden!`)
    .setDescription(
      `De voorstelling komt er bijna aan. Hebben jullie zin om samen te gaan?`
    )
    .addField(`👍 Natuurlijk!`, `Ik kijk er al naar uit!`)
    .addField(`👎 Liever niet.`, `We zullen je missen.`)
    .setColor(`#594157`);
  // send
  message.channel.send({ embed: embed }).then(async sentEmbed => {
    await sentEmbed.react("👍");
    await sentEmbed.react("👎");
  });

  // Delete user message
  if (!message.member.permissions.has(`ADMINISTRATOR`)) {
    message.delete();
  }
};
