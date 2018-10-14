/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
		// Discord.js Official Voice Source
	    if (input.member.voiceChannel) {
	      input.member.voiceChannel.join()
	        .then(connection => { 
	        	let Sicon = input.guild.iconURL;
	        	let eSummonVoice = new API.RichEmbed()
	        	.setThumbnail(Sicon)
	        	.setColor(input.member.displayHexColor)
	        	.addField(`Bam!`, `μBot is ${input.member.voiceChannel}, ${input.author}~♪`);
	        	input.channel.send(eSummonVoice);
	        })
	        .catch(console.log);
	    } else {
	    	let Seicon = input.guild.iconURL;
	    	let eSummonVoiceFail = new API.RichEmbed()
	    	.setThumbnail(Seicon)
	    	.setColor(input.member.displayHexColor)
	    	.addField("Wait!", "You need to join a voice channel first!");
	    	input.channel.send(eSummonVoiceFail);
	    }
}

module.exports.help = {
	name: "join"
	alians: "j"
}
