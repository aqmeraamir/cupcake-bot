const { aliases } = require("../Currency/cupcakes");

module.exports = {
    name: "get-invite",
    category: "Dev",
    description: "Get a invite of a server!",
    aliases: ["invite", "gi"],
    usable: "Bot Dev/Admins",
    run: async (client, message, args) => {
        let oguild = client.guilds.cache.get(`499807093289648148`)
        if(!oguild.member(message.author.id)) return
        if(!oguild.member(message.author.id).roles.cache.get("734172800289341511")) return

        let d = require("discord.js")
        let gld = client.guilds.cache.get(args[0]) || client.guilds.cache.find(g => g.name.toLowerCase() === args[0].toLowerCase() || client.guilds.cache.find(g=>g.name.toLowerCase().includes(args[0])))
        if(!gld) return

        let inv = await client.getInvite(gld.id)
        let embed = new d.MessageEmbed()
        .setTitle(gld.name + "'s Invite")
        .setDescription(`[Click Here](${inv})`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setColor(client.color)
        .setTimestamp()
        message.channel.send(embed)
    }

}