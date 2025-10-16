let handler = async (m, { conn }) => {
    let vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Celular
END:VCARD`;
    let qkontak = {
        key: {
            fromMe: false,
            participant: "13135550002@s.whatsapp.net",
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: "Meta Ai",
                vcard,
            },
        },
    };

    await conn.sendMessage(
        m.chat,
        {
            image: { url: "https://cdn.yupra.my.id/yp/5u9fz57s.jpg" },
            caption:
                "🍙 *Proyecto Script Marck* 🍙\n" +
                "📂 *Repositorio: Código fuente oficial de Nagi*\n" +
                "✨ *¡No olvides dejar una ⭐ en el repo si te gusta!*",
            title: "🍡 Nagi — Bot de WhatsApp",
            subtitle: "",
            footer: "*© 2024 – 2025 Marck Uwu*\n*Todos los derechos reservados*",
            interactiveButtons: [
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🌐 Repositorio de GitHub",
                        url: "https://github.com/El-brayan502/NagiBotV3",
                        merchant_url: "https://github.com/El-brayan502/NagiBotV3",
                    }),
                },
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🐛 Reportar un problema",
                        url: "https://github.com/El-brayan502/NagiBotV3/issues",
                        merchant_url: "https://github.com/El-brayan502/NagiBotV3/issues",
                    }),
                },
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🔧 Pull Request",
                        url: "https://github.com/El-brayan502/NagiBotV3/pulls",
                        merchant_url: "https://github.com/El-brayan502/NagiBotV3/pulls",
                    }),
                },
            ],
            hasMediaAttachment: true,
        },
        { quoted: qkontak }
    );
};

handler.help = ["script"];
handler.tags = ["info"];
handler.command = ['script', 'sc'];

export default handler;