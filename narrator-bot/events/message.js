const prompt = require(`../commands/prompt`);
const react = require(`../commands/react`);

const welcome = require(`../commands/welcome`);

module.exports = (client, message) => {
  if (message.content === "!prompt") {
    // react(message, "😄");
    prompt(message);
  }
  if (message.content === "!welcome") {
    // react(message, "😄");
    welcome(message);
  }
};
