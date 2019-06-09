const Discord = module.require(`discord.js`);

module.exports = member => {
  // introduction
  let embed = new Discord.RichEmbed()
    .setTitle(`Welkom!`)
    .setDescription(
      `Dag <@${
        member.id
      }>, Welkom op het podium van Macbeth. Hier speel jij je personage. Hoe zou jij reageren als je in de schoenen van je personage zou staan? Beantwoord de stellingen en leer het verhaal van de andere personages kennen. Veel conversatie-genot!`
    )
    .addField(`👍`, `klik op de duim om dit bericht te verwijderen.`)
    .setColor(`#594157`);
  // send
  if (member.guild.channels.find(c => c.name === `podium`)) {
    member.guild.channels
      .find(channel => channel.name === `podium`)
      .send({ embed: embed })
      .then(async sentEmbed => {
        await sentEmbed.react("👍");
      });
  } else if (member.guild.channels.find(c => c.name === `general`)) {
    member.guild.channels
      .find(channel => channel.name === `general`)
      .send({ embed: embed })
      .then(async sentEmbed => {
        await sentEmbed.react("👍");
      });
  } else {
    console.log(`No suitable channel found`);
  }

  // characters
  let charEmbed = new Discord.RichEmbed()
    .setTitle(`Wie ben jij?`)
    .setDescription(`Klik op het icoon van jouw personage. <@${member.id}>`)
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
    .setColor(`#C4DDE9`);
  // send
  if (member.guild.channels.find(c => c.name === `podium`)) {
    member.guild.channels
      .find(channel => channel.name === `podium`)
      .send({ embed: charEmbed })
      .then(async sentEmbed => {
        await sentEmbed.react("💀");
        await sentEmbed.react("👸");
        await sentEmbed.react("👑");
      });
  } else if (member.guild.channels.find(c => c.name === `general`)) {
    member.guild.channels
      .find(channel => channel.name === `podium`)
      .send({ embed: charEmbed })
      .then(async sentEmbed => {
        await sentEmbed.react("💀");
        await sentEmbed.react("👸");
        await sentEmbed.react("👑");
      });
  } else {
    console.log(`No suitable channel found`);
  }
};
