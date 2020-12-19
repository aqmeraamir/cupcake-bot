module.exports = {
    name: "announce",
    category: "Private",
    run: (client, message, args) => {
        let discord = require("discord.js")

        let embed = new discord.MessageEmbed()
        .setColor(client.color)
        .setTitle("🧁 Official Release! V1.0.0")
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=2146958847")
        .setImage("https://media.discordapp.net/attachments/713872326642368594/734373864045543459/image0.png")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("Cupcake Bot is officialy released for all of you to use!\n\nWe currently only have a few commands, however they will continue to grow! List of commands we currently have:\n- `!help`, `!ban`, `!ping`, `!botinfo`\n\nThere will soon be a poll in <#734171785372762113> where you will vote on what I should work on next!\n\nTo invite the bot [click here](https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=2146958847), if you wish to apply to be a tester check <#734171178926604308>")
        message.channel.send("@everyone, official release!", embed)
    }
}