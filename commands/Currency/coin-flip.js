module.exports = {
    name: "coin-flip",
    aliases: ["cf", "coinflip"],
    usage: "coin-flip <amount> <heads or tails>",
    usable: "Everyone",
    category: "Currency",
    run: async (client, message, args) => {
        let Discord = require("discord.js")
      
        let error = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> Specify a valid <amount>, Usage: `coin-flip <amount> <heads or tails>`")

        let error2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> Specify a valid <heads or tails>, Usage: `coin-flip <amount> <heads or tails>`")

        let error3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> You do not have enough balance for this bet.")


        let Amount = args[0]
        if(isNaN(Amount)) return message.channel.send(error)
        let mongoCurrency = require("discord-mongo-currency")
    const member = message.mentions.members.first() || message.member;
 
    const user = await mongoCurrency.findUser(member.id, 1);



        let headsortails = args[1]

        if(!headsortails) return message.channel.send(error)

        headsortails = headsortails.toLowerCase()

        if(headsortails === "heads") headsortails = "h"
        if(headsortails === "tails") headsortails = "t"
        if(headsortails === "head") headsortails = "h"
        if(headsortails === "tail") headsortails = "t"

        if(headsortails !== "h") if(headsortails !== "t") return message.channel.send(error2)

        let array = ["h", "t"]

        let random = array[Math.floor(Math.random() * array.length)];

let amountOfCupcakes = user.coinsInWallet
if(amountOfCupcakes < Amount) return message.channel.send(error3)
        if(random === headsortails) {
            let wonmount = Amount
            let total = wonmount + amountOfCupcakes
            let won = new Discord.MessageEmbed()
            .setColor(client.color)
            .setTitle("Coin Flip")
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setThumbnail("https://media0.giphy.com/media/XzeRWmW7f5K4kZnrgB/giphy.gif")
            .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription("**<:DP_apiworking:662074282460971048> You Won!**\n\nYou earned " + wonmount + " 🧁\n\n**New Balance**:\n```yaml\n" + total +"```")

            message.channel.send(won)
           mongoCurrency.giveCoins(message.author.id, 1, wonmount)
    
        }
        else {
           mongoCurrency.deductCoins(message.author.id, 1, Amount)
            let won = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Coin Flip")
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            .setThumbnail("https://media0.giphy.com/media/XzeRWmW7f5K4kZnrgB/giphy.gif")
            .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription("**<:DP_apicross:662074259799277605> You Lost!**\n\nYou lost " + Amount + " 🧁\n\n**New Balance**:\n```yaml\n" + db.get(`cupcakes-${message.author.id}`) +"```")

            message.channel.send(won)
           
        }
    }
}