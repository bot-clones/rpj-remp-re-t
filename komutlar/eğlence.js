const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "y!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "Yrnex Eğlence Menüsü",
      `
✨ **y!fbi** : FBİ Gelir.
✨ **y!token** : Botun Tokenini Görürsünüz.
✨ **y!atam** : Dene ve Gör Reis.
✨ **y!vine** : Komik Paylaşımlar.`
    )
    .addField(
      "**» Davet Linki**",
      " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};
