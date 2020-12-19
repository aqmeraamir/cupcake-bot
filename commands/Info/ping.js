
module.exports = {
    name: "ping",
    category: "Info",
    description: "Shows you the bot latency",
    run: async (client, message, args) => {
        let Discord = require("discord.js")

        let botmsg = await message.channel.send("Pinging.....")
        let embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setTitle("🏓 Pong!")
        .setDescription("**Bot**: `" + (botmsg.createdAt - message.createdAt) + "ms`\n" + "**API:** `" + Math.round(client.ws.ping) + "ms`")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setThumbnail("https://www.clker.com/cliparts/J/u/y/o/d/7/ping-pong-hi.png")
        .setTimestamp()
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        botmsg.edit("", embed)
    }
}