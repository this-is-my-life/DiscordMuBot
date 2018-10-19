/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
    input.delete().catch(O_o=>{});
	input.channel.send(`${say}`);
}

module.exports.help = {
	name: "따라해/"
}
