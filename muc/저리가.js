/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
        if (input.member.voiceChannel) {
            input.member.voiceChannel.leave();
            let kEscapeVoice = new API.RichEmbed()
            .setColor(input.member.displayHexColor)
            .addField("ESC 버튼을 눌러 보이스 채널을 나가십시오", "뮤봇> ESC\n뮤봇님이 ESC버튼을 눌렀습니다... 뮤↗");
            input.channel.send(kEscapeVoice);
    } else {
        let kEscapeVoiceFail = new API.RichEmbed()
        .setColor(input.member.displayHexColor)
        .addField("어... 저기...", "뮤가 어디있는지 잘 몰라서 그런데 쫌 들어와서 알려주라뮤 ㅠㅠ");
        input.channel.send(kEscapeVoiceFail);
    }
}

module.exports.help = {
	name: "나가기"
}
