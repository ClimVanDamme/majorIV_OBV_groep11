const prompt = require(`../commands/prompt`);

module.exports = (client, message) => {
  if (message.content === "!prompt") {
    prompt(message);
  }
};
