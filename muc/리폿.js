/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
		let reportTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!reportTo) { 
			input.delete().catch((O_o)=>{});
			return input.channel.send("유저를 찾을 수 없다뮤!").then((thismsg) => thismsg.delete(1000)); }
		let reportReason = pars.join(" ").slice(22);
		if (!input.member.hasPermission("MANAGE_MESSAGES")) return input.channel.send(`지금 뭐하려고 했냐뮤! <@${input.author.id}>?\n도로 리폿을 먹을수도 있다뮤!`);
		if (reportTo.hasPermission("MANAGE_MESSAGES")) return input.channel.send("뮤! 타깃의 권한이 같거나 더 높은 사람이다 뮤우~!\n도로 리폿을 먹을수도 있다뮤!");
		let Ricon = input.guild.iconURL;
		let kReportEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()}에서 리포트 됨`)
		.setDescription(`${input.createdAt}\n#리폿 @everyone`)
		.setThumbnail(Ricon)
		.setColor("#fb3030")
		.addBlankField()
		.addField("당사자", `${reportTo} (ID: ${reportTo.id})`)
		.addField("신고자", `${input.author} (ID: ${input.author.id})`)
		.addField("위치", input.channel)
		.addField("킥 사유", `${reportReason}.`);
		input.delete().catch((O_o)=>{});
		input.guild.systemChannel.send(kReportEmb);	
}

module.exports.help = {
	name: "리포트"
};
