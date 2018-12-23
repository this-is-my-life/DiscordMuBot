/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    let { body } = await superagent
        .get(`https://api-to.get-a.life/dogimg`);
    let eMeme = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`Dogs, HERE!`)
        .setURL(body.link)
        .setDescription(`${input.author} said "woof!"`)
        .setImage(body.link)
        .setFooter("Powered by dog.ceo");
    input.channel.send(eMeme);
};

module.exports.help = {
    name: "dog",
    description: "inu"
};
