module.exports = {
    name: "beg",
    aliases: ["b"],
    usage: "beg",
    usable: "Everyone",
    category: "Currency",
    cooldown: "30",
    run: async (client, message, args) => {
        let Discord = require("discord.js")
       const mongoCurrency = require('discord-mongo-currency');
 
    const randomCoins = Math.floor(Math.random() * 99) + 1; // Random amount of coins.
    const randomNumber = Math.floor(Math.random() * 3) + 1  

    if(randomNumber == 1) {
    await mongoCurrency.giveCoins(message.author.id, 1, randomCoins);
    let user = await mongoCurrency.findUser(message.author.id, 1, message.guild.id)


      
      message.channel.send("some guy decided to give you " + randomCoins + " 🧁")
    }

    if(randomNumber == 2) {
      message.channel.send("stop begging get a job")
    }

    if(randomNumber == 3) {
      message.channel.send(`you're fined ${randomCoins} 🧁 You were caught begging in a restricted area`)
      mongoCurrency.deductCoins(message.author.id, 1, randomCoins)
    } 

    }
}