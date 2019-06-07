const welcome = require(`../commands/Welcome`);

module.exports = (client, member) => {
  welcome(member);
};
