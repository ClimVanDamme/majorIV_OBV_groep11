const conversationStarter = require(`../commands/conversationStarter`);
const welcome_message = require(`../commands/welcome_message`);
const groupInvite = require(`../commands/groupInvite`);

module.exports = (client, message) => {
  if (message.content === "!prompt") {
    // react(message, "😄");
    conversationStarter(client, message.channel);
  }
  if (message.content === "!welcome") {
    // react(message, "😄");
    welcome_message(message);
  }
  if (message.content === "!group") {
    // react(message, "😄");
    groupInvite(message);
  }
};
