/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const request = require("request");

module.exports.run = async (mu, input, pars) => {
        request('https://random.dog/woof', function (e, r, woofurl) {
            let wooflast = woofurl[woofurl.length-1];
            if (wooflast === "4") {
                input.channel.send("Woof!");
            } else {
                let eDog = new API.RichEmbed()
                .setColor(input.member.displayHexColor)
                .setTitle(`Dogs, HERE!`)
                .setURL(`https://random.dog/${woofurl}`)
                .setDescription(`${input.author} said " ${i}!"`)
                .setImage(`https://random.dog/${woofurl}`)
                .setFooter("Powered by random.dog");
                input.channel.send(eDog);
            }
        });
}

module.exports.help = {
	name: "w"
}
