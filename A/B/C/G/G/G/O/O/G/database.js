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

let menu = {
main: '',
download: '',
convert: '',
search: '',
ai: '',
owner: '',
developer: '',
group: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*◦➧${config.PREFIX}${commands[i].pattern}*\n`;
 }
}

{

// =================================== MENU-DB ===================================
"menuimg": "https://i.ibb.co/pwNf08R/1713103024643.jpg",
"menumsg": `*Hᴇʏ,* _Buddy_

*╭───˻ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ˺───*
*│*
*│Bᴏᴛ Nᴀᴍᴇ - MACTRIX-MD*
*│Bᴏᴛ Vᴇʀꜱɪᴏɴ - 1.0.0*
*│Bᴏᴛ Pʀᴇꜰɪx - ${config.PREFIX}*
*│Bᴏᴛ Dᴇᴠ - Isuru Chamika*
*│Bᴏᴛ Oᴡɴᴇʀ - ${config.OWNER_NAME}*
*│Mᴏᴅᴇ - ${config.MODE}*
*│*
*╰───────────────*

     *🌟 This Is A Very Simple And Common Whatsapp Bot. You Can Get Several Features From This. This is Owned By CyberKillers™ And Developed By Isuru Chamika. 🐼*
     
     
────────────────
> ${bb}◆ MAIN COMMANDS ◆${bb}

*◦➧${config.PREFIX}alive*
*◦➧${config.PREFIX}menu*
────────────────
> ${bb}◆ DOWNLOAD COMMANDS ◆${bb}

*◦➧${config.PREFIX}song*
*◦➧${config.PREFIX}video*
*◦➧${config.PREFIX}v240p*
*◦➧${config.PREFIX}v360p*
*◦➧${config.PREFIX}v480p*
*◦➧${config.PREFIX}v720p*
*◦➧${config.PREFIX}v1080p*

*◦➧${config.PREFIX}fb*
*◦➧${config.PREFIX}tiktok*
*◦➧${config.PREFIX}gdrive*
────────────────
> ${bb}◆ SEARCH COMMANDS ◆${bb}

${menu.search}
────────────────
> ${bb}◆ GROUP COMMANDS ◆${bb}

${menu.group}
────────────────
> ${bb}◆ CONVERT COMMANDS ◆${bb}

${menu.convert}
────────────────
> ${bb}◆ OWNER COMMANDS ◆${bb}

*◦➧${config.PREFIX}restart*
────────────────
> ${bb}◆ AI COMMANDS ◆${bb}

*◦➧${config.PREFIX}ai*
────────────────

${footer}`,

// =================================== ALIVE-DB ===================================
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


${footer}`,

// ============================== SYSTEM - DB ==============================

"smsg": `
───────────────
┌─────────────────
❘───────────────
├ *⏱ Uᴘᴛɪᴍᴇ :-* ${uptime}
├ *🎲 Rᴀᴍ ᴜꜱᴀɢᴇ :-* ${ram}
├ *🖥 Hᴏꜱᴛ :-* ${host}
├ *👨‍💻 Dᴇᴠᴇʟᴏᴘᴇʀ :-* Isuru Chamika
├ *🧬 Vᴇʀꜱɪᴏɴ :-* 1.0.0
❘───────────────
└─────────────────
───────────────`,


}
