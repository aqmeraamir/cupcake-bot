let Discord = require("discord.js")

module.exports = {
    name: "help",
    category: "Info",
    description: "Shows you all the commands",
    aliases: ["info", "commands"],
    usable: "Everyone",
    run: (client, message, args) => {
      getAll(client, message)
    }
}


async function getAll (client, message) {
  

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
                 .map(cmd => `\`${cmd.name}\``)
            .join(", ");
    }

    let page = 0
    
    
let embed = new Discord.MessageEmbed()
.setColor(client.color)
.setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=2146958847")
.setTitle(client.user.username + "'s Commands")
.setFooter("!help <command> for more info!")
.setDescription("To toggle between pages use the following reactions:\n\n◀ - **Go Back a page**\n⏹ - **Delete this message**\n▶ - **Go Forward a page**\n\n- [Invite this bot](https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord)\n- [Join Official Discord](https://discord.gg/9jGgGQ9)")
.setAuthor(message.author.username, message.author.displayAvatarURL())
let msg = await message.channel.send(embed)

msg.react("◀")
msg.react("⏹")
msg.react("▶")

const filter = (reaction, user) => {
	return reaction._emoji.name
};

const collector = msg.createReactionCollector(filter, { time: 200000 });

collector.on('collect', (reaction, user) => {

if(user.bot) return
reaction.users.remove(user.id)
	if(reaction._emoji.name === "◀") {
        if(page == 0) return
        else {
            page--
            let cmds = getPage(client, page, commands)

            embed = embed.setTitle(cmds[1]).setDescription(cmds[0]).setFooter("Page " + page + "/" + client.categoriess.length + " - !help <command> for more info")

            msg.edit(embed)
        }
    }

    if(reaction._emoji.name === "⏹") {
    
    
        
        collector.emit("end")
    }

    if(reaction._emoji.name === "▶") {

    
        if(page == client.categoriess.length) return
        else {
            page++
            let cmds = getPage(client, page, commands)

            embed = embed.setTitle(cmds[1]).setDescription(cmds[0]).setFooter("Page " + page + "/" + client.categoriess.length + " - !help <command> for more info")

            msg.edit(embed)
        }
}
});

collector.on('end', collected => {
	msg.delete()
});
}

function getPage(client, page, commands) {
    if(page == 0) {
       return ["To toggle between pages use the following reactions:\n\n◀ - **Go Back a page**\n⏹ - **Delete this message**\n▶ - **Go Forward a page**\n\n- [Invite this bot](https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord)\n- [Join Official Discord](https://discord.gg/9jGgGQ9)", "Cupcake's Commands"]
    }
    
    let cmds = commands(client.categoriess[page - 1])
    return [cmds, client.categoriess[page - 1]]
}