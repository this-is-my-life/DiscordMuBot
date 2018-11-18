/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require('random-hex-color');

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
	let result = Number(say).toString(2);
	let binEmb = new API.RichEmbed()
	.setColor(randomHexColor())
	.setTitle(result)
	.setDescription("Decimal to Binary\n10진수를 2진수로 변환함");
    input.channel.send(binEmb);
}

module.exports.help = {
    name: "2진수"
}
