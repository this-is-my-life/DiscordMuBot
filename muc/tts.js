/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require('random-hex-color');
const googleTTS = require('google-tts-api');

module.exports.run = async (mu, input, pars) => {
        let sayWhat = pars.join(" ").slice(0);
        if (input.member.voiceChannel) {
                setTimeout(function() {
                input.member.voiceChannel.join()
                .then(connection => {
                    googleTTS(sayWhat, 'ko-KR', 1)   // speed normal = 1 (default), slow = 0.24
                    .then(function (url) {
                        input.channel.send(url);
                    });
                    const dispatcher = connection.playFile(`${absoluteFilePath}`);
                    setTimeout(function() {
                        input.member.voiceChannel.leave();
                    }, 3000);
            }, 3000);
            });
            let eSayVoice = new API.RichEmbed()
            .setColor(randomHexColor())
            .addField(`Mu said ${sayWhat}!`, `to ${input.author}`);
            input.channel.send(eSayVoice);
        } else {
            let eSayVoiceFail = new API.RichEmbed()
            .setColor(randomHexColor())
            .addField("Hey! Wait!", "You need to join a voice channel first!");
            input.channel.send(eSayVoiceFail);
        }
}

module.exports.help = {
	name: "t"
}
