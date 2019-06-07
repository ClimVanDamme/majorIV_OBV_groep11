module.exports = async client => {
  console.log(`Logged in as ${client.user.tag}!`);
  try {
    let link = await client.generateInvite([`ADMINISTRATOR`]);
    console.log(link);
  } catch (e) {
    console.log(e.stack);
  }
};
