module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    usage: "leaderboard",
    usable: "Everyone",
    category: "Currency",
    run: async (client, message, args) => {
        let Discord = require("discord.js")
       const mongoCurrency = require('discord-mongo-currency');

    const { MessageEmbed } = require('discord.js');
    
    const leaderboard = await mongoCurrency.generateLeaderboard(1, 10);
    
    if (leaderboard.length < 1) return message.channel.send("Nobody's on the leaderboard.");
    
    const mappedLeaderboard = leaderboard.map(i => `${client.users.cache.get(i.userId).tag ? client.users.cache.get(i.userId).tag : "Nobody"} - ${i.coinsInWallet}`);
    
    const embed = new MessageEmbed()
    .setTitle(`Cupcake's Leaderboard`)
    .setDescription(`${mappedLeaderboard.join('\n')}`);
    
    message.channel.send(embed);


    }
}