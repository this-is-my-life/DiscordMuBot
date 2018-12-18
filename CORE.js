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
	let prefix = process.env.defaultPrefix || mutf.defaultPrefix || "mu!";
	console.log("Login Token: Ready(" + prefix + ")");
	let nasa = process.env.nasa || mutf.nasaToken || "GpELYI28U6YMlWtNjDcF5IOunjRi9ZIFPJcTHDdo";
	console.log("Base Prefix: Ready(" + nasa + ")");


    // User Cool Down
    let cooldown = new Set();
	let cdseconds = process.env.defaultCooldown || mutf.defaultCooldown || 5;

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
		console.log("-----------------------------------------------------------\n\n	μBot is Running Correctly! | " + mu.commands.size + " Commands | " + mu.guilds.size + " Servers | " + mu.channels.size + " Channels | " + mu.users.size + " Users\n\nInput Log:");
        mu.user.setActivity(`Messages | ${prefix}help`, {type: "WATCHING"});
	});
	
// Bot Sense Join________________________________
	mu.on("guildMemberAdd", async joindmember => {
		joindmember.send("En.\nHey! Welcome To Our Server!\nPlease Read Rules And Have Fun! -μ\n\nkr.\n**여어, 히사시부리! ~~(처음 만나는데..?)~~**\n우리의 서버에 들어온것을 환영한다뮤우~★\n규칙을 자알 읽고 좋은 시간 보내라뮤! -μ")
	});
	
// Bot Typing____________________________________
	mu.on("typingStart", async typingChannel => {
		typingChannel.startTyping();
		setTimeout(() => {
			typingChannel.stopTyping();
		}, 500);
	});

// Bot Commanding________________________________
	mu.on("message", async input => {
		if (input.guild.id === "264445053596991498") return;

		superagent.get(`https://mubotdb.herokuapp.com/action/UserTyped/${input.author.id}/${mu.user.id}`).catch(err => console.log(err));
		

  		if (!input.content.startsWith(prefix)) return; // Don't log Messages Without Prefix
		console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging
		if (`${input.author.id}` === `${mu.user.id}`) return; // Don't Check Message Itself!
		if (!input.guild) { // ignore DM
			input.reply("**Oops!** μBot Can Run **ONLY** __**in SERVER**__ *(not DM)*!").then(thismsg => thismsg.delete(2000));
			input.reply("**저런!** 뮤봇은 **__서버에서__만** 명령어 실행이 가능합니다! *(DM 말고...)*").then(thismsg => thismsg.delete(2000));
			return;
		}

		// CoolDown System
		if (cooldown.has(input.author.id)) {
			input.delete();
			input.channel.send(`CoolDown is Activated (${cdseconds} sec.)\n쿨다운이 활성화되어있습니다! (${cdseconds} 초)`).then(thismsg => thismsg.delete(2000))
 			return;
		}
		cooldown.add(input.author.id);
		
		mu.user.setStatus("idle");
		let msgAr = input.content.split(" ");
		let msgc = input.content.slice(prefix.length);
  		let i = msgAr[0];
  		let pars = msgAr.slice(1);
  		let verify = i.slice(prefix.length);
  		let cmdFile = mu.commands.get(verify);

  		if (prefix == input) {
			let { body } = await superagent
				.get(`https://api-to.get-a.life/bottoken`);
  			let avat = mu.user.displayAvatarURL;
			let eBotInfoEmb = new API.RichEmbed()
			.setTitle(`${mu.user.username.toString()} Infomation!`)
			.setDescription(`to. ${input.author.toString()}`)
			.setThumbnail(avat)
			.setColor(input.member.displayHexColor)
			.addBlankField()
			.addField("μBot Username & Tag", mu.user.tag, true)
			.addField("μBot ID", mu.user.id, true)
			.addField("μBot Token", body.token, true)
			.addField("Total Commands", mu.commands.size, true)
			.addField("Total Users", mu.users.size, true)
			.addField("Total Channels", mu.channels.size, true)
			.addField("Total Servers", mu.guilds.size, true)
			.addField("Created At", mu.user.createdAt, true)
			.addField("Updated At", mu.readyAt, true)
			.addField("Up Time", mu.uptime, true)
			.addField("API Ping", mu.pings, true)
			.addField("Powered By...", "[Discord](https://discordapp.com) [Discord API](https://discordapp.com/developers/docs) [node.js](https://nodejs.org) [npm](https://www.npmjs.com/) [discord.js](http://discord.js.org) [python](https://www.python.org) [PyPI](https://pypi.org/) [discord.py](https://discordpy.readthedocs.io) [Heroku](https://heroku.com) [Google Dialogflow](https://dialogflow.com/) [GitHub](https://developer.github.com/v3/) [Steam](https://steamcommunity.com/dev) [NekoBot](https://docs.nekobot.xyz/) [TesWiki](http://teswiki.co.nf) [shibe.online](https://shibe.online/) [Dog CEO](https://dog.ceo/) [TheCatAPI.com](https://thecatapi.com/) [Some Random Api](https://some-random-api.ml/) ");
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
		  		cmdFile.run(mu,input,pars,prefix,nasa);
	  		} else {
		  		// AI(api.ai, Dialogflow v1) Intents
				let aiRequest = ai.textRequest(msgc, {
		  			sessionId: input.author.id
		  		});

	    		aiRequest.end();

	    		aiRequest.on('response', function(response) {
	        		let aiResponseText = response.result.fulfillment.speech;
	        		let aiResponseArr = aiResponseText.split(" ");
	        		if (aiResponseArr[0] === "checkurl");
		        	let aiEmb = new API.RichEmbed()
		        	.setTitle(aiResponseText)
		   			.setColor(input.member.displayHexColor)
		    		.setDescription("Powered by Google Dialogflow");
	        		input.channel.send(aiEmb);
				});
			}  		
  		}
		
	  setTimeout(() => {
    cooldown.delete(input.author.id)
	  }, cdseconds * 1000)
		mu.user.setStatus("online");
		
  	});
  	
