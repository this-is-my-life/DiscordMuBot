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
    superagent.get("https://nekobot.xyz/api/image?type=neko")
    .then((res) => {
        let kanEmb = new API.RichEmbed()
            .setColor(randomHexColor())
            .setTitle("Nekos, HERE!")
            .setURL(res.body.message)
            .setDescription(`${input.author} said "Nyan?"`)
            .setImage(res.body.message)
            .setFooter("Powered by nekobot.xyz");
        input.channel.send(kanEmb);
    });
};

module.exports.help = {
    name: "네코",
    description: "nk"
};
