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
    let { body1 } = await superagent
        .get(`https://api.nasa.gov/planetary/apod?api_key=GpELYI28U6YMlWtNjDcF5IOunjRi9ZIFPJcTHDdo`);
    if (!body1.media_type === "image" && body1.service === "v1") { return input.channel.send("NASA API Error!"); }
    let eNasa = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle(`Space, HERE! (Click Here to See HD Image)`)
        .setURL(body1.hdurl)
        .setDescription(`Astronomy Picture of the Day (오늘의 우주)`)
        .addField(body1.title, body1.explanation)
        .setImage(body1.url)
        .setFooter("Powered by nasa.gov - Astronomy Picture of the Day");
    input.channel.send(eNasa);
}

module.exports.help = {
    name: "space",
    description: "하늘보기"
}
