let {
 WAConnection,
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
 processTime
} = require("@adiwajshing/baileys"); 
let fs = require("fs-extra"); 

let _heal = JSON.parse(fs.readFileSync("./database/adventure/heal.json"));

let bayarHeal = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= amount
            fs.writeFileSync("./database/adventure/heal.json", JSON.stringify(_heal))
            }
  }
            
let addHealUser = (sender, amount) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= 25
            fs.writeFileSync("./database/adventure/heal.json", JSON.stringify(_heal))
            }
  }
            
let healAdd = (sender) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal += 25
            fs.writeFileSync("./database/adventure/heal.json", JSON.stringify(_heal))
             }
  }
             
module.exports = { 
 _heal, 
 bayarHeal, 
 addHealUser, 
 healAdd
}