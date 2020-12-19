
module.exports = {
    name: "cupcakes",
    category: "Currency",
    usable: "Everyone",
    usage: "cupcakes (User)",
    aliases: ["cupcakes-amount", "balance", "bal"],
    description: "Check how much cupcakes you have!",
    run: async (client, message, args) => {
const mongoCurrency = require('discord-mongo-currency');
    const { MessageEmbed } = require('discord.js');

    const member = message.mentions.members.first() || message.member;
 
    const user = await mongoCurrency.findUser(member.id, 1);

   
      let embed = new MessageEmbed()
      .setTitle(`${message.author.username}'s Balance!`)
      .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
      .setThumbnail("https://media3.giphy.com/media/ADjP8ldV35HMc/source.gif")
      .setDescription(`**Cupcake Amount:** ${user.coinsInWallet}
**Bank:** ${user.coinsInBank}/${user.bankSpace}
**Total:** ${user.coinsInBank + user.coinsInWallet}`)
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setColor(client.color)
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      message.channel.send(embed)
    }
    
    }

