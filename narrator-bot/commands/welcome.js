const Discord = module.require(`discord.js`);

module.exports = member => {
  // console.log(member.guild.channels);

  let embed = new Discord.RichEmbed()
    .setTitle(`Welkom!`)
    .setDescription(
      `Welkom op het podium van Macbeth. Hier speel jij je personage. Hoe zou jij reageren als je in de schoenen van je personage zou staan? Beantwoord de stellingen en leer het verhaal van de andere personages kennen. Veel conversatie-genot!`
    )
    .setColor(`#ff9a40`);
  // member.guild.channels.get("586476134225412098").send({ embed: embed });
  member.channel.send({ embed: embed });
  let charEmbed = new Discord.RichEmbed()
    .setTitle(`Wie ben jij?`)
    .setDescription(
      `Dit vind je terug op je profiel. Klik op het icoon van jouw personage.`
    )
    .addField(
      `💀 Macbeth`,
      `"Zoek geen ruzie met mij, want er is een kans dat ik je vermoord."`
    )
    .addField(
      `👸 Lady MacbethMacbeth`,
      `"Mijn man heeft mij de dood ingeleid."`
    )
    .addField(
      `👑 Koning Duncan`,
      `"Ik ben een vaderfiguur, maar wel wat naïef."`
    );
  // member.guild.channels
  //   .get("586476134225412098")
  // .send({ embed: charEmbed })
  // .then(sentEmbed => {
  //   sentEmbed.react("💀");
  //   sentEmbed.react("👸");
  //   sentEmbed.react("👑");
  // });
  member.channel.send({ embed: charEmbed }).then(async sentEmbed => {
    await sentEmbed.react("💀");
    await sentEmbed.react("👸");
    await sentEmbed.react("👑");
  });
};
