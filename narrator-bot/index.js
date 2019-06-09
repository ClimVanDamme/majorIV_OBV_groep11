const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");
const inactive = require(`./commands/inactive`);
const preShowInfo = require(`./commands/preShowInfo`);

const client = new Discord.Client({ disableEveryone: true });
let timeoutInterval;
let inactiveTimeout = 300000;

let infoInterval;
let infoTimeout = 180000;

client.sentences = require(`./assets/sentences.json`);

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.on(`message`, message => {
  clearInterval(timeoutInterval);
  timeoutInterval = setInterval(inactive, inactiveTimeout, client);

  if (message.content.startsWith(`!setInactiveTimeout`)) {
    message.delete();
    const newTimeout = message.content.slice(20);
    inactiveTimeout = newTimeout;
    clearInterval(timeoutInterval);
    timeoutInterval = setInterval(inactive, inactiveTimeout, client);
  }
  if (message.content.startsWith(`!setInfoTimeout`)) {
    message.delete();
    const newTimeout = message.content.slice(16);
    infoTimeout = newTimeout;
    clearInterval(infoInterval);
    infoInterval = setInterval(preShowInfo, infoTimeout, client);
  }
});

timeoutInterval = client.setInterval(inactive, inactiveTimeout, client);
infoInterval = client.setInterval(preShowInfo, infoTimeout, client);

client.login(process.env.BOT_TOKEN);
