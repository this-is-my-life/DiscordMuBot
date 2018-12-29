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
		let pickedUser = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		let avata = pickedUser.displayAvatarURL;
		let eMyInfo = new API.RichEmbed()
		.setTitle(`${pickedUser.user.username} Infomation!`)
		.setDescription("to. Someone!")
		.setThumbnail(avata)
		.setColor(randomHexColor())
		.addBlankField()
		.addField("User Name", pickedUser.user.username)
		.addField("User Display Name", pickedUser.displayName)
		.addField("User Discriminator", pickedUser.user.discriminator)
		.addField("User Tag", pickedUser.user.tag)
		.addField("User ID", pickedUser.id)
		.addField("User Status", pickedUser.presence.status)
		.addField("User Playing...", pickedUser.presence.game)
		.addField("User Avatar URL", pickedUser.user.displayAvatarURL)
		.addField("User Created", pickedUser.user.createdAt);
		input.channel.send(eMyInfo);
};

module.exports.help = {
	name: "u"
};
