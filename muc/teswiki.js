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
    const filter = m => m.author.id === input.author.id;
    input.channel.send("http://teswiki.co.nf\n테스위키에서 검색할 문서 제목을 알려달라뮤~★\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(q => q.delete(30000));
    input.channel.awaitMessages(filter, {
		max: 1,
		time: 30000
    }).then(collected => {
    let docName = encodeURI(collected.first().content);
    superagent.get(`http://tes.dothome.co.kr/${docName}`)
        .then(res => {
            let teswiki = new API.RichEmbed()
            .setTitle("문서 발견!")
            .setColor(randomHexColor())
            .setDescription(`[보기](http://tes.dothome.co.kr/index.php?title=${docName}) ● [수정](http://tes.dothome.co.kr/index.php?title=${docName}&action=edit) ● [추가](http://tes.dothome.co.kr/index.php?title=${docName}&action=edit&section=new)`)
            .setThumbnail("http://tes.dothome.co.kr/images/c/cc/%ED%85%8C%EC%8A%A4%EC%9C%84%ED%82%A4%EB%A9%94%EC%9D%B8%EB%A1%9C%EA%B3%A0.png");
            input.channel.send(teswiki);
        }).catch(err => {
            if (err) {
                let teswikiErr = new API.RichEmbed()
                .setTitle("문서가.. 읍서요!")
                .setColor(randomHexColor())
                .setDescription(`[문서 추가](http://tes.dothome.co.kr/index.php?title=${docName}&action=edit) ● [문단 추가](http://tes.dothome.co.kr/index.php?title=${docName}&action=edit&section=new)`)
                .setThumbnail("http://tes.dothome.co.kr/images/c/cc/%ED%85%8C%EC%8A%A4%EC%9C%84%ED%82%A4%EB%A9%94%EC%9D%B8%EB%A1%9C%EA%B3%A0.png");
                input.channel.send(teswikiErr);
            }
        })
    });  
}

module.exports.help = {
    name: "문서",
    description: "테스위키"
}