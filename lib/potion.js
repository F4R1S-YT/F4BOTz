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

let _potion = JSON.parse(fs.readFileSync("./database/adventure/potion.json"));

let bayarPotion = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync("./database/adventure/potion.json", JSON.stringify(_potion))
            }
  }
            
let addPotioUser = (sender, amount) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync("./database/adventure/potion.json", JSON.stringify(_potion))
            }
  }
            
let potionAdd = (sender) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
             if (_potion[i].id == sender) {
             position = i
            }
            })
            if (position !== false) {
            _potion[position].potion += 1
            fs.writeFileSync("./database/adventure/potion.json", JSON.stringify(_potion))
            }
  } 
            
module.exports = { 
 _potion, 
 bayarPotion, 
 addPotioUser, 
 potionAdd
}