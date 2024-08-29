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

{
"aliveimg":  "https://i.ibb.co/pwNf08R/1713103024643.jpg",
"alivemsg": `*Hello, I am Alive Now!*
    
*👽 Bᴏᴛ Nᴀᴍᴇ - MACTRIX-MD*
*👨‍💻 Bᴏᴛ Dᴇᴠ - Isuru Chamika*
*🕵️ Bᴏᴛ Oᴡɴᴇʀ - ${config.OWNER_NAME}*

🟢 I am Online Still ${uptime}
🔮 You Can Use Me With This [ ${config.PREFIX} ] Prefix.
🔁 Response Delay :
🖥️ Host : ${host}
🧬 Version : 1.0.0

*You Can Contact Bot Developer Using,*
*◦${config.PREFIX}dev*
*◦${config.PREFIX}developer*
*◦${config.PREFIX}isuru*
*◦${config.PREFIX}tharu*
*Commands..!*

🎛️ Work Mode : ${config.MODE}


${footer}`
}
