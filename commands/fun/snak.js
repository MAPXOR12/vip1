const { Client, Message, MessageEmbed } = require("discord.js");
const snakegame = require("snakecord");

module.exports = {
  name: "snack",
  aliases: [""],
  description: "Play Snack Game on Discord",
  usage: "",
  category : "games",
  
  run: async (client, message, args) => {
    const snakeGame = new SnakeGame({
      title: "Snake Game",
      color: "BLUE",
      timestamp: true,
      gameOverTitle: "<a:GameOver:823784027713699841> Game Over",
    });
    return snakeGame.newGame(message);
  },
};
