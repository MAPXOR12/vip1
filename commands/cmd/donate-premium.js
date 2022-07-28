const ownerid = "872563022344892426";

module.exports = {
    name: 'turnoff',
    aliases: ['shutdown', 'close'],

    async execute(client, message) {
        if (message.author.id !== ownerid) return;
        message.channel.send(`Shutting down...`);
        return process.exit(1);
    }
}
