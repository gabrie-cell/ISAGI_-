let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
if (!m.sender) return // Verificar que m.sender esté definido
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://files.catbox.moe/xr2m6u.jpg'

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = `➤  ⏤͟͟͞͞${usuario} \`ʜᴀ ᴄᴀᴍʙɪᴀᴅᴏ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ɢʀᴜᴘᴏ ᴀʜᴏʀᴀ ᴇʟ ɢʀᴜᴘᴏ sᴇ ʟʟᴀᴍᴀ\`:\n> *${m.messageStubParameters && m.messageStubParameters[0] ? m.messageStubParameters[0] : 'Nombre no disponible'}*.`
foto = `➤  \`sᴇ ʜᴀ ᴄᴀᴍʙɪᴀᴅᴏ ʟᴀ ɪᴍᴀɢᴇɴ ᴅᴇʟ ɢʀᴜᴘᴏ  ᴇᴄʜᴏ ᴘᴏʀ\` ✎ ${usuario}`
edit = `✨️ ${usuario} Ha permitido que ${m.messageStubParameters && m.messageStubParameters[0] ? (m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos') : 'desconocido'} puedan configurar el grupo.`
newlink = `➤ \`ᴇʟ ᴇɴʟᴀᴄᴇ ᴅᴇʟ ɢʀᴜᴘᴏ ʜᴀ sɪᴅᴏ ʀᴇsᴛᴀʙʟᴇᴄɪᴅᴏ ᴀᴄᴄɪᴏ́ɴ ʜᴇᴄʜᴀ ᴘᴏʀ\` ✎ ${usuario}`
status = `✨️ El grupo ha sido ${m.messageStubParameters && m.messageStubParameters[0] ? (m.messageStubParameters[0] == 'on' ? '*cerrado*' : '*abierto*') : 'modificado'} Por ${usuario}\n\n> ✧ Ahora ${m.messageStubParameters && m.messageStubParameters[0] ? (m.messageStubParameters[0] == 'on' ? '*solo admins*' : '*todos*') : 'estado desconocido'} pueden enviar mensaje.`
admingp = `➤ ${m.messageStubParameters && m.messageStubParameters[0] ? `@${m.messageStubParameters[0].split`@`[0]}` : 'Alguien'} 𝘕𝘶𝘦𝘷𝘰 𝘢𝘥𝘮𝘪𝘯 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 𝘢𝘤𝘤𝘪𝘰́𝘯 𝘦𝘤𝘩𝘢 𝘱𝘰𝘳 : ${usuario}`
noadmingp =  `➤ ${m.messageStubParameters && m.messageStubParameters[0] ? `@${m.messageStubParameters[0].split`@`[0]}` : 'Alguien'} \`*𝘋𝘦𝘫𝘢 𝘥𝘦 𝘴𝘦𝘳 𝘢𝘥𝘮𝘪𝘯 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 𝘱𝘰𝘳 𝘱𝘯𝘥𝘫 𝘓𝘰 𝘩𝘪𝘻𝘰\` ✐ ${usuario}`
  
if (chat.detect && m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   

} else if (chat.detect && m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    

} else if (chat.detect && m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 29) {
if (m.messageStubParameters && m.messageStubParameters[0]) {
  await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
} else {
  await conn.sendMessage(m.chat, { text: `✨️ alguien ha sido promovido a admin.\n\n> ✧ Acción hecha por:\n> » ${usuario}`, mentions: [m.sender] }, { quoted: fkontak })
}

} if (chat.detect && m.messageStubType == 30) {
if (m.messageStubParameters && m.messageStubParameters[0]) {
  await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
} else {
  await conn.sendMessage(m.chat, { text: `✨️ Alguien ha dejado de ser admin.\n\n> ✧ Acción hecha por:\n> » ${usuario}`, mentions: [m.sender] }, { quoted: fkontak })
}
} else {
if (m.messageStubType == 2) return
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})
}}
export default handler
