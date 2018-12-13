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
    if (!input.channel.nsfw) {
        input.channel.send("Wait! What? You are Hentai! ~~(Just.. Turn on NSFW..)~~ \n에.. 잠만... 헤에? 넌 변태닷! ~~(NSFW를 틀면 보일지도...?)~~");
    } else {
        superagent.get(`https://nekobot.xyz/api/image?type=hentai`)
        .then(res => {
            let hentaiEmb = new API.RichEmbed()
            .setImage(res.body.message)
            .setColor(randomHexColor())
            .setFooter("Powered by nekobot.xyz");
            input.channel.send(hentaiEmb);
        }).catch(err => { if (err) console.log(err)});
    }
}

module.exports.help = {
    name: "헨타이",
    description: "nsfw"
}
