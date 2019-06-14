const Discord = module.require(`discord.js`);

module.exports = message => {
  // info
  let embed = new Discord.RichEmbed()
    .setTitle(`Welkom!`)
    .setDescription(
      `Dag ${
        message.author
      }. Welkom op het podium van Macbeth. Hier speel jij je personage. Hoe zou jij reageren als je in de schoenen van je personage zou staan? Beantwoord de stellingen en leer het verhaal van de andere personages kennen. Veel conversatie-genot!`
    )
    .addField(`👍 Top!`, `klik op de duim om dit bericht te verwijderen.`)
    .setColor(`#594157`);
  // send
  message.channel.send({ embed: embed }).then(async sentEmbed => {
    await sentEmbed.react("👍");
  });

  // characters
  let charEmbed = new Discord.RichEmbed()
    .setTitle(`Wie ben jij?`)
    .setDescription(`Klik op het icoon van jouw personage. ${message.author}`)
    .addField(
      `💀 Macbeth `,
      `"Zoek geen ruzie met mij, want er is een kans dat ik je vermoord."`
    )
    .addField(
      `👸 Lady MacbethMacbeth`,
      `"Mijn man heeft mij de dood ingeleid."`
    )
    .addField(
      `👑 Koning Duncan`,
      `"Ik ben een vaderfiguur, maar wel wat naïef."`
    )
    .addField(`🗡 Macduff`, `"Voor mijn gezin moet je door mij."`)
    .addField(`👻 Banquo`, `"Van mij raak je nog niet zo makkelijk af."`)
    .setColor(`#C4DDE9`);
  // send
  message.channel.send({ embed: charEmbed }).then(async sentEmbed => {
    await sentEmbed.react("💀");
    await sentEmbed.react("👸");
    await sentEmbed.react("👑");
    await sentEmbed.react("🗡");
    await sentEmbed.react("👻");
  });

  // Delete user message
  if (!message.member.permissions.has(`ADMINISTRATOR`)) {
    message.delete();
  }
};
