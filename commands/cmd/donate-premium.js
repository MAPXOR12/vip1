const { ownerID } = ("../../config.js");

module.exports = {
    name: 'turnoff',
    aliases: ['shutdown', 'close'],

    async execute(client, message) {
        if (message.author.id !== ownerID) return;
        message.channel.send(`Shutting down...`);
        return process.exit(1);
    }
}
