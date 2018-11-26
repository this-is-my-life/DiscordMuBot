/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
		let kickTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!kickTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("유저를 찾을수 없다뮤!").then(thismsg => thismsg.delete(1000)); }
		let kickReason = pars.join(" ").slice(22);
		if (!input.member.hasPermission("KICK_MEMBERS")) return input.channel.send(`지금 뭐하려고 했냐뮤! <@${input.author.id}>?\n도로 리폿을 먹을수도 있다뮤!`);
		if (kickTo.hasPermission("KICK_MEMBERS")) return input.channel.send("뮤! 타깃의 권한이 같거나 더 높은 사람이다 뮤우~!\n도로 리폿을 먹을수도 있다뮤!");
		let Kicon = input.guild.iconURL;
		let kKickEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - 킥`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Kicon)
		.addBlankField()
		.addField("킥 대상", `${kickTo} (ID: ${kickTo.id})`)
		.addField("킥 신청자", `${input.author} (ID: ${input.author.id})`)
		.addField("신청된 채널", input.channel)
		.addField("사유", `${kickReason}.`);
		input.guild.member(kickTo).kick(kickReason);
		input.delete().catch(O_o=>{});
		input.guild.systemChannel.send(kKickEmb);
}

module.exports.help = {
	name: "k"
}
