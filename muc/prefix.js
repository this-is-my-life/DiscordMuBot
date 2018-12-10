/*
	μBot v7.0 Command.
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");
const fs = require("fs");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    if(!input.member.hasPermission("MANAGE_SERVER")) {return input.channel.send(`<@${input.author.id}> has NO PERMISSION: MANAGE_SERVER`);}
    if(!pars[0] || par[0 == "help"]) {return input.channel.send("Usage: mu!prefix <desired prefix here>");}

    let prefixes = JSON.parse(fs.readFileSync("./Saved/ServersPrefix.json", "utf8"));

    prefixes[input.guild.id] = {
        prefixes: pars[0]
    };

    fs.writeFile("./Saved/ServersPrefix.json", JSON.stringify(prefixes));

    let prefixEmb = new API.RichEmbed()
    .setColor(randomHexColor())
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${pars[0]}`);

    input.channel.send(prefixEmb);
};

module.exports.help = {
	name: "p"
}
