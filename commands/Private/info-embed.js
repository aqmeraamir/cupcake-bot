module.exports = {
    name: "info-embed",
    category: "Private",
    run: (client, message, args) =>{
        let Discord = require("discord.js")
message.delete()
        let embed = new Discord.MessageEmbed()
        .setTitle("Cupcake Bot Discord")
        .setColor(client.color)
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord")
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setImage("https://images.squarespace-cdn.com/content/v1/57f1e53b8419c2912d164d97/1509056860611-EH3XF53QJ75GMRFLJDAA/ke17ZwdGBToddI8pDm48kJHbjqv4eCKigQVgMdsUy19Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIL-woW2gvcooAflqdfQmgmpGQKDsZmv1Fa7Iv2s0hTlgKMshLAGzx4R3EDFOm1kBS/banner_1.jpg")
        .setDescription("Cupcake bot is designed for servers who are in need of moderation bots, some fun bots to play around with.\n\nCupcake bot will get frequently updated meaning more commands every week/month!\n\n**Usefull Links:**\n- [Invite The Bot](https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=0&redirect_uri=https%3A%2F%2Fbit.ly%2Fcupcake-bot-discord)\n- [This Discord Link](https://discord.gg/9jGgGQ9)\n- [Apply For Testing](https://forms.gle/LjtaTSjicefvGQLa9)")
        message.channel.send(embed)
    }
}