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

let _level = JSON.parse(fs.readFileSync("./database/level.json"));

 let getLevelingXp = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}
let getLevelingLevel = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}
let getLevelingId = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].jid
    }
}
let addLevelingXp = (userId, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync("./database/level.json", JSON.stringify(_level))
    }
}
let addLevelingLevel = (userId, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync("./database/level.json", JSON.stringify(_level))
    }
}
let addLevelingId = (userId) => {
    let obj = {jid: userId, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync("./database/level.json", JSON.stringify(_level))
}
let xpGain = new Set()
let isGained = (userId) => {
    return !!xpGain.has(userId)
}
let addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000)
}

module.exports = { 
 _level,
 getLevelingXp, 
 getLevelingLevel, 
 getLevelingId, 
 addLevelingXp, 
 addLevelingLevel, 
 addLevelingId, 
 isGained, 
 addCooldown
}