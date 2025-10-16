import ws from 'ws';
import fetch from 'node-fetch';

async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map();

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn);
    }
  });

  let users = [...uniqueUsers.values()];
  let subBotsCount = users.length;
  let botPrincipal = stars.user.jid;

  let uptime = process.uptime(); 
  let hours = Math.floor(uptime / 3600);
  let minutes = Math.floor((uptime % 3600) / 60);

  let responseMessage = `
*╭─〔 Sub-Bots Conectaditos 〕─⬣*
*┃ ✦ Bot Principal:* 1
*┃ ✦ Bots de apoyo activos:* ${subBotsCount || '0'}
*┃ ✦ Tiempo activo del principal:* ${hours} hora(s) y ${minutes} minuto(s)
*╰───────────────❀*
`.trim();

  try {
    let img = await (await fetch('https://files.cloudkuimages.guru/images/aQ65RX8y.jpg')).buffer();
    await stars.sendMessage(m.chat, {
      text: responseMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9,
        externalAdReply: {
          title: '𝑰𝒕𝒂𝒄𝒉𝒊 𝒃𝒐𝒕 𝑩𝒚 𝑴𝒂𝒓𝒄𝒌',
          body: `➤ Sub-Bots conectaditos: ${subBotsCount || '0'}`,
          thumbnail: img,
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });

    await m.react('🤖');
  } catch (e) {
    console.error(e);
  }
}

handler.help = ['bots'];
handler.tags = ['jadibot'];
handler.command = ['listjadibot', 'bots'];

export default handler