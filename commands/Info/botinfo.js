let Discord = require("discord.js")
module.exports = {
    name: "bot-info",
    category: "Info",
    description: "Shows you information about the bot",
    aliases: ["botinfo", "bi"],
    usable: "Everyone",
    run: (client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setURL("https://discord.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setTitle("Cupcake's Information")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(`${client.user.username} - Devloped by Aqmer`, client.user.displayAvatarURL())
        .setDescription("**Total Guilds**: " + client.guilds.cache.size + "\n**Total Users**: " + client.users.cache.size + "\n**Total Commands**: " + client.commands.size + "\n\n- [Invite this bot](https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=2146958847)\n- [Join Official Discord](https://discord.gg/9jGgGQ9)")

        message.channel.send(embed)

    }
}