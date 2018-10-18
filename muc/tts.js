/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
let mute = require("../Saved/UsersCoin.json");

module.exports.run = async (mu, input, pars) => {
        let sayWhat = pars.join(" ").slice(0);
        if (input.member.voiceChannel) {
            TTS.saveMP3(sayWhat, `${input.id}.mp3`, function(err, absoluteFilePath){
                setTimeout(function() {
                input.member.voiceChannel.join()
                .then(connection => {
                    const dispatcher = connection.playFile(`${absoluteFilePath}`);
                dispatcher.on('end', () => {
                    setTimeout(function() {
                        input.member.voiceChannel.leave();
                    }, 3000);
                })
                })
            }, 3000);
            });
            let eSayVoice = new API.RichEmbed()
            .setColor(input.member.displayHexColor)
            .addField(`Mu said ${sayWhat}!`, `to ${input.author}`);
            input.channel.send(eSayVoice);
        } else {
            let eSayVoiceFail = new API.RichEmbed()
            .setColor(input.member.displayHexColor)
            .addField("Hey! Wait!", "You need to join a voice channel first!");
            input.channel.send(eSayVoiceFail);
        }
}

module.exports.help = {
	name: "t"
}
