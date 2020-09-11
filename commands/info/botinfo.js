const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "info",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("> <a:Arrow_Right:754013794661040278> BOT NAME", `ROUNAK BOT`)
      .addField(
        "> <a:Arrow_Right:754013794661040278> BOT DEVELOPER",
        `
 <@649452944609247263> `
      )
      .addField(
        "> <a:Arrow_Right:754013794661040278> TOTAL SERVER",
       `${client.guilds.cache.size}`,
        true
      )
      .addField(
         "> <a:Arrow_Right:754013794661040278> TOTAL CHANNEL",
        `${client.channels.cache.size}`
      )
      .addField(
        "> <a:Arrow_Right:754013794661040278> TOTAL USERS",
        `${client.users.cache.size}`,
        true
        
      .setColor("RANDOM")
      .setFooter(`INFORMATION ABOUT BOT`);
    message.channel.send(embed);
  }
};
    
  

