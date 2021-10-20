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

let balance = JSON.parse(fs.readFileSync("./database/balance.json"));
              
let addATM = (sender) => {
        	let obj = {id: sender, balance : 0}
            balance.push(obj)
            fs.writeFileSync("./database/balance.json", JSON.stringify(balance))
        }
        
let addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(balance).forEach((i) => {
                if (balance[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                balance[position].balance += amount
                fs.writeFileSync("./database/balance.json", JSON.stringify(balance))
            }
        } 
        
let checkATMuser = (sender) => {
        	let position = false
            Object.keys(balance).forEach((i) => {
                if (balance[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return balance[position].balance
            }
        } 
        
let confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(balance).forEach((i) => {
                if (balance[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                balance[position].balance -= amount
                fs.writeFileSync("./database/balance.json", JSON.stringify(balance))
            }
        }
 
 module.exports = { 
 balance,
 addATM, 
 addKoinUser, 
 checkATMuser, 
 confirmATM
}