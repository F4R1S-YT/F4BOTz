const {
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  ArrayBuffer,
  mentionedJid
} = require("@adiwajshing/baileys");

let fs = require("fs-extra")
let moment = require("moment-timezone");

let { getBuffer, getGroupAdmins} = require("../lib/functions");
let { color } = require("../lib/color");

module.exports = welcome = async (arifi, anu) => {
        let mdata = await arifi.groupMetadata(anu.jid)
        let groupMembers = mdata.participants;
        let groupAdmins = getGroupAdmins(groupMembers);
		    try {
			console.log(anu)
			if (anu.action == 'add') {
     			let num = anu.participants[0]
     		 let memeg = mdata.participants.length;
        let v = arifi.contacts[num] || { notify: num.replace(/@.+/, "") };
        let anu_user = v.vname || v.notify || num.split("@")[0];
        let hesa = `${num}`
	    let mestes = (teks) => {
		return teks.replace(/['@s whatsapp.net']/g, " ");
	    }
		let resa = `${mestes(hesa)}`
        let jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		let d = new Date
		let locale = 'id'
		let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let calender = d.toLocaleDateString(locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	    })
	    try {
			var ppimg = await arifi.getProfilePicture(num)
			 } catch (e) {
			var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
      try {
        var pp_grup = await arifi.getProfilePicture(anu.jid);
      } catch (e) {
        var pp_grup = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
      }
            let buff = await getBuffer(ppimg)
			let parti = arifi.contacts[num] != undefined ? arifi.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : arifi.contacts[num].notify || arifi.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			let i = '```'
			let masuk =`*W E L C O M E - D E T E C T E D*\n\n${i}Halo @${num.split('@')[0]}\nSelamat Bergabung Di Grup ${mdata.subject}, Silahkan Intro/Perkenalkan Diri Terlebih Dahulu\n\n${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n• TOTAL ANGGOTA : ${memeg}\n• DESKRIPSI : ${mdata.desc}${i}`
			let fovid = { 
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(anu.jid ? { 
			remoteJid: '62895359559880-1633759076@g.us' } : {
			})
			   }, message: {
			     videoMessage: {
			     viewOnce: true
			    }
			  }
			}
			let ftrol = { 
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(anu.jid ? { 
			remoteJid: '62895359559880-1633759076@g.us' } : {
			})
			}, message: { 
			   orderMessage: {
			     itemCount: 2021,
                 status: 200,
                 surface: 200,
                 message: `${mdata.subject}`,
                 orderTitle: `${anu_user}`,
                 thumbnail: buff, 
                 sellerJid: `0@s.whatsapp.net`,
			            }
			       }
			}
			let buttons = [
          { buttonId: `#ytes#`, buttonText: { 
          displayText: "REGISTRASI" 
          }, type: 1 
             },
          { buttonId: `#selebgramm#`, buttonText: { 
          displayText: "✯ SELEBGRAM MENU ✯" 
          }, type: 1 
             }
        ];
        let imageMsg = (
          await arifi.prepareMessageMedia(buff, "videoMessage", { 
          thumbnail: buff 
          })
          ).videoMessage;
            imageMsg.fileLength = '99396294739499'
            imageMsg.seconds = '1293199382'
        let buttonsMessage = {
          contentText: `${masuk}`,
          footerText: `   © Arifi Razzaq OFFICIAL~`,
          videoMessage: imageMsg,
          buttons: buttons,
          headerType: 5,
        };
        await arifi.sendMessage(
        mdata.id, 
        buttonsMessage, 
        MessageType.buttonsMessage, {
           quoted : ftrol,
           thumbnail : buff, 
           sendEphemeral : true, 
              contextInfo : {
                 mentionedJid: [num], 
                 forwardingScore: 508, 
                 isForwarded: true, 
                 externalAdReply : { 
                   title: `${mdata.subject}`, 
                   body: `${calender}\n⎇ ${jm} ${week} ${weton}`, 
                   thumbnailUrl: "https://i.pinimg.com/736x/9b/0e/da/9b0edac41ee521dac2eeea7bcd1c495c.jpg",
                   mediaType: 2, 
                   previewType: "VIDEO", 
                   mediaUrl: "https://youtu.be/3E-mIsZ0dNA"
                 }
              }
          })
          await arifi.sendMessage(mdata.id, `${i}• JANGAN LUPA INTRO\nNama :\nAlamat :\nUmur :\nStatus :\nInstagram :\nYoutube :\n\n\nSertakan Foto Kamu Ya... @${num.split('@')[0]} Semoga Betah Di Dalam Grup ${mdata.subject}${i}`, 
          MessageType.text, { 
            quoted : fovid, 
            JpegThumbnail : buff,
               contextInfo : {
                  mentionedJid: [num], 
                  }
               }
           );
        } else if (anu.action == 'remove') {
			let num = anu.participants[0]
			        let w = arifi.contacts[num] || { notify: num.replace(/@.+/, "") };
        let anu_user = w.vname || w.notify || num.split("@")[0];
        let memeg = mdata.participants.length;
			let hesa = `${num}`
		    let mestes = (teks) => {
		return teks.replace(/['@s whatsapp.net']/g, " ");
	    }
		let resa = `${mestes(hesa)}`
        let jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		let d = new Date
		let locale = 'id'
		let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let calender = d.toLocaleDateString(locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	    })
			try {
			var ppimg = await arifi.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			let parti = arifi.contacts[num] != undefined ? arifi.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : arifi.contacts[num].notify || arifi.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			let i = '```'
			let keluar =`*L E A V E - D E T E C T E D*\n\n${i}Pengguna @${num.split('@')[0]}\nTelah Keluar Dari Grup ${mdata.subject}\n\n• WAKTU : ${calender}\n• SISA ANGGOTA : ${memeg}${i}`
            let fovid = { 
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(anu.jid ? { 
			remoteJid: '62895359559880-1633759076@g.us' } : {
			})
			   }, message: {
			     videoMessage: {
			     viewOnce: true
			    }
			  }
			}
			let ftrol = { 
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(anu.jid ? { 
			remoteJid: '62895359559880-1633759076@g.us' } : {
			})
			}, message: { 
			   orderMessage: {
			     itemCount: 2021,
                 status: 200,
                 surface: 200,
                 message: `${mdata.subject}`,
                 orderTitle: `${anu_user}`,
                 thumbnail: buff, 
                 sellerJid: `0@s.whatsapp.net`,
			            }
			       }
			}
            let buttons = [
          { buttonId: `#ytes#`, buttonText: { 
          displayText: "REGISTRASI" 
          }, type: 1 
             },
          { buttonId: `#selebgramm#`, buttonText: { 
          displayText: "✯ SELEBGRAM MENU ✯" 
          }, type: 1 
             }
        ];
        let imageMsg = (
          await arifi.prepareMessageMedia(buff, "videoMessage", { 
          thumbnail: buff 
          })
          ).videoMessage;
            imageMsg.fileLength = '99396294739499'
            imageMsg.seconds = '1293199382'
        let buttonsMessage = {
          contentText: `${keluar}`,
          footerText: `   © Arifi Razzaq OFFICIAL~`,
          videoMessage: imageMsg,
          buttons: buttons,
          headerType: 5,
        };
        await arifi.sendMessage(
        mdata.id, 
        buttonsMessage, 
        MessageType.buttonsMessage, {
           quoted : ftrol,
           thumbnail : buff, 
           sendEphemeral : true, 
              contextInfo : {
                 mentionedJid: [num], 
                 forwardingScore: 508, 
                 isForwarded: true, 
                 externalAdReply : { 
                   title: `${mdata.subject}`, 
                   body: `${calender}\n⎇ ${jm} ${week} ${weton}`, 
                   thumbnailUrl: "https://i.pinimg.com/736x/9b/0e/da/9b0edac41ee521dac2eeea7bcd1c495c.jpg",
                   mediaType: 2, 
                   previewType: "VIDEO", 
                   mediaUrl: "https://youtu.be/3E-mIsZ0dNA"
                 }
              }
          })
			} else if (anu.action == 'promote') {
let fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;arifi;;;\nFN:arifi\nitem1.TEL;waid=6281261324817:6281261324817\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
let num = anu.participants[0]
let w = arifi.contacts[num] || { notify: num.replace(/@.+/, "") };
let anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          var ppimg = await arifi.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          var ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buff = await getBuffer(ppimg)
let teks = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nKamu Sekarang Admin`
arifi.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|SYSTEM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
let fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;arifi;;;\nFN:arifi\nitem1.TEL;waid=6281261324817:6281261324817\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
let num = anu.participants[0]
let w = arifi.contacts[num] || { notify: num.replace(/@.+/, "") };
let anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          var ppimg = await arifi.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          var ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }        
        let buff = await getBuffer(ppimg)
let teks = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nKamu Bukan Admin`
arifi.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|SYSTEM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
		}
    }