/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

    

module.exports.run = async (mu, input, pars, prefix) => {
    let msgAr = input.content.split(" ");
    let i = msgAr[0];
    let verify = i.slice(prefix.length);

if (pars[1] === "echo") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: batch file, cmd.exe");
    input.channel.send("Language: Batch file, CMD.exe -----------");
    buffer = pars.join(" ").slice(0);
    console.log(`Check String: ${buffer}`);
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
}
}

module.exports.help = {
	name: "disconsole"
}