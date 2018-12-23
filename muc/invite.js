/*
    μBot v7.0 Command.
    ---------------------
    PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
    Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
    
    * Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    let avat = mu.user.displayAvatarURL;
    let emb1 = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`μBot Invite Link!`)
        .setURL("https://discordapp.com/api/oauth2/authorize?client_id=458625370334429184&permissions=2146958839&redirect_uri=http%3A%2F%2Fmubotapi.dothome.co.kr%2F%23discord&scope=bot")
        .setDescription("Click the Link for invite μBot!")
        .setThumbnail(avat);
    let emb2 = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`Bot Developers' Discord Server!`)
        .setURL("https://discord.gg/73rVVz5")
        .setDescription("Click the Link for Get Support!")
        .setFooter("Thanks For Using Our μBot!", avat);
    input.channel.send(emb1);
    input.channel.send(emb2);
}

module.exports.help = {
    name: "inv"
};