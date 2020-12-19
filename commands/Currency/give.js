module.exports = {
    name: "give",
    aliases: ["transfer", "share"],
    usage: "give <user> <amount>",
    description: "Transfer your money to another user",
    usable: "Everyone",
    category: "Currency",
    run: async (client, message, args) => {
        let Discord = require("discord.js")
       let mongoCurrency = require("discord-mongo-currency")
        const member = message.mentions.members.first() || message.member;
 
    

        let error = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> Specify a valid <user>, Usage: `give <user> <amount>`")

        let error2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> Specify a valid <amount>, Usage: `give <user> <amount>`")

        let error3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setDescription("<:DP_apicross:662074259799277605> You do not have enough balance to transfer to this user")

        if(!args[0]) return message.channel.send(error)
let user = client.users.cache.get(args[0]) || message.mentions.users.first() || client.users.cache.find(u=>u.tag.includes(args[0]))

if(!user) return message.channel.send(error)

let amount = args[1]
if(!amount) return message.channel.send(error2)
if(isNaN(amount)) return message.channel.send(error2)
const user1 = await mongoCurrency.findUser(member.id, 1);
const user2 = await mongoCurrency.findUser(user.id, 1);

let balance1
if(!user1) balance1 = 0

if(!user1.coinsInWallet) balance1 = 0

balance1 = user1.coinsInWallet

if(balance1 < amount) return message.channel.send(error3)

amount = amount - ((amount / 100) * 5)
if(!user2) {

await mongoCurrency.createUser(user.id, 1)

 mongoCurrency.giveCoins(user.id, 1, amount)
}
else  mongoCurrency.giveCoins(user.id, 1, amount)


mongoCurrency.deductCoins(message.author.id, 1, amount)
let success = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Done!")
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTimestamp()
.setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
.setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
.setFooter(client.user.username, client.user.displayAvatarURL())
.setDescription("<:DP_apiworking:662074282460971048> You gave " + args[1] + ` to ${user.tag}, but due to tax rates sent a total of ${amount}!`)
message.channel.send(success)

    }
}