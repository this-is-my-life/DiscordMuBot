/*
	μBot v7.0 Core. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/
console.log("\n\n\nμBot v7.0 Core Session is Start!\n------------------Bot Start Process Start------------------");

// Basic Requires________________________________

    // Commands
    const cmds = require("fs");
    console.log("cmdColletor: Ready(fs)");

	// Token
	let mutf = require("./Token!.json");
	let muto = process.env.muto || mutf.discordToken;
	console.log("Login Token: Ready(" + muto + ")");
	let muai = process.env.muai || mutf.dialogflowToken || "61840c6bb70f4c2baf380086c0cdc785";
	console.log("apiai Token: Ready(" + muai + ")");
	let defaultPrefix = process.env.defaultPrefix || mutf.defaultPrefix || "mu!";
	console.log("Base Prefix: Ready(" + defaultPrefix + ")");
    let prefixes = JSON.parse(cmds.readFileSync("./Saved/ServersPrefix.json", "utf8"))


    // User Cool Down
    let cooldown = new Set();
	let cdseconds = process.env.defaultCooldown || mutf.defaultCooldown || 3;

	// User Coins
	const mute = require("./Saved/UsersCoin.json");
	console.log("MuteCoin v3: Ready(Saved/UsersCoin.json)");

	// api.ai (Dialogflow v1)
	const apiai = require('apiai')
	console.log("Dialog1 API: Ready(apiai)")
	const ai = apiai(muai);

	// Web Json Reader
	const superagent = require("superagent");
	console.log("SuperAgent: Ready(superagent)");

	// Discord API
	const API = require("discord.js");
	console.log("Discord API: Ready(discord.js)");


// Bot Login_____________________________________

	// Get Bot Client
	const mu = new API.Client();

	// Bot Login with Token
	mu.login(muto);

	// Get Bot Command
	mu.commands = new API.Collection();


// Read Commands_________________________________

	cmds.readdir("./muc/", (err, files) => {

		// Command Files Exist Check
		let jsfile = files.filter(f => f.split(".").pop() === "js")
		if (jsfile.length <= 0) {
			console.log("Error(E404): Couldn't find commands.");
			return;
		}

		jsfile.forEach((f, i) => {
			let props = require(`./muc/${f}`);
			let filenames = f.split(".");
			let filename = filenames[0];
			mu.commands.set(filename, props);
			mu.commands.set(props.help.name, props);
			mu.commands.set(props.help.description, props);
			console.log(`CommandLoad: Ready(${filename}, ${props.help.name}, ${props.help.description})`);
		});
	});


// Bot Readying__________________________________
	mu.on("ready", async () => {
		console.log("-----------------------------------------------------------\n\n	μBot is Running Correctly! | " + mu.status + " | " + mu.guilds.size + " Servers | " + mu.channels.size + " Channels | " + mu.users.size + " Users\n\nInput Log:");
        mu.user.setActivity(`Messages | ${defaultPrefix}help`, {type: "WATCHING"});
	});

// Bot Commanding________________________________
	mu.on("message", async input => {
		if (input.guild.id === "264445053596991498") return;

		// MuteCoin
		{
			if (!mute[input.author.id]) {
				mute[input.author.id] = {
					mute: 0
				};
			}
			let muteAmt = Math.floor(Math.random() * 11) + 1;
			if (muteAmt == 1) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 1
				};
			} else
			if (muteAmt == 2) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 2
				};
			} else
			if (muteAmt == 3) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 4
				};
			} else
			if (muteAmt == 4) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 8
				};
			} else
			if (muteAmt == 5) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 16
				};
			} else
			if (muteAmt == 6) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 32
				};
			} else		
			if (muteAmt == 7) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 64
				};
			} else
			if (muteAmt == 8) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 128
				};
			} else
			if (muteAmt == 9) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 256
				};
			} else
			if (muteAmt == 10) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 512
				};
			} else
			if (muteAmt == 11) {
				mute[input.author.id] = {
					mute: mute[input.author.id].mute + 1024
				};
			}
			cmds.writeFile("./Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
		}
		
        if (!prefixes[input.guild.id]) {
            prefixes[input.guild.id] = {
                prefixes: defaultPrefix
            };
        }
        let prefix = prefixes[input.guild.id].prefixes;

  		if (!input.content.startsWith(prefix)) return; // Don't log Messages Without Prefix
		console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging
		if (`${input.author.id}` === `${mu.user.id}`) return; // Don't Check Message Itself!
		if (!input.guild) { // ignore DM
			input.reply("**Oops!** μBot Can Run **ONLY** __**in SERVER**__ *(not DM)*!");
			input.reply("**저런!** 뮤봇은 **__서버에서__만** 명령어 실행이 가능합니다! *(DM 말고...)*")
			return;
		}
		  if(cooldown.has(input.author.id)){
			input.delete();
			input.channel.send(`CoolDown is Activated (${cdseconds} sec.)\n쿨다운이 활성화되어있습니다! (${cdseconds} 초)`).then(thismsg => thismsg.delete(5000))
 		   return
 		 }
		  if(!input.member.hasPermission("ADMINISTRATOR")){
 		   cooldown.add(input.author.id);
 		 }
		input.channel.startTyping();
		mu.user.setStatus("idle");
		let msgAr = input.content.split(" ");
		let msgc = input.content.slice(prefix.length);
  		let i = msgAr[0];
  		let pars = msgAr.slice(1);
  		let verify = i.slice(prefix.length);
  		let cmdFile = mu.commands.get(verify);

  		if (!verify) {
			let { body } = await superagent
				.get(`https://api-to.get-a.life/bottoken`);
  			let avat = mu.user.displayAvatarURL;
			let eBotInfoEmb = new API.RichEmbed()
			.setTitle(`${mu.user.username.toString()} Infomation!`)
			.setDescription(`to. ${input.author.toString()}`)
			.setThumbnail(avat)
			.setColor(input.member.displayHexColor)
			.addBlankField()
			.addField("μBot Username & Tag", mu.user.tag)
			.addField("μBot ID", mu.user.id)
			.addField("μBot Token", body.token)
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
			.addField("PMH Studio / PMH", "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 매니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
			.addField("WHTIESNWOFLAEKS (하얀눈송이)", "```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)")
			.setFooter("Thanks For Using Our μBot!", avat);
			input.channel.send(eCreditEmb);
  		} else {
		  	if (cmdFile) { 
		  		cmdFile.run(mu,input,pars,prefix);
	  		} else {
		  		// AI(api.ai, Dialogflow v1) Intents
				let aiRequest = ai.textRequest(msgc, {
		  			sessionId: input.author.id
		  		});

	    		aiRequest.end();

	    		aiRequest.on('response', function(response) {
	        		let aiResponseText = response.result.fulfillment.speech;
	        		let aiResponseArr = aiResponseText.split(" ");
	        		if (aiResponseArr[0] === "checkurl") {
	        			let aiEmb = new API.RichEmbed()
	        			.setTitle("흐음... 이 타이틀을 눌러보라뮤!")
	        			.setColor(input.member.displayHexColor)
	        			.setURL(aiResponseArr[1])
	        			.setDescription("Powered by Google Dialogflow");
	        			input.channel.send(aiEmb);
	        		} else {
		        		let aiEmb = new API.RichEmbed()
		        		.setTitle(aiResponseText)
		   				.setColor(input.member.displayHexColor)
		        		.setDescription("Powered by Google Dialogflow");
		        		input.channel.send(aiEmb);
	        		}
				});
			}  		
  		}
		
	  setTimeout(() => {
    cooldown.delete(input.author.id)
	  }, cdseconds * 1000)
		mu.user.setStatus("online");
	input.channel.stopTyping();
		
  	});
  	
