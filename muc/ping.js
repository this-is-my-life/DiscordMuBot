/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
    let ePingEmb = new API.RichEmbed()
    .setTitle(`Pong!`)
    .setColor(input.member.displayHexColor)
    .setDescription(`Here, ${input.author.toString()}...Mu! OㅅO [${Math.round(mu.ping)}ms]`);
    input.delete().catch(O_o=>{});
    input.channel.send(ePingEmb);
}

module.exports.help = {
	name: "ping",
	alias: "p"
}
