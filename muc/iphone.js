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
    let iphoneUser = input.mentions.users.first() || input.guild.members.get(pars[0]) || input.author;
    superagent.get(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${iphoneUser.displayAvatarURL}`)
    .then(res => {
        let iPhonEmb = new API.RichEmbed()
        .setImage(res.body.message)
        .setColor(randomHexColor())
        .setFooter("Powered by nekobot.xyz", avat);
        input.channel.send(iPhonEmb);
    }).catch(err => { if (err) console.log(err)});
}

module.exports.help = {
    name: "아이폰",
    description: "iph"
}