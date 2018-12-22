/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const randomHexColor = require('random-hex-color');
const google = require("google");

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
    let GoogleEmb = new API.RichEmbed()
    .setAuthor(say)
    .setTitle("Google Search Result");
    google.resultsPerPage = 5;
    google(say, function (err, res) { 
        if (err) console.log(err);
        for (let count = 0; count < res.links.length; count++) {
            let result = res.links[count];
            if (!result.title) {
                GoogleEmb.setDescription(`[${result.description}](${result.href})`);
            }
            GoogleEmb.addField(result.title, `[${result.description}](${result.href})`);
        }
        GoogleEmb.setColor(randomHexColor())
        .setURL(`https://google.com/search?q=${encodeURI(say)}`);
        input.channel.send(GoogleEmb);
    })
}

module.exports.help = {
    name: "g",
    description: "search"
}
