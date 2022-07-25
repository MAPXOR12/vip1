const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const axios = require("axios");

module.exports = {
  name: "anime",
  aliases: ["am"],
  description: "Gives Random Anime Gif/PP",
  usage: "anime",
  run: async (client, message, args) => {

        axios.get("https://api.roxza.me/v1/random?type=anime")
            .then(res => {
                let embed = new Discord.MessageEmbed()
                    .setDescription(`**Anime Gif**`)
                    .setColor(Color)
                    .setImage(res.data.url)
                    .setFooter(`${message.author.tag}`, message.author.avatarURL)
                   message.channel.send(embed);
            })
    }
