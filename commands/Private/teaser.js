
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const Canvas1 = require("canvas")
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const fetch = require("node-fetch"); // This is to fetch the user avatar and convert it to a buffer.
const imageUrlRegex = /\?size=2048$/g;
let Discord = require("discord.js")
async function profile(member, score) {
    // Canvas code will go here.

// We're grabbing the body out of snekfetch's get method, but at the same time we're assigning a variable
// to it, avatar.
// Remember when I mentioned the regex before? Now we get to use it, we want to set the size to 128 pixels,
// instead of 2048 pixels.
try {

 let avatar = await Canvas1.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  // The reason for the displayName length check, is we don't want the name of the user going outside
  // the box we're going to be making later, so we grab all the characters from the 0 index through
  // to the 17th index and cut the rest off, then append `...`.
  const name = member.user.username.length > 20 ? member.user.username.substring(0, 17) + "..." : member.user.username;

  return new Canvas(400, 180)
  // Create the Blurple rectangle on the right side of the image.
  .setColor("#7289DA")
  .addRect(84, 0, 316, 180)
  .setColor("#2C2F33")
  .addRect(0, 0, 84, 180)
  .addRect(169, 26, 231, 46)
  .addRect(224, 108, 176, 46)
  .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
  .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
  .setShadowBlur(10) // Blur the shadow by 10.
  // This circle is 2 pixels smaller in the radius to prevent a pixel border.
  .addCircle(84, 90, 62)
  .addCircularImage(avatar, 84, 90, 62)
  .save()
  .createBeveledClip(20, 138, 128, 32, 5)
  .setColor("#23272A")
  .fill()
  .restore()
  .setTextAlign("center")
  // I'm using a custom font, which I will show you how to add next.
  .setTextFont("10pt Discord")
  // Set the colour to white, since we have a dark background for all the text boxes.
  .setColor("#FFFFFF")
  // Add the name variable.
  .addText(name, 285, 54)
  // Using template literals, you can add text and variables, we're applying the toLocaleString()
  // to break up the number into a nice readable format.
  .addText(`Rortos`, 84, 159)
  // Now we want to align the text to the left.
  .setTextAlign("left")
  .addText(`Score: `, 241, 136)
  // Let's add all the points!
  // ...
} catch (error) {
  await console.log(`Something happened: ${error.message}`);
}
  }
module.exports = {
    name: "teaser",
    run: async (client, message, args) => {
    /*    let d = require("discord.js")
        let embed = new d.MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/665228203278991403/734403736159649852/xi77mGaBKPAAAAAElFTkSuQmCC.png?width=828&height=395")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(client.color)
        .setTitle("Teaser!")
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setDescription("Can you guess what we're working on?")
        .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setURL("https://discordapp.com/oauth2/authorize?client_id=666759786074996746&scope=bot&permissions=2146958847")

                message.channel.send("@everyone", embed)*/

                const buffer = await profile(message.member, 6);
                const filename = `profile-${message.author.id}.jpg`;
              
             
                const attachment = new Discord.MessageAttachment(buffer.toBuffer(), filename);
               
         
             
             
                                await message.channel.send(attachment);
    }
}