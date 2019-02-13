/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");
const superagent = require("superagent");

module.exports.run = async (mu, input, pars) => {
	superagent.get("https://api.jsonbin.io/b/5c62c948ad5128320af85de0/latest")
	.then((res) => {
		let UsersCoin = res.body;
		let eCoinEmb = new API.RichEmbed()
		.setTitle(`흠... ${input.member.displayName}님의 코인은....`)
		.setColor(randomHexColor())
		.setDescription(`${UsersCoin[input.author.id].UsersCoin} MUC!`);
		input.channel.send(eCoinEmb);
	});
};

module.exports.help = {
	name: "뮤트코인"
};
