/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
		let banTo = input.guild.member(input.mentions.users.first());
		if (!banTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("유저를 찾을수 없다뮤!").then(thismsg => thismsg.delete(1000)); }
		let banReason = pars.join(" ").slice(22);
		if (!input.member.hasPermission("BAN_MEMBERS")) return input.channel.send(`지금 뭐하려고 했냐뮤! <@${input.author.id}>?\n도로 리폿을 먹을수도 있다뮤!`);
		if (banTo.hasPermission("BAN_MEMBERS")) return input.channel.send("뮤! 타깃의 권한이 같거나 더 높은 사람이다 뮤우~!\n도로 리폿을 먹을수도 있다뮤!");
		let Bicon = input.guild.iconURL;
		let kBanEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - BANned`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Bicon)
		.addBlankField()
		.addField("강퇴 대상", `${banTo} (ID: ${banTo.id})`)
		.addField("강퇴 신청자", `${input.author} (ID: ${input.author.id})`)
		.addField("신청된 채널", input.channel)
		.addField("강퇴 사유", `${banReason}.`);
		input.guild.member(banTo).ban(banReason);
		input.delete().catch(O_o=>{});
		input.guild.systemChannel.send(kBanEmb);
}

module.exports.help = {
	name: "강퇴"
};
