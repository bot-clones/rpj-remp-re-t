let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `❌ **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abone-yetkili-rol @rol__**`
    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `✅ **Abone yetkilisi başarıyla "${rol}" olarak ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili-rol"
};

exports.play = {
  kullanım: "y!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};