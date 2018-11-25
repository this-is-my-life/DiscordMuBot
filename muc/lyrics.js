/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    let songs = pars.join(" ").slice(0);
    let { body } = await superagent
    .get(`https://some-random-api.ml/lyrics?title=${songs}`);
    if (body.error) {
        input.channel.send(`body.error`);
    } else {
        let eLyrics = new API.RichEmbed()
            .setColor(randomHexColor())
            .setTitle(`Lyrics, HERE!`)
            .setURL(body.links.genius)
            .setDescription(`"${body.title}" -${body.author}`)
            .setThumbnail(`${body.thumbnail.genius}`)
            .setFooter("Powered by some-random-api.ml");
        input.channel.send(`${body.lyrics}\n[Lyric End]`);
        input.channel.send(eLyrics);
    }
}

module.exports.help = {
    name: "ly",
    description: "가사"
}
