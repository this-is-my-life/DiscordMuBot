/*
	μBot v5.0 Command: Ping. 
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
    .setTitle(`Hum... ${input.member.displayName} Have....`)
    .setColor(randomHexColor())
    .setDescription(`${userCoin} MUC(MuteCoin)!`);
    input.channel.send(eCoinEmb);
}

module.exports.help = {
	name: "mt"
}
