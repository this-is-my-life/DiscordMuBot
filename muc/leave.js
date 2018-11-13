/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require('random-hex-color');

module.exports.run = async (mu, input, pars) => {
        if (input.member.voiceChannel) {
            input.member.voiceChannel.leave();
            let eEscapeVoice = new API.RichEmbed()
            .setColor(randomHexColor())
            .addField("Press ESC key To Escape Voice Channel", "μBot> ESC\nμBot Prest ESC...");
            input.channel.send(eEscapeVoice);
    } else {
        let eEscapeVoiceFail = new API.RichEmbed()
        .setColor(randomHexColor())
        .addField("Hey! Wait!", "You need to join a voice channel first!");
        input.channel.send(eEscapeVoiceFail);
    }
};

module.exports.help = {
	name: "l"
}
