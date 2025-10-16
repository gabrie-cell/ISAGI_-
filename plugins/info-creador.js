let handler = async (m, { conn }) => {
let vcard = `BEGIN:VCARD
VERSION:3.0
FN:✨ ˚₊ ᴍ ᴀ ʀ ᴄ ᴋ・୧
ORG:✨ ˚₊ ᴍ ᴀ ʀ ᴄ ᴋ・୧
TITLE:Metatron Executioner of Michael
EMAIL;type=INTERNET:brayanfree881@gmail.com 
TEL;type=CELL;waid=573001533523:+573001533523
ADR;type=WORK:;;2-chōme-7-5 Fuchūchō;marck;Osaka;594-0071;Japan
URL;type=WORK:https://www.tiktok.com/@fantom_uwu_330
X-WA-BIZ-NAME:𝑴𝒂𝒓𝒄𝒌 𝑼𝒘𝒖
X-WA-BIZ-DESCRIPTION:𝐈𝐭𝐚𝐜𝐡𝐢 𝐛𝐲 𝐌𝐚𝐫𝐜𝐤
X-WA-BIZ-HOURS:Mo-Su 00:00-23:59
END:VCARD`
let qkontak = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
contactMessage: {
displayName: "𝑴𝒂𝒓𝒄𝒌 𝑼𝒘𝒖",
vcard
}
}
}
await conn.sendMessage(m.chat, {
contacts: {
displayName: '𝑴𝒂𝒓𝒄𝒌 𝑼𝒘𝒖',
contacts: [{ vcard }]
},
contextInfo: {
externalAdReply: {
title: 'Copyright © 2022 - 2025 Itachi',
body: 'Contacta directamente por WhatsApp',
thumbnailUrl: 'https://cdn.yupra.my.id/yp/ybjsi0vg.jpg',
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: qkontak })
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner', 'creador', 'donar']

export default handler
