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
    superagent.get(`https://mubotdb.herokuapp.com/action/coinflip/${input.author.id}/${mu.user.id}`)
    .then((res) => {
        let coinFlipEmb = new API.RichEmbed()
        .setTitle(res.body.coinMent1)
        .setAuthor(input.author.username)
        .setColor(randomHexColor())
        .setDescription(res.body.coinMent2)
        input.channel.send(coinFlipEmb);
    });
};

module.exports.help = {
  name: "동전던지기",
  description: "동전"
};
