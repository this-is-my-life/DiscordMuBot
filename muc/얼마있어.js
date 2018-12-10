/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
let mute = require("../Saved/UsersCoin.json");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
	if (!mute[input.author.id]) {
		mute[input.author.id] = {
			mute: 0
		};
	}
	let userCoin = mute[input.author.id].mute;
    let eCoinEmb = new API.RichEmbed()
    .setTitle(`Hum... ${input.member.displayName}님의 코인은....`)
    .setColor(randomHexColor())
    .setDescription(`${userCoin} MUC!`);
    input.channel.send(eCoinEmb);
}

module.exports.help = {
	name: "뮤트코인"
}
