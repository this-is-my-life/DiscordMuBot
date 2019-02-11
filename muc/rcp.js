/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");

const bullets = ["가위", "바위", "보", "폭탄", "엿", "엄지", "OK", "파티!"]
const bulletsEmoji = [":v:", ":fist:", ":hand_splayed:", ":bomb:", ":middle_finger:", ":thumbsup:", ":okhand:", ":party:"]

module.exports.run = async (mu, input, pars) => {
    // 플레이어가 내민것은?
    let playerChose = Math.floor(Math.random * (bullets.length - 1));
    let playerSay = bullets[playerChose];
    let playerEmoji = bulletsEmoji[playerChose];
    // 뮤봇이 내민것은?
    let muChose = Math.floor(Math.random * (bullets.length - 1));
    let muSay = bullets[muChose];
    let muEmoji = bulletsEmoji[muChose];
    // Description
    let description = "";
    let result = "";

    if (playerSay === muSay) {
        result = "둘다, 무승부!";
        description = "아.. 저런... 같은게 나와서 노잼이 되버렸네...";

    // 파티
    } else if (playerSay === "파티!" || muSay === "파티!") {
        result = "둘다, 승리!";
        description = "파티! 둘다 이겼어!";
    
    // OK
    } else if (playerSay === "OK") {
        if (muSay === "엄지") {

        } else if (muSay === "엿") {

        } else if (muSay === "폭탄") {

        } else if (muSay === "보") {

        } else if (muSay === "바위") {

        } else if (muSay === "가위") {

        }

    // 엄지
    } else if (playerSay === "엄지") {
        if (muSay === "OK") {

        } else if (muSay === "엿") {

        } else if (muSay === "폭탄") {

        } else if (muSay === "보") {

        } else if (muSay === "바위") {

        } else if (muSay === "가위") {

        }
    
    // 엿
    } else if (playerSay === "엿") {
        if (muSay === "OK") {

        } else if (muSay === "엄지") {

        } else if (muSay === "폭탄") {

        } else if (muSay === "보") {

        } else if (muSay === "바위") {

        } else if (muSay === "가위") {

        }
    
    // 폭탄
    } else if (playerSay === "폭탄") {
        if (muSay === "OK") {

        } else if (muSay === "엄지") {

        } else if (muSay === "엿") {

        } else if (muSay === "보") {

        } else if (muSay === "바위") {

        } else if (muSay === "가위") {

        }
    
    // 보
    } else if (playerSay === "보") {
        if (muSay === "OK") {

        } else if (muSay === "엄지") {

        } else if (muSay === "엿") {

        } else if (muSay === "폭탄") {

        } else if (muSay === "바위") {

        } else if (muSay === "가위") {

        }
    
    // 바위
    } else if (playerSay === "바위") {
        if (muSay === "OK") {

        } else if (muSay === "엄지") {

        } else if (muSay === "엿") {

        } else if (muSay === "폭탄") {

        } else if (muSay === "보") {

        } else if (muSay === "가위") {

        }
    
    // 가위
    } else if (playerSay === "보") {
        
        if (muSay === "OK") {

        } else if (muSay === "엄지") {

        } else if (muSay === "엿") {

        } else if (muSay === "폭탄") {

        } else if (muSay === "보") {

        } else if (muSay === "바위") {

        }
    } else {
        result = "둘다, 무승부!";
        description = "뮤봇 개발자가 귀찮아서 기능을 안넣었나 봅니다";
    }

    let rcpEmb = new API.RichEmbed()
    .setAuthor(playerEmoji + input.author.username + " vs " + mu.user.username + muEmoji, input.author.displayAvatarURL)
    .setTitle(result)
    .setDescription(description);
    input.channel.send(rcpEmb)
}

module.exports.help = {
	name: "가위바위보",
    description: "가바보"
};
