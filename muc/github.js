/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require('random-hex-color');

module.exports.run = async (mu, input, pars) => {
    const filter = m => m.author.id === input.author.id;
    input.channel.send("깃헙 URL상 유저이름을 알려달라뮤~★\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(q => q.delete(30000));
    input.channel.awaitMessages(filter, {
		max: 1,
		time: 30000
    }).then(collected => {
        let ghinput = collected.first().content;
        collected.delete();
		if (ghinput === "취소") { input.channel.send("취소되었습니다").then(q => q.delete(2000)); } else {
            superagent.get(`https://api.github.com/users/${ghinput}`).then(res => {
                let kGithub = new API.RichEmbed()
                .setColor(randomHexColor())
                if (res.body.name) {
                    if (res.body.company) {
                        kGithub.setTitle(`**${res.body.company} / ${res.body.name}님의 깃헙정보**`);
                    } else {
                        kGithub.setTitle(`**${res.body.name}님의 깃헙정보**`);
                    }
                } else {
                    kGithub.setTitle(`**${res.body.login}님의 깃헙정보**`);
                }
                kGithub.setURL(res.body.html_url)
                .setThumbnail(res.body.avatar_url)
                .setImage("https://cdn.discordapp.com/attachments/521187311761752087/521187414295838730/GitHub_Logo_White.png")
                .setDescription(`퍼블릭 레포지트리: **${res.body.public_repos}**개, 팔로워: **${res.body.followers}**명, 팔로윙: **${res.body.following}**명`)
                .addField("자기소개", res.body.bio || "자기소개를 작성하지 않음")
                .addField("유저 이름 (URL상)", res.body.login, true)
                .addField("유저 이름 (프로필상)", res.body.name || "프로필을 생성하지 않음", true)
                .addField("유저 고유 ID", res.body.id, true)
                .addField("유저 프로필 URL", res.body.html_url, true)
                .addField("유저 대표 사이트", res.body.blog || "비공개", true)
                .addField("유저 위치 주소", res.body.location || "비공개", true)
                .addField("유저 대표 이메일", res.body.email || "비공개", true)
                .addField("유저 계정 생성일", res.body.created_at, true)
                .setFooter("Powered by github.com", avat);
                input.channel.send(kGithub);
            }).catch(err => {
                if (err) { return input.channel.send(`그 이름을 가진 유저를 찾을 수 없다뮤!\nError: ${err.message}`).then(r => r.delete(2000));}
            });
        }
    });
}

module.exports.help = {
    name: "깃헙",
    description: "gh"
}
