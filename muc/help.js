/*
	μBot v5.0 Command: Command Book. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {
	const helpemb = new API.RichEmbed({
		"title": "Do you wanna view μBot's :regional_indicator_c::o2::regional_indicator_d::regional_indicator_e:?　:arrow_left: Click Here!",
  		"description": "Copyright (c) 2018. PMH Studio / PMH & WSF. MIT Licenced.\n\n\n",
  		"url": "https://github.com/PMHStudio/DiscordMuBot/tree/%CE%BCBot-ver5",
  		"color": 7506394,
  		"timestamp": "2018-06-19T04:33:13.297Z",
  		"footer": {
  		  	"icon_url": "https://images-ext-1.discordapp.net/external/Ptv3hyLB2p7wVWbC7iKUMxBoyhW-g2i__26OzuWFvgo/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/458625370334429184/c0e1149749f9c740de6255432c50a70c.png",
    		"text": "Thanks for using Our μBot!"
  		},
  		"author": {
    		"name": "Discord μBot (v.5) Commands!",
    		"url": "https://discordapp.com",
    		"icon_url": "http://mubotapi.dothome.co.kr/images/%CE%BCBot%20Kakao%20Profile.jpg"
  		},
  		"fields": [
    		{
      			"name": "Server(Guild) Manage",
      			"value": ":information_source:  Server Infomations.```fix\nmu!serverinfo   (or mu!s)```\n\n:speaker: Report Member. (Request Permission: Manage Messages.)\n```fix\nmu!report <@Mention Member> [Reason]   (or mu!r)\n```\n\n:boom:  Kick Member. (Request Permission: Kick Members.)\n```fix\nmu!kick <@Mention Member> [Reason]   (or mu!k)```\n\n:no_entry:  BAN Member. (Request Permission: Ban Members.)\n```fix\nmu!ban <@Mention Memver> [Reason]   (or mu!b)```\n"
    		},
    		{
      			"name": "Voice Channel Commands",
      			"value": ":triangular_flag_on_post:  Join Voice Channel.\n```fix\nmu!join   (or mu!j)```\n\n:speaking_head:  TTS in Voice Channel.\n```fix\nmu!tts <Text>   (or mu!t)\n```\n\n:hand_splayed:   Leave Voice Channel.\n```fix\nmu!leave   (or mu!l)\n```\n",
     		 	"inline": true
    		},
    		{
      			"name": "μBot Info & Credit",
      			"value": ":raising_hand:  μBot Info & Credit.\n```fix\nmu!(No Parameter)\n```\n\n:question:  μBot Command Book & Bug Report.\n```fix\nmu!help   (or mu!h)\n```\n\n:ping_pong:   Ping!\n```fix\nmu!ping   (or mu!p)\n```",
      			"inline": true
    		},
    		{
      			"name": "and....?",
      			"value": "```fix\nmu!woof```",
      			"inline": true
    		}
  		]
	});
	input.channel.send(helpemb);
}

module.exports.help = {
	name: "help"
  alians:"h"
}
