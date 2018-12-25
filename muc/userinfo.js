/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
		let user = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		let avata = user.displayAvatarURL;
		let eMyInfo = new API.RichEmbed()
		.setTitle(`${user.username} Infomation!`)
		.setDescription(`to. Someone!`)
		.setThumbnail(avata)
		.setColor(randomHexColor())
		.addBlankField()
		.addField("User Name", user.username)
		.addField("User Display Name", user.displayName)
		.addField("User Discriminator", user.discriminator)
		.addField("User Tag", user.tag)
		.addField("User ID", user.id)
		.addField("User Status", user.presence.status)
		.addField("User Playing...", user.presence.game)
		.addField("User Avatar URL", user.displayAvatarURL)
		.addField("User Created", user.createdAt)
		input.channel.send(eMyInfo);
};

module.exports.help = {
	name: "u"
};
