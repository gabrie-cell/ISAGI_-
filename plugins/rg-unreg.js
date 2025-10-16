let handler = async (m, { conn }) => {
  const user = global.db.data.users[m.sender]

  if (!user.registered) {
    return m.reply('❌ No estás registrado.\n\nUsa *.reg Nombre.Edad* para registrarte.')
  }

  const nombre = user.name || 'Desconocido'
  const edad = user.age || '???'

  user.registered = false
  user.name = ''
  user.age = 0
  user.regTime = -1
  user.exp = 0
  user.money = 0

  let pp = 'https://files.cloudkuimages.guru/images/LIMw5rVy.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {}

  await conn.sendMessage(m.chat, {
    text: `*𝖸𝖺 𝗇𝗈 𝖾𝗌𝗍𝖺́𝗌 𝗋𝖾𝗀𝗂𝗌𝗍𝗋𝖺𝖽𝗈 ❌*\n*𝖰𝗎𝗂𝖾𝗋𝖾𝗌 𝗋𝖾𝗀𝗂𝗌𝗍𝗋𝖺𝗋𝗍𝖾 𝗈𝗍𝗋𝖺 𝗏𝖾𝗓 𝗎𝗌𝖺 #reg*\n\n*𝖦𝗋𝖺𝖼𝗂𝖺𝗌 𝗉𝗈𝗋 𝗎𝗌𝖺𝗋 𝖾𝗅 𝖻𝗈𝗍*\n> ${dev}`,
    mentions: [m.sender],
    contextInfo: {
      externalAdReply: {
        title: me,
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: pp
      }
    }
  }, { quoted: m })
}

handler.help = ['unreg']
handler.tags = ['info']
handler.command = ['unreg', 'adios', 'regdel']
handler.register = true

export default handler