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
	// If You Using Token, Erase //
	// let muto = require("./Token!.json");
	// 	   muto = muto.Insert_Token_Right_Blank;
	let muto = process.env.muto;
	
	console.log("Login Token: Ready(" + muto + ")");

	// Commands
	const cmds = require("fs");
	console.log("cmdColletor: Ready(fs)");

	// User Coins
	const mute = require("./Saved/UsersCoin.json");

	// Dialogflow(API.AI) AI API
	const dfProjectId = 'pmhstudio-mubot';
	const dfSessionId = 'quickstart-session-id';
	const dfLanguageCode = 'ko-KR';
	const df = require('dialogflow');
	const dfClient = new df.SessionsClient();
	const dfPath = dfClient.sessionPATH(dfProjectId, dfSessionId);

	// Discord API
	const API = require("discord.js");
	console.log("Discord API: Ready(Discord.js)");

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
		mu.user.setActivity("Messages | mu!help", {type: "WATCHING"});
	});

// Bot Commanding________________________________
	mu.on("message", async input => {
		// MuteCoin
		if (!mute[input.author.id]) {
    		mute[input.author.id] = {
      			mute: 0
    		};
  		}
		let muteAmt = Math.floor(Math.random() * 11) + 1;
		if (muteAmt = 1) {
    		mute[input.author.id] = {
      			mute: mute[input.author.id].mute + 1
    		};
		} else
		if (muteAmt = 2) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 2
			};
		} else
		if (muteAmt = 3) {
    		mute[input.author.id] = {
      			mute: mute[input.author.id].mute + 4
    		};
		} else
		if (muteAmt = 4) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 8
			};
		} else
		if (muteAmt = 5) {
    		mute[input.author.id] = {
      			mute: mute[input.author.id].mute + 16
    		};
		} else
		if (muteAmt = 6) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 32
			};
		} else		
		if (muteAmt = 7) {
    		mute[input.author.id] = {
      			mute: mute[input.author.id].mute + 64
    		};
		} else
		if (muteAmt = 8) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 128
			};
		} else
		if (muteAmt = 9) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 256
			};
		} else
		if (muteAmt = 10) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 512
			};
		} else
		if (muteAmt = 11) {
			mute[input.author.id] = {
				mute: mute[input.author.id].mute + 1024
			};
		}
  		cmds.writeFile("./Saved/UserCoin.json", JSON.stringify(mute));
  		// MuteCoin End.
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
  		if (input === "mu!") {
  			let avat = mu.user.displayAvatarURL;
			let eBotInfoEmb = new API.RichEmbed()
			.setTitle(`${mu.user.username.toString()} Infomation!`)
			.setDescription(`to. ${input.author.toString()}`)
			.setThumbnail(avat)
			.setColor(input.member.displayHexColor)
			.addBlankField()
			.addField("μBot Username & Tag", mu.user.tag)
			.addField("μBot ID", mu.user.id)
			.addField("Total Users", mu.users.size)
			.addField("Total Channels", mu.channels.size)
			.addField("Total Servers", mu.guilds.size)
			.addField("Created At", mu.user.createdAt)
			.addField("Updated At", mu.readyAt)
			.addField("Up Time", mu.uptime)
			.addField("API Ping", mu.pings);
			input.channel.send(eBotInfoEmb);

			let eCreditEmb = new API.RichEmbed()
			.setAuthor(`${mu.user.username.toString()} Credit!`)
			.setTitle("- Made By PMH Studio / PMH & WSF")
			.setURL("http://pmhstudio.co.nf")
			.setColor("#E5748B")
			.addField("PMH Studio / PMH", "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 메니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
			.addField("WHTIESNWOFLAEKS (하얀눈송이)", "```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)")
			.setFooter("Thanks For Using Our μBot!", avat);
			input.channel.send(eCreditEmb);
  		} else {
	  		let cmdFile = mu.commands.get(i.slice(prefix.length));
	  		if (cmdFile) cmdFile.run(mu,input,pars);
  		} else

  		if (i === "tmu!") {
  			let UserSay = pars.join(" ").slice(0);
  			const dfRequest = {
  				session: sessionPATH,
  				queryInput: {
  					text:{
  						text: UserSay,
  						languageCode: dfLanguageCode,
  					},
  				},
  			};
  			dfClient
  			.detectIntent(dfRequest)
  			.then(responses => {
  				const MuSay = responses[0].queryResult;
  				input.channel.send("MuSay.fulfillmentText");
  			})
  		}
  	});
  	