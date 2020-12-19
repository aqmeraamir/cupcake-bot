const Discord = require("discord.js")

const { Client, Collection } = require("discord.js");

const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const mongoose = require("mongoose")


mongoose.connect(process.env.url, { useNewUrlParser: true, useUnifiedTopology: true })

const mongoCurrency = require('discord-mongo-currency');
 
mongoCurrency.connect(process.env.url);
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("./index.php")
})




require("./Events/logger.js")(client)


//Setting Up Commands Start
const { config } = require("dotenv");

client.max = 50;
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = 20
client.color = "#fffff"

client.categoriess = [
  "Info",
  "Fun",
  "Currency",
  "Aviation",
  "Moderation"


  ];
 

require("./Events/command.js")(client);
config({
  path: __dirname + "/.env"
});
//Setting Up Commands End



client.on("message", async message => { 
  mongoCurrency.createUser(message.author.id, 1)
  require("./Events/Message/command-handler.js")(client, message)
 // require("./levels.js").run(client, message)
})


client.on("ready", () => {
    client.log("Now Online!")
    client.user.setActivity("!help | V1.0.0", "dnd");
    
 
    
})



client.login(process.env.token);


