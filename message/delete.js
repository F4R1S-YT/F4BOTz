const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");

let fs = require("fs-extra");
let moment = require("moment-timezone");

let { time, color } = require("../lib/functions");

module.exports = deleted = async (arifi, m) => {
    if (m.key.fromMe) return
          if (m.key.remoteJid == 'status@broadcast') return
let delkey = m.key
let msg = m.message
if (msg.startsWith(prefix) return
   let c = arifi.chats.get(delkey.remoteJid)
     let a = c.messages.dict[`${delkey.id}|${delkey.fromMe ? 1: 0}`]
       let delcontent = arifi.generateForwardMessageContent(a, false)
         let deltipe = Object.keys(delcontent)[0]
           let delname = await arifi.getName(m.participant)
teks = `------------ [ ANTI DELETE ] ------------
*--> Nama :* ${delname}
*--> Tag :* @${m.participant.split("@")[0]}
*--> Waktu :* ${time}
*--> Tipe :* ${deltipe}`
   await arifi.sendMessage(m.key.remoteJid, teks, MessageType.text, {
      quoted: m.message, contextInfo: {
          "mentionedJid": [m.participant]}})
               arifi.copyNForward(m.key.remoteJid, m.message)
            }
