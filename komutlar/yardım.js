const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const YRNEXEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**  » Yrnex**")
.setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/xksdUskx8q)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)** **•**
Bir komut hakkında detaylı __yardım için__: **y!yardım**`)

.addField('**• Komutlar**',' Botun Tüm Komutları Aşağıda Bulunmaktadır.')
.addField('> y!moderasyon ',' 🔰 Moderasyon komutları')
.addField('> y!kullanıcı ',' 👥 Kullanıcı komutları')
.addField('> y!abone-yardım ',' 🔔 Ayarlamalı Abone Rol Sistemi')
.addField('> y!eğlence','  ✨ Eğlence Komutları')
return message.channel.send(YRNEXEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};