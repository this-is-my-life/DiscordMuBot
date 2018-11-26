/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
	if (!reactTo) { 
		input.delete().catch(O_o => {});
		return input.channel.send("User Not Found").then(thismsg => thismsg.delete(5000));
	}
	input.delete().catch(O_o => {});
	let reactTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
	reactTo.lastMessage.react('👍');
	reactTo.lastMessage.react('👎');
	reactTo.lastMessage.react('👌');
	reactTo.lastMessage.react('🖕');
	reactTo.lastMessage.react('💯');
	reactTo.lastMessage.react('💥');
	reactTo.lastMessage.react('🤔');
	input.channel.send("Reacted!").then(thismsg => thismsg.delete(5000));
};

module.exports.help = {
	name: "react",
	description: "반응"
}
