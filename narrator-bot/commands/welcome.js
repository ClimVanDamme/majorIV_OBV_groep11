const Discord = module.require(`discord.js`);

module.exports = member => {
  // console.log(member.guild.channels);

  let embed = new Discord.RichEmbed()
    .setDescription(`Welkom`)
    .setColor(`#ff9a40`);
  member.guild.channels.get("586476134225412098").send({ embed: embed });
};
