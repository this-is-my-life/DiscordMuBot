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
	superagent.get(`https://mubotdb.herokuapp.com/api/UsersCoin.json/${input.author.id}`)
	.then(res => {
		let eCoinEmb = new API.RichEmbed()
		.setTitle(`Umm... ${input.member.displayName} has....`)
		.setColor(randomHexColor())
		.setDescription(`${res.body.UsersCoin} MUC!`);
		input.channel.send(eCoinEmb);
	});
}

module.exports.help = {
	name: "coin"
}
