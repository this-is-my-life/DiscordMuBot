/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const fs = require("fs");
const randomHexColor = require('random-hex-color');

module.exports.run = async (mu, input, pars) => {
    if(!input.member.hasPermission("MANAGE_SERVER")) return input.channel.send(`<@${input.author.id}>! 권한이 부족하다뮤!`);
    if(!args[0] || args[0 == "help"]) return input.channel.send("Usage: mu!프리픽스 <새 프리픽스>");

    let prefixes = JSON.parse(fs.readFileSync("./Saved/ServersPrefix.json", "utf8"));

    prefixes[input.guild.id] = {
        prefixes: pars[0]
    };

    fs.writeFile("./Saved/ServersPrefix.json", JSON.stringify(prefixes));

    let prefixEmb = new Discord.RichEmbed()
    .setColor(randomHexColor())
    .setTitle("프리픽스 설정완료!")
    .setDescription(`이 서버의 프리픽스: ${pars[0]}`);

    input.channel.send(prefixEmb);
}

module.exports.help = {
	name: "프픽"
}
