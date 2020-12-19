module.exports = {
    name: "add",
    aliases: ["a"],
    usage: "add <user> <amount>",
    description: "Add cupcakes to a user!",
    usable: "Bot Admins/Dev",
    category: "Dev",
    run: async (client, message, args) => {
        let Discord = require("discord.js")
        let db = require("quick.db")
        let error = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> Specify a valid <user>, Usage: `add <user> <amount>`")

        let error2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> Specify a valid <amount>, Usage: `add <user> <amount>`")

        if(!args[0]) return message.channel.send(error)
let user = client.users.cache.get(args[0]) || message.mentions.users.first() || client.users.cache.find(u=>u.tag.includes(args[0]))

if(!user) return message.channel.send(error)

let amount = args[1]
if(!amount) return message.channel.send(error2)
if(isNaN(amount)) return message.channel.send(error2)

let mongoCurrency = require("discord-mongo-currency")

    const member = message.mentions.members.first() || message.member;
 
    const user2 = await mongoCurrency.findUser(user.id, 1);
    if(!user2) mongoCurrency.createUser(user.id, 1)




mongoCurrency.giveCoins(user.id, 1, amount)



let success = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Done!")
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTimestamp()
.setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
.setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
.setFooter(client.user.username, client.user.displayAvatarURL())
.setDescription("<:DP_apiworking:662074282460971048> You added " + args[1] + ` to ${user.tag}!`)
message.channel.send(success)

    }
}