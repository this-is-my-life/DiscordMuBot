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
    let t;

    const filter = (m) => m.author.id === input.author.id;
    input.channel.send("말할 텍스트를 적어달라뮤! [취소를 원할경우 1분을 기다리라뮤!]\n[한국어는 지원되지 않는다뮤....]").then((q) => q.delete(60000));
    input.channel.awaitMessages(filter, {
        max: 1,
        time: 60000
    }).then((collected) => {
        let textinput = collected.first().content;
        collected.delete();
        if (textinput === "취소") { input.channel.send("취소됬다뮤!").then((q) => q.delete(2000)); } else {
            t = textinput;

            input.channel.send("이미지가 로딩되는동안 시간이 걸릴수있다뮤!");
            superagent.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${t}`)
                    .then((res) => {
                        let hentaiEmb = new API.RichEmbed()
                        .setImage(res.body.message)
                        .setColor(randomHexColor())
                        .setFooter("Powered by nekobot.xyz");
                        input.channel.send(hentaiEmb);
                    }).catch((err) => { if (err) { console.log(err); }});
       }
    });

};
module.exports.help = {
    name: "cmm"
};
