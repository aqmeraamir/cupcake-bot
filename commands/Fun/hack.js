let Discord = require("discord.js")
const fetch = require('got');

module.exports = {
    name: "hack",
    category: "Fun",
    description: "Hack someone",
    aliases: ["h"],
    usage: "hack <user>",
    usable: "Everyone",
    run: async (client, message, args) => {
      let user = message.mentions.users.first()
      if(!user) return message.channel.send("Specify someone to hack!")

     let hackmsg = await message.channel.send("searching for location...")

     setTimeout(() => {
     hackmsg.edit("finding ip....")
     }, 2000)

     setTimeout(() => {
     hackmsg.edit("stealing cupcakes...")
     }, 4000)

     setTimeout(() => {
     hackmsg.edit("stealing oreos...")
     }, 6000)

     setTimeout(() => {
     hackmsg.edit("injecting cupcakes to computer to gather data...")
     }, 8000) 

setTimeout(() => {
        fetch('https://randomuser.me/api').then(response => {
 let content = JSON.parse(response.body).results[0]
 console.log(content)

          let embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle("Ha... Hacked!!")
          .setThumbnail(content.picture.medium)
          .setDescription(`**Real Gender:** ${content.gender}
**Real Name:** ${content.name.title + content.name.first + content.name.last}
**Location:** Country: ${content.location.country}, City: ${content.location.city}, Street: ${content.location.street.number}, ${content.location.street.name}
**Exact Current Coordiants:** ${content.location.coordinates.latitude} Latitude, ${content.location.coordinates.longitude} Longitude
**Email:** ${content.email}
**Phone:** ${content.phone}

`)

message.channel.send(embed)



        })
}, 10000)
    }
}