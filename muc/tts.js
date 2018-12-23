/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");
const request = require("request");

module.exports.run = async (mu, input, pars) => {
        let sayWhat = pars.join(" ").slice(0);
        if (input.member.voiceChannel) {
                input.member.voiceChannel.join()
                .then(connection => {
                    request.post('https://soundoftext.com/sounds', {
                        json: {
                            "engine": "Google",
                            "data": {
                                "text": "Hello, world",
                                "voice": "ko-KR"
                            }
                        }
                    }, (error, res, body) => {
                        if (error) { return input.channel.send("Error: " + error); }
                        const dispatcher = connection.playFile("https://soundoftext.nyc3.digitaloceanspaces.com/" + body.id +"/");
                    })
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
};
