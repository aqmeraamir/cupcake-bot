let Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "Ban a user from your guild",
    category: "Moderation",
    usable: "Members with Ban Members power",
    usage: "ban <user> (reason)",
    run: (client, message, args) => {
        
        let noperms = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setDescription(`<:DP_apicross:662074259799277605> **${message.author.username}** You dont have permission to user this command!`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())

        let nopermsbot = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setDescription(`<:DP_apicross:662074259799277605> **${message.author.username}** I dont have permission to ban members!`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())

        let nouser = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Error")
        .setDescription(`<:DP_apicross:662074259799277605> **${message.author.username}** You didnt specify a user, example: \`!ban @AqmerDropz Spamming\`!`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())


        if(!message.guild.member(client.id).hasPermission("BAN_MEMBERS")) return message.channel.send(nopermsbot)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(noperms)
        
        let user = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
        if(!user) return message.channel.send(nouser)

        let reason = args.slice(1).join(" ")

        if(!reason) reason = "No Reason Provided"

        message.guild.ban(user.id)

        let successembed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Banned Successfully!")
        .setDescription(`<:DP_apiworking:662074282460971048> Banned ${user.tag} for **${reason}**`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())

        message.channel.send(successembed)
    }
}