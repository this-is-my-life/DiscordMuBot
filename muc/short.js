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
    let say = pars.join(" ").slice(0);
    superagent.post("https://api-ssl.bitly.com/v4/bitlinks")
    .set('Content-Type', 'application/json')
    .send({
        "long_url" : say
    })
    .then((res) => {
        let shortEmb = new API.RichEmbed()
        .setTitle(res.body.link)
        .setColor(randomHexColor())
        .setFooter("Powered by bitly.com");
        input.channel.send(shortEmb);
    }).catch((err) => { if (err) { console.log(err); }});
};

module.exports.help = {
    name: "단축",
    description: "url"
};