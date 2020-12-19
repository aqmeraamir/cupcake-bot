module.exports = {
    name: "weather",
    aliases: ["w"],
    usage: "weather <city>",
    usable: "Everyone",
    category: "Aviation",
    description: "Get the weather of a city.",
    run: (client, message, args) => {
    let fetch = require("node-fetch")
let discord = require("discord.js")
let error = new discord.MessageEmbed()
.setColor("RED")
.setTitle("Error")
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTimestamp()
.setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
.setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
.setFooter(client.user.username, client.user.displayAvatarURL())
.setDescription("<:DP_apicross:662074259799277605> Couldn't find the specified city.")

    fetch('http://api.openweathermap.org/data/2.5/weather?appid=af34d09f6b1e29839564ec826a65e5c8&q=' + args.join(" "))
    .then(res => res.json())
    .then(json => {
        if(json.cod === "404") return message.channel.send(error)
        
        let visibility = json.visibility
        let wind_speed = json.wind.speed
        let wind_direction = json.wind.deg
        let humidity = json.main.humidity
        let celsiusmin = Math.round((json.main.temp_min - 273.15) * 10) / 10
        let celsiusmax = Math.round((json.main.temp_max - 273.15) * 10) / 10
        let farinmin = Math.round(((celsiusmin * 9/5) + 32) * 10) / 10 
        let farinmax = Math.round(((celsiusmax * 9/5) + 32) * 10) / 10 
        
        let embed = new discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter("Cupcake Bot", client.user.displayAvatarURL)
        .setTimestamp()
        .setThumbnail("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/09/chai-latte-cupcakes.jpg")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setTitle(json.name)
        .setColor(client.color)
        .setDescription(`**Wind:** ${wind_speed} knots at heading ${wind_direction}
**Minimum Temprature:** ${celsiusmin} Celsuis | ${farinmin} Fahrenheit
**Maximum Temprature:** ${celsiusmax} Celsuis | ${farinmax} Fahrenheit
**Humidity:** ${humidity}%
**Visibility:** ${visibility}`)
message.channel.send(embed)

    });

    }
}