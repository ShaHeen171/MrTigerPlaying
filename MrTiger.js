const Discord = require('discord.js');
const tpoints = {};
const prefix = "1"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `Dev`,
    `ShaHeen_`,
    `Duck Security`,
    `ShaHeen_ `,
    `Best BOT `,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("OTA4NjIzODcyMDQ2MjkzMDAy.YY4b7A.H37mzsggYh8SlSSD72RxKbD0BWo");
