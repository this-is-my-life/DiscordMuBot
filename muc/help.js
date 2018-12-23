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
			"description": "**μ's Sites: **[PMH Studio Official Site](http://pmhstudio.co.nf) ● [AI Training Site](http://mubotapi.dothome.co.kr) ● [Github Repo](https://github.com/PMHStudio/DiscordMuBot)\n\n\nDo you wanna **Invite μBot**? [**Click Here!**](https://discordapp.com/oauth2/authorize?client_id=458625370334429184&permissions=2146958839&redirect_uri=http%3A%2F%2Fmubotapi.dothome.co.kr%2F%23discord&scope=bot)\nDo you wanna **get support**? [**Click Here!**](https://discordapp.com/invite/73rVVz5)\n\nPMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆\n　　　　　　　　　　　　　　　　- Github Repo Description\n\n**Commands\n────────────**",
			"color": 7506394,
			"footer": {
				"text": "Thanks For Using Our μBot!",
				"icon_url": "https://cdn.discordapp.com/attachments/521187311761752087/525659803637383168/Bot_Kakao_Profile.jpg"
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
					"name": "Server Management Commands",
					"value": "User Report __*(Aliase: mu!r)*__ **[Deprecated]**```fix\nmu!report <@Target> [Reason]```User Warn **[New!]**```fix\nmu!warn <@Target> <Reason>```User Kick __*(Aliase: mu!k)*__```fix\nmu!kick <@Target> [Reason]```User Ban __*(Aliase: mu!b)*__```fix\nmu!ban <@Target> [Reason]```",
					"inline": true
				},
				{
					"name": "Voice Channel Commands",
					"value": "Join Voice Channel __*(Aliase: mu!j)*__```fix\nmu!join```Leave Voice Channel __*(Aliase: mu!l)*__```fix\nmu!leave```TTS in Voice Channel __*(Aliase: mu!t)*__```fix\nmu!tts <Text>```",
					"inline": true
				},
				{
					"name": "Lyrics Search Command",
					"value": "Lyrics Search __*(Aliase: mu!ly)*__```fix\nmu!lyrics <Name>```**μBot Basic Command**\nPing Pong OㅅO __*(Aliase: mu!p)*__```fix\nmu!ping```Powered OㅅO```fix\nmu!powered```",
					"inline": true
				},
				{
					"name": "Infomation Commands",
					"value": "My User Info __*(Aliase: mu!m)*__```fix\nmu!myinfo```Server Info```fix\nmu!serverinfo```μBot Build Info```fix\nmu!buildinfo```",
					"inline": true
				},
				{
					"name": "And More!",
					"value": "μBot Info __(Cool Aliase)__```fix\nmu! (Only Prefix)```Github User Info __*(Aliase: mu!gh)*__```fix\nmu!github```NASA Picture of the Day```fix\nmu!nasa```",
					"inline": true
				},
				{
					"name": "Messaging Commands",
					"value": "Fast React Tool __*(Aliase: mu!rec)*__```fix\nmu!react <@Target>```Say! **[Use Careful]**```fix\nmu!say <Text>```Say And Delete! **[Need Permission]**```fix\nmu!sayd <Text>```",
					"inline": true
				},
				{
					"name": "ImageGen Commands",
					"value": "DDLC Image Generator```fix\nmu!DDLC```Captcha Image Generator```fix\nmu!cap <@Target>```Fight Image Generator```fix\nmu!win <@1> <@2>```",
					"inline": true
				},
				{
					"name": "Random Image Commands",
					"value": "Cats!```fix\nmu!meow```Dogs!```fix\nmu!woof```Memes!```fix\nmu!meme```Cuteeeeee!```fix\nmu!shibe```",
					"inline": true
				},
				{
					"name": "And More! & NSFW",
					"value": "Anime Nekos!```fix\nmu!neko```Loli Dragon```fix\nmu!kanna```R-19 **[NSFW]**```fix\nmu!hentai```R-17 **[NSFW]**```fix\nmu!lewd```",
					"inline": true
				},
				{
					"name": "MuteCoin Commands",
					"value": "MuteCoin Bank```fix\nmu!mutecoin```",
					"inline": true
				},
				{
					"name": "CasiMu Commands",
					"value": "Slot Machine!```fix\nmu!dobak```",
					"inline": true
				},
				{
					"name": "ETC",
					"value": "Caculator!```fix\nmu!cacu```",
					"inline": true
				},
				{
					"name": "???",
					"value": "Mu! Mu! Mu!```fix\nmu!mu!```",
					"inline": true
				}
			]
		});
	input.author.send(helpemb);
	input.channel.send("See Your DM")
}

module.exports.help = {
	name: "h"
};
