//Creadores
global.owner = [
['573012482597', '👑 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 👑', true],
['573218138672'],
['573218138672']]

global.numberbot = '573106909511'
global.nameowner = 'OfcDiego'
global.nomorown = '573012482597'

global.APIs = {}
global.APIKeys = {}
global.lolhuman = ''
global.ocrapi = '314b4b8b2d88957'

//NombreBot
global.namebot = 'SakuraBotLite-MD 🚩'
global.title = 'By: Oficial Diego 🌟'
global.packname = 'Super SakuraBot 🌸'
global.author = 'By: DiegoOfc ✨️'
global.wm = 'WhatsApp Bot ⭐️'
global.done = '⭐️ H E C H O\nSuper SakuraBot 🍟'

//Msg
global.wait = '🚀 Espere un momento, soy lenta....'
global.eror = '⚠️ Error de comando!'

//Links imagen
global.gif = 'https://qu.ax/ORNj.jpg'
global.thumb = 'https://qu.ax/sCjp.jpg'
global.icon = 'https://qu.ax/wics.jpg'
global.access_denied = 'https://qu.ax/magu.jpg'

//Links
global.sgc = 'https://chat.whatsapp.com'
global.isPairing = false
global.sig = 'https://www.instagram.com/ofc.diego'
global.giturl = 'https://github.com/OfcDiego/SakuraBotLite-MD'
global.swa = 'wa.me/573012482597'
global.version = '2.0.1'

global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.bayar = 'money'

global.multiplier = 45
global.sourceurl = 'https://whatsapp.com/channel/0029VaB4w2ZFHWpwgyEe3w2k'

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
exp: '✉️',
money: '💵',
potion: '🥤',
diamond: '💎',
}
let results = Object.keys(emot)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
},
}

const Jimp = require('jimp')
const fetch = require('node-fetch')

let resizeThumb =  resize(thumb, 300, 250)
global.Thumbnails = resizeThumb

global.danied = {
contextInfo: {
mentionedJid: [],
groupMentions: [],
isForwarded: false,
forwardingScore: 256,
externalAdReply: {
title: `[ x ] Su acceso ha sido bloqueado`,
body: null,
thumbnailUrl: access_denied,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: false
}
}
}

global.adReply = {
contextInfo: {
mentionedJid: [],
groupMentions: [],
//isForwarded: true,
forwardedNewsletterMessageInfo: {
//newsletterJid: '120363167110224268@newsletter',
newsletterName: wm,
serverMessageId: -1
},
forwardingScore: 256,
externalAdReply: {
title: packname,
body: wm,
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: false
}
}
}

global.fakeig = {
contextInfo: {
mentionedJid: [],
groupMentions: [],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363167110224268@newsletter',
newsletterName: wm,
serverMessageId: -1         
},
forwardingScore: 256,
externalAdReply: {
title: `Sakura Whatsapp Bot`,
body: wm,
thumbnailUrl: icon,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}
}
}

async function resize(url, width, height, referer = null) {
try {
const fetchOptions = {
redirect: 'follow',
headers: {},
}

if (referer) {
fetchOptions.headers['Referer'] = referer
}

const response = await fetch(url, fetchOptions)

if (response.ok) {
const finalUrl = response.url
const arrayBuffer = await response.arrayBuffer()
return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG))
} else {
throw new Error(`HTTP error! Status: ${response.status}`)
}
} catch (error) {
console.error('Error:', error.message)

try {
const undiciFetchOptions = {
redirect: 'follow',
headers: {},
}

if (referer) {
undiciFetchOptions.headers['Referer'] = referer
}

const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer())
return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG))
} catch (retryError) {
console.error('Retry Error:', retryError.message)
return Buffer.from([])
}
}
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log('Update settings.js')
delete require.cache[file]
require(file)
})
