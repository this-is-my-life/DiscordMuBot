/*
	μBot v5.0 Test. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

console.log("------------------MuBot------------------------");

// API Require
console.log("Main API Load...");
const API = require("discord.js"); // Main API
console.log("Main API Loaded Correctly");

// TTS Require
console.log("TTS API(Google TTS Library) Load...");
const TTS = require("google-tts-api");
console.log("TTS API Loaded Correctly");

// Command Reader Require
console.log("Command Reader Load...");
const cmds = require("fs");
console.log("Reader Loaded Correctly");

// Login Require
console.log("Token Load...");
const token = process.env.token; // Set Bot Token
console.log("Token Loaded Correctly");
console.log("Discord API Client Login");
const mu = new API.Client(); // Take a Bot From Main API
console.log("Login Correctly");
console.log("Command Load...");
mu.commands = new API.Collection();
cmds.readdir("./muc/", (err, files) => {
if (err) return console.log("\n\nRead Commands Error!______________________________\n\n" + err);
let jsfile = files.filter((f) => f.split(".").pop() === "js");
if(jsfile.length <= 0){
console.log("Error(E404): Couldn't find commands.");
return;
}
jsfile.forEach((f, i) => {
let props = require(`./muc/${f}`);
console.log(`CommandLoad: Ready(${f})`);
mu.commands.set(props.help.name, props);
});
});

console.log("Returning Code: 0");

console.log("	μBot v7.0 Test.\n	---------------------\n	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ \n Copyright (c) 2018. PMH Studio. (kok4575@gmail.com) MIT Licensed.\n\n\n");
return console.log("----------------------------------------");
