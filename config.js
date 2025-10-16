import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
global.owner = [
  ['50231458537', '𝖧𝖺𝗌𝗁𝗂𝗋𝖺𝗆𝖺 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 👑', true],
  ['573001533523', '𝘔𝘢𝘳𝘤𝘬 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 👑', true], 
  ['35855125204999@lid', 'lid 👤', true],
];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['573001533523', '50231458537']
global.suittag = ['573001533523'] 
global.prems = ['573001533523', '50231458537']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '𝙉𝙖𝙜𝙞𝘽𝙤𝙩-𝙈𝘿 : 𝘿𝙚𝙫 𝙃𝙖𝙨𝙝𝙞𝙧𝙖𝙢𝙖'
global.botname = '𝖭𝖺𝗀𝗂𝖡𝗈𝗍-𝖠𝖨'
global.textbot = 'N A G I - A I'
global.author = '𝑁𝑎𝑔𝑖𝐵𝑜𝑡-𝑀𝐷 𝐵𝑦 𝐻𝑎𝑠ℎ𝑖𝑟𝑎𝑚𝑎 𝑆𝑒𝑛𝑗𝑢'
global.dev = 'NᴀɢɪBᴏᴛ-MD : Hᴀsʜɪʀᴀᴍᴀ Sᴇɴᴊᴜ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.9' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.vsJB = '5.0'
global.nameqr = 'Nagibot'
global.namebot = 'Nagi Bot'
global.sessions = 'ItachiSessions'
global.jadi = 'jadibts' 
global.nagiJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'Coins'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://chat.whatsapp.com/JbQKmggakgv5ogwyNrKoEV?mode=ems_copy_t';
global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i';
global.creador = 'wa.me/50231458537'
global.correo = 'brayanfree881@gmail.com ';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let catalogo2;
try {
  catalogo2 = fs.readFileSync('./src/catalogo.jpg');
} catch (error) {
  console.log('Warning: ./src/catalogo.jpg not found, using catalogo as fallback');
  catalogo2 = catalogo; // Using the existing 'catalogo' variable as fallback
}
global.photoSity = [catalogo2]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.ch = {
  ch1: '120363417186717632@newsletter',
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   


global.multiplier = 69
global.maxwarn = '3'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})