const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Yrnex Abone Rol Menüsü',`
🔔 **y!abone-yetkili-rol** : Abone Yetkilisini Seçer.
🔔 **y!abone-rol** : Vericeğiniz Rolü ayarlarsınız.
🔔 **y!abone-log** : Log mesajınn gitceği yer seçilir.
🔔 **y!abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};