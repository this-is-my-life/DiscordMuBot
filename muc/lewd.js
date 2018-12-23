/*
    μBot v7.0 Command.
    ---------------------
    PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
    Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
    
    * Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    if (!input.channel.nsfw) {
        input.channel.send("Wait! What? You are Hentai! ~~(Just.. Turn on NSFW..)~~ \n에.. 잠만... 헤에? 넌 변태닷! ~~(NSFW를 틀면 보일지도...?)~~");
    } else {
        const filter = m => m.author.id === input.author.id;
        input.channel.send("r19 콘텐츠가 표시될꺼다뮤~★ 뮤는 책임 안진다뮤~\n(이 작업에 대하여 뮤봇은 책임을 지지 않습니다, 계속하시려면 \"나는 변태다\"를 10초 안에 입력하세요").then((q) => q.delete(10000));
        input.channel.awaitMessages(filter, {
            max: 1,
            time: 10000
        }).then((collected) => {
            let ghinput = collected.first().content;
            collected.delete();
            if (ghinput === "나는 변태다") {
                    let RanMax = 1;
                    let Random = Math.floor(Math.random() * (RanMax)) + 0; // 첫번째 슬롯 값 추출
                    let randomHentai;
                    if (Random === 0) {
                        randomHentai = "lewdneko";
                    } else if (Random === 1) {
                        randomHentai = "lewdkitsune";
                    }
                    superagent.get(`https://nekobot.xyz/api/image?type=${randomHentai}`)
                    .then((res) => {
                        let hentaiEmb = new API.RichEmbed()
                        .setImage(res.body.message)
                        .setColor(randomHexColor())
                        .setFooter("Powered by nekobot.xyz");
                        input.channel.send(hentaiEmb);
                    }).catch((err) => { if (err) { console.log(err); }});
            }
        });
    }
}

module.exports.help = {
    name: "보일듯말듯",
    description: "r17"
};
