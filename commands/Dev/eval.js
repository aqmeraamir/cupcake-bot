module.exports = {
    name: "eval",
    category: "Dev",
    aliases: ["e"],
    usable: "Bot Admins/Owner",
    run: async (client, message, args) => {
      message.delete();
      const { inspect } = require("util")
  let ownerid = "642706066160877579"
          if(message.author.id !== ownerid) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
  
      
    }
  }
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }