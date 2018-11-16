/*
	μBot v5.0 Command: Command Book. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars, prefix) => {
    const khelpemb = new API.RichEmbed({
            "title": "뮤가 어케돌아가는지 알고싶다...면? 크으을리익!",
            "description": "Copyright (c) 2018. PMH Studio / PMH & WSF. MIT Licenced.\nMIT니까 이걸로 뭘하든 상관없스 (단, 책임안짐)\n\n\n",
            "url": "https://github.com/PMHStudio/DiscordMuBot/tree/%CE%BCBot-ver5",
            "color": 7506394,
            "timestamp": "2018-06-19T04:33:13.297Z",
            "footer": {
                "icon_url": "https://images-ext-1.discordapp.net/external/Ptv3hyLB2p7wVWbC7iKUMxBoyhW-g2i__26OzuWFvgo/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/458625370334429184/c0e1149749f9c740de6255432c50a70c.png",
                "text": "Thanks for using Our μBot!"
            },
            "author": {
                "name": "두유 원썸 도움?",
                "icon_url": "http://mubotapi.dothome.co.kr/images/%CE%BCBot%20Kakao%20Profile.jpg"
            },
            "fields": [
                {
                    "name": "아 근데, 임베드 적기 귀찮...",
                    "value": `걍 \`\`${prefix}help\`\`쳐서 영어 도움말 보삼\n\n\n`
                },
                {
                    "name": "아아ㅏㅇ 잠만,",
                    "value": `\`\`\`fix\n${prefix}(하고싶은말)\`\`\`\n하면 __**인공지능**__됨!`
                }
            ]
        });
    input.channel.send(khelpemb);
}

module.exports.help = {
    name: "도움말"
}
