const Discord = module.require(`discord.js`);

module.exports = message => {
  let embed = new Discord.RichEmbed()
    .setDescription(`Moet Prins Hans doen wat het hart begeert?`)
    .setColor(`#ff9a40`)
    .setImage(
      "https://images.unsplash.com/photo-1523902497786-778363848e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80"
    );
  return message.channel.send({ embed: embed });
};
