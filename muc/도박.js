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
    superagent.get(`https://mubotdb.herokuapp.com/action/DoBak/${input.author.id}/${mu.user.id}`)
    .then((res) => {
        let dobakEmb = new API.RichEmbed()
        .setTitle("도박결과:")
        .setAuthor(input.author.username)
        .setColor(randomHexColor())
        .setDescription(`▶ ${res.body.Slot1} ${res.body.Slot2} ${res.body.Slot3}`)
        .setFooter(res.body.SlotResult);
        input.channel.send(dobakEmb);
    });
};

module.exports.help = {
  name: "도박",
  description: "가즈아"
};
