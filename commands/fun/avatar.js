



const Discord = require('discord.js')
const { MessageButton , MessageActionRow } = require(`discord-buttons`)
const { Color } = require("../../config.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  description: "show user/your avatar.",
  usage: "avatar @user/your",
  run: async (client, message, args) => {

 
  const user = message.mentions.users.first()|| client.users.cache.get(message.content.split(' ')[1]) || message.author;

const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setAuthor(user.username , user.avatarURL())
    .setImage(user.avatarURL({dynamic : true, size : 1024}))


const u = new MessageButton()
.setStyle(`url`)
.setLabel(`Download Avatar`)
.setURL(`${user.displayAvatarURL({
 dynamic: true,
})}`)
const png = new MessageButton()
.setStyle(`url`)
.setLabel(`png`)
.setURL(`{Member.user.displayAvatarURL({
 format: "png",
 dynamic: true,
})}`)

const row = new MessageActionRow()
.addComponent([u , png])
message.channel.send({components: [row], embed: embed})

   }
}

