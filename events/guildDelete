const { Client, Guild, MessageEmbed } = require("discord.js")

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {

 let channel = client.channels.cache.get("996753968548036719");

 const joinEmbed = new MessageEmbed()
       .setColor("#303136")
       .setTitle("Kicked From Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just kicked from here **${guild.name}**.\n\nGuild Members: [**${guild.memberCount}**]`,
         true
       )
       .addField(
         "Owner:",
         `${guild.owner}`,
         true
       )
       .addField(
         "Servers:",
         `[${client.guilds.cache.size}]`,
         true
       )
       .setTimestamp() // moment().format('LLL'),
       .setFooter(`utff`);
    channel.send(joinEmbed);

}
