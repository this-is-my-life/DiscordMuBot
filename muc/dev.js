/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");
const superagent = require("superagent");

module.exports.run = async (mu, input, pars) => {
    if (input.author.id === process.env.owner) {
        const filter = (m) => m.author.id === input.author.id;
		let say = pars.slice(1).join(" ");
		let cmd = pars[0];
		if (cmd === "강종") {
			input.channel.send("이 명령어를 사용시 뮤봇이 순식간에 완전종료되며 사람들에게 민폐를 끼칠 수 있습니다\n관리자로서 이를 감수하고도 수행하겠습니까?\n(히로쿠를 재시작하거나 깃헙 코미트를 하는것으로 다시 실행 할 수 있습니다 ~~잘 선택해라...~~) [Y/N]")
			input.channel.awaitMessages(filter, {
				max: 1,
				time: 10000
			}).then((collected) => {
				let Verifyinput = collected.first().content;
				collected.delete();
				if (Verifyinput === "y") {
					input.channel.send("장비를 정지합니다.\n정지하겠습니다.\n안 되잖아?\n어? 저, 정지가 안 돼. 정지시킬 수가 없어, Ang안-돼!\n\n이런 일이 일어날 것 같은 조짐을 느꼈지.\n하지만 행정관이 내 말을 듣지 않았어.\n오늘은 중요한 날이야, 프리맨?\n모든 게 제대로 되어 가는군.\n\n난 더 이상 감당할 수 없어.\n이런 걸 전에 본 적이 있나?\n안 돼! 그쪽으로 가지 마!\n\n난 정말 모르겠어.\n여기서 과연 나갈 수가 있을까?\n난 여기서 빠져나가야 되겠어.\n아하이구 맙소사, 우린 이제 죽었어!\n안 돼! 죽고 싶지 않아.\n\n이건 미친 짓이야, 나는 여기서 나가겠어.\n안 되잖아?\n으아아아아아아아~")
					mu.disconnect();
				} else {
					input.channel.send("역시, 아닐쭐 알았지...");
				}
			});
		} else if (cmd === "이벤트") {
			if (!say) {
				mu.user.setActivity(`Messages | ${prefix}help`, {type: "WATCHING"});
			}
			mu.user.setActivity(say, { url: "https://www.twitch.tv/pmhstudio", type: "STREAMING" });
		} else if (cmd === "그린") {
			mu.user.setStatus("online");
		} else if (cmd === "옐로") {
			mu.user.setStatus("idle");
		} else if (cmd === "레드") {
			mu.user.setStatus("dnd");
		} else if (cmd === "그레이") {
			mu.user.setStatus("invisible");
		}
	} else {
		input.channel.send(`<@${input.author.id}>\n어헛! 어디서 감히 관리자 행세를!`);
	}
};

module.exports.help = {
	name: "관",
	description: "관리자의권한으로"
};
