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
    input.channel.send("스팀 URL상 유저이름을 알려달라뮤~★\n스팀 URL상의 유저이름이란, https://steamcommunity.com/id/**PMH_only** 의 PMH_only부분이나 https://steamcommunity.com/profiles/**76561198316939606** 의 76561198316939606부분을 말합니다\n(\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(q => q.delete(30000));
    input.channel.awaitMessages(filter, {
		max: 1,
		time: 30000
    }).then(collected => {
        let stInput = collected.first().content;
        collected.delete();
		if (stInput == "취소") { input.channel.send("취소되었습니다").then(q => q.delete(2000)); } else {
            let stOid = Number(stInput);
            if (!stOid) {
                superagent.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.must}&vanityurl=${stInput}`)
                .then(res => stOid = res.body.steamid);
            }
            superagent.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.must}&steamids=${stOid}`).then(res => {
                let kSteamEmb = new API.RichEmbed()
                .setColor(randomHexColor())
                .setTitle(`${res.body.players[0].personaname}`)
                .setThumbnail(res.body.players[0].avatar)
                .addField("", res.body.bio || "자기소개를 작성하지 않음")
                .addField("유저 이름", res.body.players[0].personaname, true)
                .addField("유저 고유 ID", res.body.players[0].steamid, true)
                .addField("유저 프로필 URL", res.body.players[0].profileurl, true)
                .addField("유저 위치 국가", res.body.players[0].loccountrycode, true)
                .setFooter("Powered by steampowered.com");
                input.channel.send(kSteamEmb);
            }).catch(err => {
                if (err) { return input.channel.send(`그 이름을 가진 유저를 찾을 수 없다뮤!\nError: ${err.message}`).then(r => r.delete(2000));}
            });
        }
    });
}

module.exports.help = {
    name: "스팀",
    description: "st"
}
