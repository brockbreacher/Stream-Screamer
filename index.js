const { Client, Intents , Args } = require("discord.js");
require('dotenv').config()
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
 
client.on("ready", () => {
  console.log("I am ready!");
 console.log("change this part");
});
 
client.on('message', message => {
    if (message.content.startsWith(process.env.PREFIX)) {
        const SayMessage = message.content.slice(6).trim();
        client.channels.cache.get(process.env.CHANNEL).send(SayMessage)
    }
});
 
client.login(process.env.TOKEN);