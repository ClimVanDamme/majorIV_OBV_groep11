module.exports = (client, message) => {
  // reset all info

  Object.keys(client.sentences[`starters`]).forEach(starter => {
    client.sentences[`starters`][starter].sent = false;
  });
  Object.keys(client.sentences[`tips`]).forEach(tip => {
    client.sentences[`tips`][tip].sent = false;
  });

  fs.writeFile(
    "./assets/sentences.json",
    JSON.stringify(client.sentences, null, 4),
    err => {
      if (err) throw err;
    }
  );

  message.channel.send(`!setInfoTimeout 180000`);
};
