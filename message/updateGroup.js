const {
  MessageType,
  Presence,
  MessageOptions,
  ChatModification,
  ProxyAgent,
  GroupSettingChange,
  mentionedJid
} = require("@adiwajshing/baileys");

module.exports = update = async (arifi, anu) => {
    let metdata = await arifi.groupMetadata(anu.jid);
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      arifi.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      arifi.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\n• Deskripsi Baru : ${anu.desc}`;
      arifi.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      arifi.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      arifi.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
 }