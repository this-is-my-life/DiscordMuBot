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
	const filter = m => m.author.id === input.author.id
	input.channel.send("입력 받을 값의 진수를 입력하세요 (2, 10, 16 지원)\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(this, err => this.delete(30000));
	input.channel.awaitMessages(filter, {
		max: 1,
		time: 30000
	}).then(collected => {
		const col1input = collected.content;
		if (col1input === "취소") { input.channel.send("취소되었습니다").then(this, err => this.delete(2000)); } else {
			input.channel.send("출력할 값의 진수를 입력하세요 (2, 10, 16 지원)\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(this, err => this.delete(30000));
			input.channel.awaitMessages(filter, {
				max: 1,
				time: 30000
			}).then(collected => {
				const col2input = collected.content;
				if (col2input === "취소") { input.channel.send("취소되었습니다").then(this, err => this.delete(2000)); } else {
					if (col1input === "2") {
						if (col2input === "2"){

						} else if (col2input === "10"){

						} else if (col2input === "16"){

						}

					} else if (col1input === "10") {
						if (col2input === "2"){

						} else if (col2input === "10"){

						} else if (col2input === "16"){

						}

					} else if (col1input === "16") {
						if (col2input === "2"){

						} else if (col2input === "10"){

						} else if (col2input === "16"){

						}
					}
					const cacuEmb = new API.RichEmbed()
					.setTitle(cacuResult)
					
				}
			})
		}
	})
}

module.exports.help = {
	name: "계산",
	description: "cacu"
}
