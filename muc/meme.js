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
    let { body } = await superagent
    .get("https://api-to.get-a.life/meme");
    let eMeme = new API.RichEmbed()
    .setColor(randomHexColor())
    .setTitle("MEMEs, HERE!")
    .setURL(body.url)
    .setDescription(`${input.author} said\n"${body.text}"`)
    .setImage(body.url)
    .setFooter("Powered by api-to.get-a.life");
    input.channel.send(eMeme);
};

module.exports.help = {
    name: "dog",
    description: "woof"
};
