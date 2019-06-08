const Discord = module.require(`discord.js`);

module.exports = (message, emoji) => {
  return message.react(emoji);
};
