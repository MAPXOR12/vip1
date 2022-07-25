const superagent = require("snekfetch");
const Discord = require('discord.js')
const lineReplyNoMention = require('discord-reply');
const color = (../config.js);
module.exports = {
  name: "dog",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 5,
  category: "fun",
  description: "Sends a random dog image",
  usage: "[command]",
  async execute(client, message, cmd, args, Discord) {
    superagent.get('https://nekos.life/api/v2/img/woof').end((err, response) => {
      const lewdembed = new Discord.MessageEmbed().setTimestamp().setTitle("🐶").setImage(response.body.url).setColor(`${color}`).setFooter(`🤣WHAT A DOG🤣`).setURL(response.body.url);
      message.lineReplyNoMention({ embed: lewdembed });
    })
  }
};
