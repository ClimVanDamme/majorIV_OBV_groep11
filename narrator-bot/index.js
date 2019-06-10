const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");
const inactive = require(`./commands/inactive`);
const preShowInfo = require(`./commands/preShowInfo`);
const resetJson = require(`./commands/resetJson`);

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
    if (newTimeout > 0) {
      inactiveTimeout = newTimeout;
      clearInterval(timeoutInterval);
      timeoutInterval = setInterval(inactive, inactiveTimeout, client);
    } else {
      message.channel.send(`Interval moet groter zijn dan 0.`);
    }
  }
  if (message.content.startsWith(`!clearInactiveTimeout`)) {
    message.delete();
    clearInterval(timeoutInterval);
    console.log(`timeoutInterval cleared`);
  }
  if (message.content.startsWith(`!setInfoTimeout`)) {
    message.delete();
    const newTimeout = message.content.slice(16);
    if (newTimeout > 0) {
      infoTimeout = newTimeout;
      clearInterval(infoInterval);
      infoInterval = setInterval(preShowInfo, infoTimeout, client);
    } else {
      message.channel.send(`Interval moet groter zijn dan 0.`);
    }
  }
  if (message.content.startsWith(`!clearInfoTimeout`)) {
    message.delete();
    clearInterval(infoInterval);
    console.log(`infoInterval cleared`);
  }
  if (message.content === `!reset`) {
    message.delete();
    resetJson(client, message);
    console.log(`reset JSON`);
  }
});

timeoutInterval = client.setInterval(inactive, inactiveTimeout, client);
infoInterval = client.setInterval(preShowInfo, infoTimeout, client);

client.login(process.env.BOT_TOKEN);
