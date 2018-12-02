/*
    μBot v5.0 Command: Ping. 
    ---------------------
    PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
    Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
    
    * Requests Node.js & Discord.js
*/

const API = require("discord.js");
const request = require("request");
const superagent = require("superagent");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars, prefix , nasa) => {
    let { body } = await superagent
        .get(`https://api.nasa.gov/planetary/apod?api_key=GpELYI28U6YMlWtNjDcF5IOunjRi9ZIFPJcTHDdo`);
    let eNasa = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`Space, HERE! (Click Here to See HD Image)`)
        .setURL(body.hdurl)
        .setDescription(`Astronomy Picture of the Day (오늘의 우주)`)
        .addField(body.title, body.explanation)
        .setImage(body.url)
        .setFooter("Powered by nasa.gov - Astronomy Picture of the Day");
    input.channel.send(eNasa);
}

module.exports.help = {
    name: "space",
    description: "하늘보기"
}
