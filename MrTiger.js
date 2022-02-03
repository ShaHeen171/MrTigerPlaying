const Discord = require('discord.js');
const tpoints = {};
const prefix = "2"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `Joker Staff`,
    `MrTiGER`,
    `100k Member soon`,
    `MrTiger `,
    `Ilove ❤ `,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("OTA4NjIzODcyMDQ2MjkzMDAy.YY4b7A.xnKFpUIsC2Du8PZOAJCO68xdhQw");
