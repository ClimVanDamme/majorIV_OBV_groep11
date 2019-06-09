const Discord = module.require(`discord.js`);

module.exports = (channel, reset = false) => {
  starters = [
    `Drie heksen voorspellen de toekomst van MacBeth, hoe rooskleurig ziet zijn toekomst eruit?`,
    `Ook Banquo krijgt een voorspelling te horen, op welke manier speelt de achterdochtigheid van Macbeth een rol in zijn toekomst?`,
    `Koning Duncan overnacht in het kasteel van Macbeth en zijn vrouw. Wie zorgt ervoor dat de koning de eeuwige slaap vindt?`,
    `Er is een bebloede dolk gevonden bij de dronken, slapende wachters. Hoe is die daar geraakt?`,
    `Hoe komt het dat de wachters hun zijde van het verhaal niet kunnen vertellen?`,
    `Welk duister geheim verklapt de slaapwandelende Lady Macbeth aan haar dienstmeisje?`,
    `Wie zou de familie van edelman Macduff om het leven gebracht hebben na zijn vertrek naar Engeland?`,
    `Hoe kan een persoon niet door een vrouw gebaard zijn?`
  ];

  const randomNumber = Math.floor(Math.random() * starters.length);

  const embed = new Discord.RichEmbed()
    .setDescription(starters[randomNumber])
    .setColor(`#ff9a40`);

  channel.send(`Hier is alvast iets om over na te denken.`);
  channel.send({ embed: embed });
};
