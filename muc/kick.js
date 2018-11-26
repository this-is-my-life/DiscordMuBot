/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
		let kickTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(args[0]));
		if (!kickTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("User Not Found").then(thismsg => thismsg.delete(1000)); }
		let kickReason = pars.join(" ").slice(22);
		if (!input.member.hasPermission("KICK_MEMBERS")) return input.channel.send(`<@${input.author.id}> has NO PERMISSION: KICK_MEMBERS`);
		if (kickTo.hasPermission("KICK_MEMBERS")) return input.channel.send("Error: Target has Same or High PERMISSION");
		let Kicon = input.guild.iconURL;
		let eKickEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - KICKed`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Kicon)
		.addBlankField()
		.addField("Kick To", `${kickTo} (ID: ${kickTo.id})`)
		.addField("Kick By", `${input.author} (ID: ${input.author.id})`)
		.addField("Kicked Channel", input.channel)
		.addField("Kick Reason", `${kickReason}`);
		input.guild.member(kickTo).kick(kickReason);
		input.guild.systemChannel.send(eKickEmb);
}

module.exports.help = {
	name: "k"
}
