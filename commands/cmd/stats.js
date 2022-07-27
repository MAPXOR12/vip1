const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "owner",
aliases: ["detail"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 743887896481628190){
    const noperms = new MessageEmbed()
    .setDescription("This Command Only Use By My Owner **NPG** ")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`Hey My name is **${message.client.user.username}** and My Work is fun mode etc.`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: " Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: " Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: " Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<a:astorzping:825420347112554496> Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
     )
  .setColor("3498DB")
  .setFooter("Thx For Choosing automodbot")  

return message.channel.send(embed);
    return message.react("<:astroz_correct:825597747800309770>");
}
};

console.log("stats working")
