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
    let fightFirst = input.mentions.users.first() || input.guild.members.get(pars[0]) || input.author;
    let fightLast = input.mentions.users.last() || input.author;
    superagent.get(`https://nekobot.xyz/api/imagegen?type=whowouldwin&user1=${fightFirst.displayAvatarURL}&user2=${fightLast.displayAvatarURL}`)
    .then(res => {
        let FigEmb = new API.RichEmbed()
        .setImage(res.body.message)
        .setColor(randomHexColor())
        .setFooter("Powered by nekobot.xyz");
        input.channel.send(FigEmb);
    }).catch(err => { if (err) console.log(err)});
}

module.exports.help = {
    name: "fight",
    description: "누가이길까"
}