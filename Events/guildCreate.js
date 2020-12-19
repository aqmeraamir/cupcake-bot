module.exports = async (client, guild) => {
    let d = require("discord.js")
  
  let ch = guild.channels.cache.find(c=>c.type === "text")
    let invite = await ch.createInvite(
        {
          maxAge:  86400, // maximum time for the invite, in milliseconds
          maxUses: 5 // maximum times it can be used
        },
        
      )

      if(!invite) {
         invite = await guild.channels.cache.last().createInvite(
            {
              maxAge:  999999999999999999, // maximum time for the invite, in milliseconds
              maxUses: 5 // maximum times it can be used
            },
            
          )
      }
 
    let embed = new d.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle("Added to " + guild.name)
    .setColor("GREEN")
    .setFooter("Cupcake Bot Logs")
    .setDescription(`**Members:** ${guild.members.cache.size}\n**Owner:** ${guild.owner.user.tag}\n**Invite:** [Click Here](https://discord.com/invite/${invite.code})`)
  
    let g = client.guilds.cache.get("499807093289648148")
  
   let channel = g.channels.cache.get("734476979281068133")

    channel.send(embed)

}