import axios from 'axios';

const handler = async (m, { text, conn, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*[❗] Por favor Ingrese un, Link de instagram*', m, rcanal)
  }

  const instagramUrl = args[0];
  let res;

  try {
    await m.react('🐬');
    res = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/instagram-dl?url=${encodeURIComponent(instagramUrl)}`);
  } catch (e) {
    return conn.reply(m.chat, '*[❗] Erorr de tu enlace, Intenta con otro*', m, rcanal)
  }

  const result = res.data;
  if (!result || result.data.length === 0) {
    return conn.reply(m.chat, '*[❗] No se encontraron resultados*', m, rcanal)
  }

  const videoData = result.data[0]; 
  const videoUrl = videoData.dl_url;

  if (!videoUrl) {
    return conn.reply(m.chat, '*[❗] No se encontraron de tu enlace,*', m, rcanal)
  }

  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: '*Aquí tienes tu, Vídeo 📝*', fileName: 'instagram.mp4', mimetype: 'video/mp4' }, { quoted: m });
      await m.react('✅');
      break;
    } catch (e) {
      if (attempt === maxRetries) {
        await m.react('❌');
        return conn.reply(m.chat, '*Error al enviar el video intenta más tarde ✍🏻*', m, rcanal)
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

handler.help = ['instagram <url>'];
handler.tags = ['downloader'];
handler.command = ['ig', 'instagram', 'igdl']
handler.register = true;

export default handler;