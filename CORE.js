/*
	μBot v5.0 Core. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

console.log("\n\n\nμBot v5.0 Core Session is Start!\n------------------Bot Start Process Start------------------");

// Basic Requires________________________________

	// Token
	let muto = require("./Token!.json");
		muto = muto.Insert_Token_Right_Blank;
	console.log("Login Token: Ready(" + muto + ")");

	// Commands
	const cmds = require("fs");
	console.log("cmdColletor: Ready")

	// Discord API
	const API = require("discord.js");
	console.log("Discord API: Ready")

// Bot Login_____________________________________

	// Get Bot Client
	const mu = new API.Client();

	// Bot Login with Token
	mu.login(muto);

	// Get Bot Command
	mu.commands = new API.Collection();

// Read Commands_________________________________
	
	cmds.readdir("./muc/", (err, files) => {
		// Error Check
		if (err) return console.log("\n\nRead Commands Error!______________________________\n\n" + err);
		
		// Command Files Exist Check
		let jsfile = files.filter(f => f.split(".").pop() === "js")
		if(jsfile.length <= 0){
			console.log("Error(E404): Couldn't find commands.");
		    return;
		}

		jsfile.forEach((f, i) =>{
			let props = require(`./muc/${f}`);
		 	console.log(`CommandLoad: Ready(${f})`);
		    mu.commands.set(props.help.name, props);
		});
	});

// Bot Readying__________________________________
	mu.on("ready", async () => {
		console.log("-----------------------------------------------------------\n\n	μBot is Running Correctly! | " + mu.status + " | " + mu.guilds.size + " Servers | " + mu.channels.size + " Channels | " + mu.users.size + " Users\n\nInput Log:");
		mu.user.setActivity("ALL MESSAGES", {type: "WATCHING"});
	});

// Bot Commanding________________________________
	mu.on("message", async input => {
		console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging
		if (`${input.author.id}` === `${mu.user.id}`) return; // Don't Check Message Itself!
		if (!input.guild) { // ignore DM
			input.reply("**Oops!** μBot Can Run **ONLY** __**in SERVER**__ *(not DM)*!");
			input.reply("**저런!** 뮤봇은 **__서버에서__만** 명령어 실행이 가능합니다! *(DM말구...)*")
			return;
		}
  		let prefix = "mu!";  // <= Change Prefix HERE!
  		let msgAr = input.content.split(" ");
  		let i = msgAr[0];
  		let pars = msgAr.slice(1);
  		let cmdFile = mu.commands.get(i.slice(prefix.length));
  		if (cmdFile) cmdFile.run(mu,input,pars);
  	});
