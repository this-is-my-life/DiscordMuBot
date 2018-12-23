/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
	let reactTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
	if (!reactTo) { 
		input.delete().catch((O_o) => {});
		return input.channel.send("User Not Found").then((thismsg) => thismsg.delete(1000));
	}
	if (input.id === reactTo.lastMessageID) {
		input.delete().catch((O_o) => { });
		return input.channel.send("Can't React Yourself!").then((thismsg) => thismsg.delete(1000));
	}
	reactTo.lastMessage.react("👍");
	reactTo.lastMessage.react("👎");
	reactTo.lastMessage.react("👌");
	reactTo.lastMessage.react("🖕");
	reactTo.lastMessage.react("💯");
	reactTo.lastMessage.react("💥");
	reactTo.lastMessage.react("🤔");
	input.delete().catch((O_o) => {});
	input.channel.send("Reacted!").then((thismsg) => thismsg.delete(1000));
};

module.exports.help = {
	name: "react",
	description: "반응"
};
