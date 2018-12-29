/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
    let choses = say.split(" ");
    let ranChose = Math.floor(Math.random() * (choses.length) + 0);
    input.channel.send(`뮤? "${choses[ranChose]}"!`)
};

module.exports.help = {
	name: "choice"
};
