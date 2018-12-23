/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
		let banTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!banTo) { 
			input.delete().catch((O_o) => {}); 
			return input.channel.send("User Not Found").then((thismsg) => thismsg.delete(1000));}
		let banReason = pars.join(" ").slice(22);
		if (!input.member.hasPermission("BAN_MEMBERS")) return input.channel.send(`<@${input.author.id}> has NO PERMISSION: BAN_MEMBERS`);
		if (banTo.hasPermission("BAN_MEMBERS")) return input.channel.send("Error: Target has Same or High PERMISSION");
		let Bicon = input.guild.iconURL;
		let eBanEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - BANned`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Bicon)
		.addBlankField()
		.addField("Ban To", `${banTo} (ID: ${banTo.id})`)
		.addField("Ban By", `${input.author} (ID: ${input.author.id})`)
		.addField("Banned Channel", input.channel)
		.addField("Ban Reason", `${banReason}.`);
		input.guild.member(banTo).ban(banReason);
		input.guild.systemChannel.send(eBanEmb);
};

module.exports.help = {
	name: "b"
};
