const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://i.ibb.co/MG5dm85/1450.jpg"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Embilipitiya,srilanka."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767748006";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/MG5dm85/1450.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_34_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5hNmVGelRFeWx5K0tTd1E0cU5obDVpaGhpbHZXVFM4OXNYczNEZ0xRWmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpOYU45ODJEU2Y2ME5FSUgzeHMzSlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGI0MmRjNDktMjg0Zi00OTQ5LWFlNWYtNzI4YmI4OWUwZWJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDE5MyxcbiAgICAgIDIxNyxcbiAgICAgIDY4LFxuICAgICAgMjM4LFxuICAgICAgMjI5LFxuICAgICAgMjMyLFxuICAgICAgODQsXG4gICAgICAxNzgsXG4gICAgICAxNDQsXG4gICAgICA2MyxcbiAgICAgIDI1NSxcbiAgICAgIDE2MyxcbiAgICAgIDQxLFxuICAgICAgOTUsXG4gICAgICAyMzgsXG4gICAgICAyMDIsXG4gICAgICAyMTAsXG4gICAgICAxNzMsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgNjAsXG4gICAgICAxOTAsXG4gICAgICAxNDQsXG4gICAgICAxNixcbiAgICAgIDczLFxuICAgICAgMTM2LFxuICAgICAgMTE2LFxuICAgICAgMjMyLFxuICAgICAgNTcsXG4gICAgICA3NSxcbiAgICAgIDE5OSxcbiAgICAgIDM3LFxuICAgICAgMTI3LFxuICAgICAgMTM4LFxuICAgICAgMTksXG4gICAgICAyMzMsXG4gICAgICAxOTksXG4gICAgICAyNCxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllNUFM0NDNaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2Nzc0ODAwNjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuS6l/Cdl5sgIPCdl5gg8J2XpiDwnZebIPCdl5Qg8J2XofCShpzgvLvvo79cIixcbiAgICBcImxpZFwiOiBcIjg3MDIwNTY3ODM5NzA6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGZGZ0kwR0VOTC9qTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3RmcvTlR3WFFYZDhnSEZoSHFZWWc4all3QjJLdFV5dVp0Z2NMSGdtbTNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5UaWoyZkVwMGdrVkNybXp1b0pWRm9yTnhkdVJQOFJnK204RDMvVlBBT0VzQ2gzck4yU3pPUWZoMFJtd0wzTk0zSDBqczZoRnJXM2ZjeXlNNlpiZ0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlzbTZVRlI1U2dXbjU1QUQzYVcxTDZTcjRmK04zR2t1QnZtQmgwVWhSZXJTSzZlU0NESVZKcFdqM0R2RjN5K0dEcmZxMXZFWFovMVZXcUYydG9KcUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY3NzQ4MDA2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDU1NzY1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN6YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3piLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaS9tYmtSSTlubDZvL2ZPNjV6WUxlVC91T2FmR1c0NGdTcU82OWxlc2FKWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjM3ODg0NTk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0NTU3NjE4NjYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HESHAN-MD",
  ownername:process.env.OWNER_NAME|| "HESHAN ✨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
