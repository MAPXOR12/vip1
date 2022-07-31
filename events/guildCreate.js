const { Client, Guild, MessageEmbed } = require("discord.js")

/**
 * 
 * @param {Client} client 
 * @param {Guild} guild 
 */


module.exports = (client, guild) => {

 if (guild.memberCount < 100) {
	return guild.leave()
       }
 let channel = client.channels.cache.get("996753921596981279");
 const joinEmbed = new MessageEmbed()
       .setColor("#303136")
       .setTitle("New Server!!")
       .setThumbnail(guild.iconURL())
       .addField(
         "Guild:",
         `i just joined to here **${guild.name}**.\n\nGuild Members: [**${guild.memberCount}**]`,
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
       .setFooter(`Bzhe la xom`);
    channel.send(joinEmbed);

}
