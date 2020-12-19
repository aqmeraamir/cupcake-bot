let Discord = require("discord.js")
const fetch = require('got');

module.exports = {
    name: "dog",
    category: "Fun",
    description: "Get a image of a random dog!",
    aliases: ["d"],
    usage: "dog",
    usable: "Everyone",
    run: (client, message, args) => {
        fetch('https://www.reddit.com/r/dog/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
        
            let embed = new Discord.MessageEmbed()
            .setURL(memeUrl)
            .setImage(memeImage)
            .setTitle(memeTitle)
            .setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            .setColor(client.color)
            .setAuthor(message.author.username, message.author.displayAvatarURL())

            message.channel.send(embed)

    })
    }

}