/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require('random-hex-color');

module.exports.run = async (mu, input, pars) => {
    let { body } = await superagent
        .get(`https://api-to.get-a.life/dogimg`);
    let { body1 } = await superagent
        .get(`https://api-to.get-a.life/dogfact`);
    let eMeme = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`MEMEs, HERE!`)
        .setURL(body.link)
        .setDescription(`${input.author} said "${body1.fact}"`)
        .setImage(body.link)
        .setFooter("Powered by dog.ceo");
    input.channel.send(eMeme);
}

module.exports.help = {
    name: "dog",
    description: "inu"
}
