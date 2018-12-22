/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars, prefix) => {
    const helpemb = new API.RichEmbed({
		  "title": "μBot's Command Book",
		  "description": "**μ's Sites: **[PMH Studio 방문하기~](http://pmhstudio.co.nf) ● [AI 날뛰는곳~](http://mubotapi.dothome.co.kr) ● [깃!헙! 레포!](https://github.com/PMHStudio/DiscordMuBot)\n\n\n**Commands\n────────────**",
		  "color": 7506394,
		  "footer": {
			"text": "이 커멘드 북은 당신이 제작하였습니다"
		  },
		  "thumbnail": {
			"url": "https://cdn.discordapp.com/attachments/521187311761752087/525245345849147393/Bot_Profile.png"
		  },
		  "author": {
			"name": input.author.username,
			"icon_url": input.author.displayAvatarURL
		  },
		  "fields": [
			{
			  "name": "서버 관리 명령어",
			  "value": "**누군간 관리하겠지....**\n\n`유저 신고 : [mu!리폿 <@타겟>]`\n`유저 경고 : [mu!경고 <@타겟>]`\n`유저 킥 : [mu!킥 <@타겟>]`\n`유저 벤 : [mu!벤 <@타겟>]`",
			  "inline": true
			},
			{
			  "name": "음성채널 명령어",
			  "value": "**뮤봇! 너의목소리를 들려줘!**\n\n`음성채널 접속 : [mu!따라와]`\n`음성채널 나가기 : [mu!저리가]`\n`음성 듣기 : [mu!tts]`",
			  "inline": true
			},
			{
			  "name": "μBot 관련 명령어",
			  "value": "**μBot이 미쳐 날뛰고있습니다**\n\n` μBot정보, 크레딧 : [mu!]`\n` μBot초대 : [mu!invite]`\n`μBot 서버 핑 : [mu!핑]`\n`μBot Heroku : [mu!빌드정보]`",
			  "inline": true
			},
			{
			  "name": "유저, 서버정보 확인 명령어",
			  "value": "**서버가 중지되었습니다!**\n\n` 내정보 확인 : [mu!내정보]`\n`서버 확인 : [mu!서버정보]`",
			  "inline": true
			},
			{
			  "name": "개발을위한 명령어",
			  "value": "**개발자 is Online!**\n\n` 깃헙 회원정보 : [mu!깃헙]`\n`TesWiki : [mu!테스위키]`\n`계산기 : [mu!dec]`\n`스팀 : [mu!스팀]`",
			  "inline": true
			},
			{
			  "name": "메세지 관련 명령어",
			  "value": "**[삐빅] 이 채널에는 듣는이가 없습니다.**\n\n`이모지 추가 : [mu!반응 <@타겟>]`\n`μBot 말 대신하기 : [mu!따라해 <텍스트>]`\n`μBot 말 대신하기 : [mu!지우고따라해 <텍스트>]`",
			  "inline": true
			},
			{
			  "name": "재미를 위한 명령어",
			  "value": "**이것은 정말로 재미있는 명령어들! [뮤봇이 책임진다!!!]**\n\n` 당신은 로봇입니꽈? : [mu!켑챠 <@타겟>]`\n`오 카지뮤군요! 도박을 좀 즐겨볼까요? : [mu!도박]`\n`흐음.. DDLC 스팀에 방문하시길.... : [mu!DDLC]`\n`누군가의 얼굴이 아이폰으로! : [mu!아이폰 <@타겟>]`\n`로리 드레곤을 당신에게! : [mu!카무이]`\n`흐음... 개발자도 모르는 명령어! : [mu!meme]`\n`당신은 고양이에게 빠져들고있습니다.... : [mu!meow]`\n`마음을 비행기처럼 조종해볼까요? : [mu!mind <텍스트>]`\n`나는 하늘이조아~ 하늘보기! : [mu!하늘보기]`\n`네코네코니~ : [mu!neko]`\n`어디선가 시바의 기운이 느껴진다시바... : [mu!shibe]`\n` 둘중 하나는 이긴다! : [mu!win <@1> <@2>]`\n` 개짓는소리좀 안나게해라! : [mu!woof]`",
			  "inline": true
			},
			{
			  "name": "어.... 크흠...",
			  "value": "**크흠... NSFW를 켜시는걸 추천드립니다**\n\n` 당신은 더 파격적인걸 원하는군요!? : [mu!야짤]`\n`17세인가요? 그럼 추천드립니다! : [mu!보일듯말듯]`",
			  "inline": true
			}
		  ]
		});
	input.author.send(helpemb);
	input.channel.send("개인 DM으로 커멘드 북을 전송했습니다!\n또한 뮤봇 토스트 기능의 대하여 알아보시려면 'mu!토스트'라고 입력해주세요");
}

module.exports.help = {
    name: "도움말"
}
