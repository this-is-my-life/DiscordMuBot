/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
// Discord.js Official Voice Source
	    if (input.member.voiceChannel) {
	      input.member.voiceChannel.join()
			  .then(connection => {
				  connection.playArbitraryInput("https://cdn.discordapp.com/attachments/514420864318701568/514421123623157790/Ohh.mp3");
	        })
	    } else {
	    	let Sekicon = input.guild.iconURL;
	    	let kSummonVoiceFail = new API.RichEmbed()
	    	.setThumbnail(Sekicon)
	    	.setColor(randomHexColor())
			.addField("어... 저기...", `${input.author}가 어디 있는지 찾을 수 없다뮤!!`);
	    	input.channel.send(kSummonVoiceFail);
	    }
}

module.exports.help = {
	name: "OHH"
}
