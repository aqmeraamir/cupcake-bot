const talkedRecently = new Set();
module.exports = async (client, message) => {


    //let db = require("quick.db")

   // if(!db.get(`prefix-${message.guild.id}`)) db.set(`prefix-${message.guild.id}`, "!")

    const prefix = "+" //db.get(`prefix-${message.guild.id}`)

    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member)
      message.member = await message.guild.fetchMember(message);
  
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
  
    const cmd = args.shift().toLowerCase();
  
    if (cmd.length === 0) return;
  
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
  
    if (!command) return;

if(command.cooldown) {
   if (talkedRecently.has(message.author.id + command.name)) {
     let time = command.cooldown
     if(command.cooldown < 60) time = `${time}s`
     else time = `${time / 60}m`
            return message.channel.send(`wooaah chill.. Wait ${time} before using this command.`);
    }
    else {
      talkedRecently.add(message.author.id + command.name)
      setTimeout(() => {
        talkedRecently.delete(message.author.id + command.name)
      }, command.cooldown * 1000)
    }

}


    command.run(client, message, args);
}