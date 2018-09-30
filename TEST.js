/*
	μBot v4.0 Test. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

console.log("------------------MuBot------------------------");

// API Require
console.log("Main API Load...");
const API = require('discord.js'); // Main API
console.log("Main API Loaded Correctly");

// TTS Require
console.log("TTS API(Google TTS Library) Load...");
const TTS = require("text-to-mp3");
console.log("TTS API Loaded Correctly");

// Login Require
console.log("Token Load...");
const token = process.env.token; // Set Bot Token
console.log("Token Loaded Correctly");
console.log("Discord API Client Login");
const mu = new API.Client(); // Take a Bot From Main API
console.log("Login Correctly")

console.log("Returning Code: 0");

console.log("	μBot v4.0 Test.\n	---------------------\n	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ \n Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.\n\n\n");
return console.log("----------------------------------------");
