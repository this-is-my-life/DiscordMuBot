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
	input.channel.send("입력 받을 값의 진수를 입력하세요 (2진수, 10진수, 16진수 지원)\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(q => q.delete(30000));
	input.channel.awaitMessages(filter, {
		max: 1,
		time: 30000
	}).then(collected => {
		let col1input = collected.first().content;
		if (col1input === "취소") { input.channel.send("취소되었습니다").then(q => q.delete(2000)); } else {
			input.channel.send("출력할 값의 진수를 입력하세요 (2진수, 10진수, 16진수 지원)\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다").then(q => q.delete(30000));
			input.channel.awaitMessages(filter, {
				max: 1,
				time: 30000
			}).then(collected => {
				let col2input = collected.first().content;
				if (col2input === "취소") { input.channel.send("취소되었습니다").then(q => q.delete(2000)); } else {
					input.channel.send(`${col2input}(진수)로 변환할 ${col1input}(진수) 입력!\n\"취소\"를 입력하거나 30초를 쓸때없이 기다리시면 뮤봇이 빡쳐서 취소할껍니다`).then(q => q.delete(30000));
					input.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					}).then(collected => {
						let colinput = collected.first().content;
						let colresult;
						if (col1input === "2" || col1input === "2진수" || col1input === "이진수" || col1input === "바이너리") {
							col1input = 2;
							if (col2input === "2" || col2input === "2진수" || col2input === "이진수" || col2input === "바이너리"){
								col2input = 2;
								colresult = colinput;
							} else if (col2input === "10" || col2input === "10진수" || col2input === "십진수"){
								col2input = 10;
								colresult = parseInt(colinput, 2);
							} else if (col2input === "16" || col2input === "16진수" || col2input === "십육진수" || col2input === "핵사"){
								col2input = 16;
								colresult = parseInt(colinput, 2).toString(16).toUpperCase();
							} else {
								colresult = "Error"
							}
	
						} else if (col1input === "10" || col1input === "10진수" || col1input === "십진수") {
							col1input = 10;
							if (col2input === "2" || col2input === "2진수" || col2input === "이진수" || col2input === "바이너리"){
								col2input = 2;
								if (Number(colinput).toString(2).substring(54)) {
									colresult = "overflowed";
								} else {
									colresult = Number(colinput).toString(2).substring(0, 54);
								}
							} else if (col2input === "10" || col2input === "10진수" || col2input === "십진수"){
								col2input = 10;
								colresult = colinput;
							} else if (col2input === "16" || col2input === "16진수" || col2input === "십육진수" || col2input === "핵사"){
								col2input = 16;
								colresult = colinput.toString(16).toUpperCase();
							}
	
						} else if (col1input === "16" || col1input === "16진수" || col1input === "십육진수" || col1input === "핵사") {
							col1input = 16;
							if (col2input === "2" || col2input === "2진수" || col2input === "이진수" || col2input === "바이너리"){
								col2input = 2;
								colresult = parseInt(colinput, 16).toString(10);
							} else if (col2input === "10" || col2input === "10진수" || col2input === "십진수"){
								col2input = 10;
								colresult = parseInt(colinput, 16);
							} else if (col2input === "16" || col2input === "16진수" || col2input === "십육진수" || col2input === "핵사"){
								col2input = 16;
								colresult = colinput;
							}
						}
						input.channel.send(`결과값: ${colresult}\n${col1input}진수에서 ${col2input}진수로 변환함`)
					})
				}
			})
		}
	})
}

module.exports.help = {
	name: "계산",
	description: "cacu"
}
