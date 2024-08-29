const config = require('../config')
const {cmd , commands} = require('../Isuru%20Chamika/A/N/I/command')
const os = require('os')
const {runtime} = require('../B/C/D/E/F/G/H/I/S/U/README/functions')
let uptime = `${runtime(process.uptime())}`
let host = `${os.hostname()}`
let ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
let bb = "```"
let footer = `> *MACTRIX-MD*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪꜱᴜʀᴜ ᴄʜᴀᴍɪᴋᴀ ᴀɴᴅ ᴄʏʙᴇʀᴋɪʟʟᴇʀꜱᴛᴇᴀᴍ*`

[{
"aliveimg":  "https://i.ibb.co/pwNf08R/1713103024643.jpg"
},
{
"alivemsg": "*Hello, I am Alive Now!*\n\n*👽 Bᴏᴛ Nᴀᴍᴇ - MACTRIX-MD*\n*👨‍💻 Bᴏᴛ Dᴇᴠ - Isuru Chamika*\n*🕵️ Bᴏᴛ Oᴡɴᴇʀ - ${config.OWNER_NAME}*\n\n🟢 I am Online Still ${uptime}\n🔮 You Can Use Me With This [ ${config.PREFIX} ] Prefix.\n🔁 Response Delay :\n🖥️ Host : ${host}\n🧬 Version : 1.0.0\n\n*You Can Contact Bot Developer Using,*\n*◦${config.PREFIX}dev*\n*◦${config.PREFIX}developer*\n*◦${config.PREFIX}isuru*\n*◦${config.PREFIX}tharu*\n*Commands..!*\n\n🎛️ Work Mode : ${config.MODE}\n\n\n${footer}"
}]
