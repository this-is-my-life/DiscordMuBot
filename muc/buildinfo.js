/*
    μBot v5.0 Command: Ping. 
    ---------------------
    PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
    Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
    
    * Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    input.channel.send("Heroku로부터 빌드 정보를 가져오는데 수많은 시간이 걸릴수있습니다.")
    superagent.get(`https://api.heroku.com/apps/mubotapi/builds`)
    .set("Accept", "application/json;version=3").set("Authorization", `Bearer ${process.env.muhu}`).then(res => {
        let herokuEmb = new API.RichEmbed()
        .setColor("#6762a6")
        .setTitle("히로쿠 뮤봇 빌드 인포")
        .setTimestamp()
        .setThumbnail("http://www.stickpng.com/assets/images/58480873cef1014c0b5e48ea.png")
        .setDescription(`현재 작동되고 있는 뮤봇은 정식, 승인된 디벨로퍼인\n${res.body.slice(-1)[0].user.email}으로부터 ${res.body.slice(-1)[0].updated_at}에 빌드된\n${res.body.slice(-1)[0].source_blob.version}버전을 사용하여\n빌드에 ${res.body.slice(-1)[0].status}된 버전을 사용중입니다`);
        input.channel.send(herokuEmb);
    }).catch(err => console.log(err));
}

module.exports.help = {
    name: "빌드",
    description: "히로쿠"
}