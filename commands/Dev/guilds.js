
module.exports = {
    name: "guilds",
    category: "Dev",
    description: "See which guilds the bot is in",
    usable: "Bot Devs/Admins",
    run: (client, message, args) => {
        message.delete()
        let d = require("discord.js")

        let embed = new d.MessageEmbed()
        .setColor(client.color)
        .setTitle("Guilds Total: " + client.guilds.cache.size)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription("**All Guilds:**")

        client.guilds.cache.forEach(async gld => 
            {
             
                embed.setDescription(embed.description + `\n${gld.name} - ${gld.id}`)
            })

            setTimeout(() => {
                message.channel.send(embed)
            }, 5000)
    }
}