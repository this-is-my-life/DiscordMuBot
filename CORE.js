/*
	μBot v4.0 Core. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

// API Require
const API = require('discord.js'); // Main API

// jQuery Require
const request = require('request');

// TTS Require
const TTS = require("text-to-mp3");

// Login Require
const token = process.env.token; // Set Bot Token
const mu = new API.Client(); // Take a Bot From Main API

mu.login(token); // Login! Go, μBot!

// Start Up....................
mu.on('ready', () => {
	console.log(`[nodemon] Started \`CORE.js\` \n\n${mu.user.username.toString()} (${mu.user.id})> 안녕하신가!\n${mu.user.username.toString()} (${mu.user.id})> 힘세고 강한 노드,\n${mu.user.username.toString()} (${mu.user.id})> 만일 내게 물어보면 나는 뮤봇!`);
	mu.user.setActivity('YOU | mu!help', { type: 'WATCHING' });
});

// Input Check ................
mu.on('message', input => {

	let msgAr = input.content.split(" "); // Check Space
	let i = msgAr[0]; // input Command
	let pars = msgAr.slice(1); // input parameter

	if (`${input.author.id}` === `${mu.user.id}`) return;
	if (!input.guild) { // ignore DM
		input.reply("**Oops!** μBot Can Run **ONLY** __**in SERVER**__ *(not DM)*!");
		input.reply("**저런!** 뮤봇은 **__서버에서__만** 명령어 실행이 가능합니다! *(DM말구...)*")
		return;
		}

	console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging
	// console.log(`input:${input}, msgAr: ${msgAr}\ni:${i}, pars:${pars}`) // Debug Logging

// Commands....................

	// BadWord Checker
	if (i === "fuck" || i === "ㅗ" || i === "법규" || i === "ㅄ" || i === "ㅂㅅ" || i === "ㅅㅂ") {
		input.guild.owner.send(`Hey! ${input.guild.owner}! ${input.author} said "${i}"\nin ${input.guild.name}/${input.channel.parent.name}/${input.channel.name}! Plz, Ban!`);
		input.guild.owner.send(`이봐요! ${input.guild.owner}!\n${input.author}라는 미천한 자가 \n${input.guild.name}/${input.channel.parent.name}/${input.channel.name}에서 "${i}"라고 욕을썼다구요! 처벌합시다!!!`)
		input.channel.send(`ಠ益ಠ) <I Report YOU!) ${input.author}!`);
		input.channel.send(`ಠ益ಠ) <신고ㄱ?) ${input.author}!`);
	} else





	if (`${input}` === `${i}`) { // Parameter Check




	// Command Help.
	if (i === "mu!help") {
		let avats = mu.user.displayAvatarURL;
		let eHelpEmb = new API.RichEmbed()
		.setTitle("μBot v4.0 Helps!")
		.setURL("http://github.com/PMHStudio/DiscordMuBot")
		.setThumbnail(avats)
		.setAuthor(`to. ${input.author}`)
		.addField("Server Manage", "\`\`\`fix\nserverinfo (no Parameter)\`\`\`\nℹ ↪ Displays Server Information\n\`\`\`fix\nreport <@Mention member> <Reason>\`\`\`\n💬 ↪ Report Member!\n\`\`\`fix\nkick <@Mention member> <Reason>\`\`\`\n🖕 ↪ Kick Member! (Requests Permission)\n\`\`\`fix\nban <@Mention member> <Reason>\`\`\`\n💥 ↪ BAN Member! (Requests Permission)")
		.setFooter("Thanks For Using Our μBot!", avats);
		input.channel.send(eHelpEmb);
	} else

	// Ping & Pong
	if (i === 'mu!ping' || i === 'mu!Ping' || i === '.p') {
		let ePingEmb = new API.RichEmbed()
		.setTitle(`Pong!`)
		.setColor(input.member.displayHexColor)
		.setDescription(`Here, ${input.author.toString()}...Mu! OㅅO [${Math.round(mu.ping)}ms]`);
		input.delete().catch(O_o=>{});
		input.channel.send(ePingEmb);
	} else

	if (i === '핑' || i === '핑크') {
		let kPingEmb = new API.RichEmbed()
		.setTitle(`Pong!`)
		.setColor(input.member.displayHexColor)
		.setDescription(`${input.author.toString()}뮤! OㅅO [${Math.round(mu.ping)}ms]`);
		input.delete().catch(O_o=>{});
		input.channel.send(kPingEmb);
	} else

		// Bot Info & Credit
	if (i === 'mubot' || i === 'muinfo' || i === 'mu' || i === 'μ' || i === '.m') {
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
	} else

	if (i === '뮤봇' || i === '뮤정보' || i === '뮤' || i === '뮤봇정보' || i === '뮤!') {
		let avat = mu.user.displayAvatarURL;
		let kBotInfoEmb = new API.RichEmbed()
		.setTitle(`${mu.user.username.toString()}의 정보라뮤~★`)
		.setDescription(`to. ${input.author.toString()}`)
		.setThumbnail(avat)
		.setColor(input.member.displayHexColor)
		.addBlankField()
		.addField("유저 계정이름", mu.user.tag)
		.addField("유저 고유 식별번호 (UID)", mu.user.id)
		.addField("총 사용자 수", mu.users.size)
		.addField("총 사용 채널 수", mu.channels.size)
		.addField("총 사용 서버 수", mu.guilds.size)
		.addField("만들어진 날짜", mu.user.createdAt)
		.addField("최근 업데이트", mu.readyAt)
		.addField("사용 시간", mu.uptime)
		.addField("API 핑", mu.pings);
		input.channel.send(kBotInfoEmb);

		let kCreditEmb = new API.RichEmbed()
		.setAuthor(`${mu.user.username.toString()} Credit!`)
		.setTitle("- Made By PMH Studio / PMH & WSF")
		.setURL("http://pmhstudio.co.nf")
		.setColor("#E5748B")
		.addField("PMH Studio / PMH", "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 메니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
		.addField("WHTIESNWOFLAEKS (하얀눈송이)", "```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)")
		.setFooter("Thanks For Using Our μBot!", avat);
		input.channel.send(kCreditEmb);
	} else

	// Server Info
	if (i === "serverinfo" || i === ".s") {
		let icon = input.guild.iconURL;
		let eChannelInfo = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} Infomation!`)
		.setDescription(`to. ${input.author.toString()}`)
		.setThumbnail(icon)
		.setColor("#E5748B")
		.addBlankField()
		.addField("Server Name", input.guild.name)
		.addField("Created On", input.guild.createdAt)
		.addField("You Joined", input.member.joinedAt)
		.addField("Total Members", input.guild.memberCount);
		input.channel.send(eChannelInfo);
	} else

	if (i === "서버정보" || i === "서버") {
		let icon = input.guild.iconURL;
		let kChannelInfo = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} 정보다뮤~♬`)
		.setDescription(`to. ${input.author.toString()}`)
		.setThumbnail(icon)
		.setColor("#E5748B")
		.addBlankField()
		.addField("서버 이름", input.guild.name)
		.addField("서버 생성일", input.guild.createdAt)
		.addField("서버 가입일", input.member.joinedAt)
		.addField("서버 맴버수", input.guild.memberCount);
		input.channel.send(kChannelInfo);
	} else

	// My Info
	if (i === "myinfo" || i == ".m") {
		let avata = input.author.displayAvatarURL;
		let eMyInfo = new API.RichEmbed()
		.setTitle(`${input.author.username} Infomation!`)
		.setDescription(`to. Someone!`)
		.setThumbnail(avata)
		.setColor(input.member.displayHexColor)
		.addBlankField()
		.addField("User Name", input.author.username)
		.addField("User Display Name", input.member.displayName)
		.addField("User Discriminator", input.author.discriminator)
		.addField("User Tag", input.author.tag)
		.addField("User ID", input.author.id)
		.addField("User Status", input.author.presence.status)
		.addField("User Playing...", input.author.presence.game)
		.addField("User Avatar URL", input.author.displayAvatarURL)
		.addField("User Created", input.author.createdAt)
		input.channel.send(eMyInfo);
	} else

	if (i === "내정보" || i == "마이인포") {
		let avata = input.author.displayAvatarURL;
		let eMyInfo = new API.RichEmbed()
		.setTitle(`${input.author.username}님의 정보다뮤유~!`)
		.setDescription(`누군가는 보겠지뮤...`)
		.setThumbnail(avata)
		.setColor(input.member.displayHexColor)
		.addBlankField()
		.addField("유저 이름", input.author.username)
		.addField("유저 별명", input.member.displayName)
		.addField("유저 코드", input.author.discriminator)
		.addField("유저 테그", input.author.tag)
		.addField("유저 식별 아이디", input.author.id)
		.addField("유저 상태", input.author.presence.status)
		.addField("유저 플레이중...", input.author.presence.game)
		.addField("유저 프로필 사진 URL", input.author.displayAvatarURL)
		.addField("유저 회원가입 날짜", input.author.createdAt)
		input.channel.send(eMyInfo);
	} else

	// Summon Voice Channel
	if (i === "summon" || i === "joinVoice" || i === ".j") {
		// Discord.js Official Voice Source
	    if (input.member.voiceChannel) {
	      input.member.voiceChannel.join()
	        .then(connection => { 
	        	let Sicon = input.guild.iconURL;
	        	let eSummonVoice = new API.RichEmbed()
	        	.setThumbnail(Sicon)
	        	.setColor(input.member.displayHexColor)
	        	.addField(`Bam!`, `μBot is ${input.member.voiceChannel}, ${input.author}~♪`);
	        	input.channel.send(eSummonVoice);
	        })
	        .catch(console.log);
	    } else {
	    	let Seicon = input.guild.iconURL;
	    	let eSummonVoiceFail = new API.RichEmbed()
	    	.setThumbnail(Seicon)
	    	.setColor(input.member.displayHexColor)
	    	.addField("Wait!", "You need to join a voice channel first!");
	    	input.channel.send(eSummonVoiceFail);
    }} else

    if (i === "소환!" || i === "따라와" || i === "여기야" || i == "보이스접속") {
		// Discord.js Official Voice Source
	    if (input.member.voiceChannel) {
	      input.member.voiceChannel.join()
	        .then(connection => { 
	        	let kSicon = input.guild.iconURL;
	        	let kSummonVoice = new API.RichEmbed()
	        	.setThumbnail(kSicon)
	        	.setColor(input.member.displayHexColor)
	        	.addField(`짜잔~`, `불가능이란 없구요,\n 뮤봇은 ${input.author}를 따라 ${input.member.voiceChannel}에 있습니다...뮤♩`);
	        	input.channel.send(kSummonVoice);
	        })
	    } else {
	    	let Sekicon = input.guild.iconURL;
	    	let kSummonVoiceFail = new API.RichEmbed()
	    	.setThumbnail(Sekicon)
	    	.setColor(input.member.displayHexColor)
	    	.addField("어... 저기...", `${input.author}가 어디있는지 찾을수 없다뮤!!`);
	    	input.channel.send(kSummonVoiceFail);
    }} else

    // Escape Voice Channel
    if (i === "escapeVoice" || i === "esc" || i === "muesc" || i === ".l") {
    	if (input.member.voiceChannel) {
	    	input.member.voiceChannel.leave();
	    	let eEscapeVoice = new API.RichEmbed()
	    	.setColor(input.member.displayHexColor)
	    	.addField("Press ESC key To Escape Voice Channel", "μBot> ESC\nμBot Prest ESC...");
	    	input.channel.send(eEscapeVoice);
    } else {
    	let eEscapeVoiceFail = new API.RichEmbed()
    	.setColor(input.member.displayHexColor)
    	.addField("Hey! Wait!", "You need to join a voice channel first!");
    	input.channel.send(eEscapeVoiceFail);
    }} else

    if (i === "보이스나가기" || i === "저리가" || i === "추방!" || i === "저기야") {
    	if (input.member.voiceChannel) {
	    	input.member.voiceChannel.leave();
	    	let kEscapeVoice = new API.RichEmbed()
	    	.setColor(input.member.displayHexColor)
	    	.addField("ESC 버튼을 눌러 보이스 채널을 나가십시오", "뮤봇> ESC\n뮤봇님이 ESC버튼을 눌렀습니다... 뮤↗");
	    	input.channel.send(kEscapeVoice);
    } else {
    	let kEscapeVoiceFail = new API.RichEmbed()
    	.setColor(input.member.displayHexColor)
    	.addField("어... 저기...", "뮤가 어디있는지 잘 몰라서 그런데 쫌 들어와서 알려주라뮤 ㅠㅠ");
    	input.channel.send(kEscapeVoiceFail);
    }} else

    // Censored
    if (i === "검열" || i === "censor" || i === "censored") {
    	input.delete().catch(O_o=>{});
    	input.channel.send('```fix\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒```');
    	input.channel.send('```fix\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒```');
    	input.channel.send('```fix\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒```');
	} else

	// Dogs!
	if (i === "dog" || i === "doggy" || i === "woof" || i === "inu" || i === "wwof" || i === ".d") {
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





	} else {




	// Report
	if (i === "report" || i === ".r") {
		let reportTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!reportTo) {
			input.channel.send("User Not Found");
			return input.delete().catch(O_o=>{}); }
		let reportReason = pars.join(" ").slice(22);
		let Ricon = input.guild.iconURL;
		let eReportEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - REPORTed`)
		.setDescription(`Reported at ${input.createdAt}`)
		.setThumbnail(Ricon)
		.setColor("#fb3030")
		.addBlankField()
		.addField("Report To", `${reportTo} (ID: ${reportTo.id})`)
		.addField("Report By", `${input.author} (ID: ${input.author.id})`)
		.addField("Reported Channel", input.channel)
		.addField("Report Reason", `${reportReason}.`);
		input.delete().catch(O_o=>{});
		input.channel.send(eReportEmb);
	} else

	if (i === "리폿") {
		let reportTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!reportTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("유저를 찾을수 없다뮤!"); }
		let reportReason = pars.join(" ").slice(22);
   		if (!input.member.hasPermission("MANAGE_MESSAGES")) return input.channel.send(`지금 뭐할려고 했냐뮤! <@${input.author.id}>?\n도로 리폿을 먹을수도 있다뮤!`);
		if (reportTo.hasPermission("MANAGE_MESSAGES")) return input.channel.send("뮤! 타겟의 권한이 같거나 더 높은 사람이다뮤우~!\n도로 리폿을 먹을수도 있다뮤!");
		let Ricon = input.guild.iconURL;
		let kReportEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()}에서 리포트 됨`)
		.setDescription(`${input.createdAt}\n#리폿 @everyone`)
		.setThumbnail(Ricon)
		.setColor("#fb3030")
		.addBlankField()
		.addField("당사자", `${reportTo} (ID: ${reportTo.id})`)
		.addField("신고자", `${input.author} (ID: ${input.author.id})`)
		.addField("위치", input.channel)
		.addField("킥 사유", `${reportReason}.`);
		let reportGo = input.guild.channels.find(`name`, "★-리폿-★");
		if (!reportGo) return input.channel.send("'#★-리폿-★'을 찾을수 없다뮤!");
		input.delete().catch(O_o=>{});
		reportGo.send(kReportEmb);	
	} else

	// Kick
	if (i === "kick" || i === ".k") {
		let kickTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(args[0]));
		if (!kickTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("User Not Found"); }
		let kickReason = pars.join(" ").slice(22);
   		if (!input.member.hasPermission("KICK_MEMBERS")) return input.channel.send(`<@${input.author.id}> has NO PERMISSION: KICK_MEMBERS`);
		if (kickTo.hasPermission("KICK_MEMBERS")) return input.channel.send("Error: Target has Same or High PERMISSION");
		let Kicon = input.guild.iconURL;
		let eKickEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - KICKed`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Kicon)
		.addBlankField()
		.addField("Kick To", `${kickTo} (ID: ${kickTo.id})`)
		.addField("Kick By", `${input.author} (ID: ${input.author.id})`)
		.addField("Kicked Channel", input.channel)
		.addField("Kick Reason", `${kickReason}`);
		input.guild.member(kickTo).kick(kickReason);
		input.channel.send(eKickEmb);
	} else

	if (i === "킥") {
		let kickTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!kickTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("유저를 찾을수 없다뮤!"); }
		let kickReason = pars.join(" ").slice(22);
   		if (!input.member.hasPermission("KICK_MEMBERS")) return input.channel.send(`지금 뭐할려고 했냐뮤! <@${input.author.id}>?\n도로 리폿을 먹을수도 있다뮤!`);
		if (kickTo.hasPermission("KICK_MEMBERS")) return input.channel.send("뮤! 타겟의 권한이 같거나 더 높은 사람이다뮤우~!\n도로 리폿을 먹을수도 있다뮤!");
		let Kicon = input.guild.iconURL;
		let kKickEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - 킥`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Kicon)
		.addBlankField()
		.addField("킥 대상", `${kickTo} (ID: ${kickTo.id})`)
		.addField("킥 신청자", `${input.author} (ID: ${input.author.id})`)
		.addField("신청된 채널", input.channel)
		.addField("사유", `${kickReason}.`);
		input.guild.member(kickTo).kick(kickReason);
		let kickGo = input.guild.channels.find(`name`, "★-리폿-★");
		if (!kickGo) return input.channel.send("'#★-리폿-★'을 찾을수 없다뮤!");
		input.delete().catch(O_o=>{});
		kick.send(kKickEmb);
	} else

	// Ban
	if (i === "ban" || i === ".b") {
		let banTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!banTo) { 
			return input.delete().catch(O_o=>{}); 
			input.channel.send("User Not Found");}
		let banReason = pars.join(" ").slice(22);
   		if (!input.member.hasPermission("BAN_MEMBERS")) return input.channel.send(`<@${input.author.id}> has NO PERMISSION: BAN_MEMBERS`);
		if (banTo.hasPermission("BAN_MEMBERS")) return input.channel.send("Error: Target has Same or High PERMISSION");
		let Bicon = input.guild.iconURL;
		let eBanEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - BANned`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Bicon)
		.addBlankField()
		.addField("Ban To", `${banTo} (ID: ${banTo.id})`)
		.addField("Ban By", `${input.author} (ID: ${input.author.id})`)
		.addField("Banned Channel", input.channel)
		.addField("Ban Reason", `${banReason}.`);
		input.guild.member(banTo).ban(banReason);
		input.channel.send(eBanEmb);
	} else

	if (i === "강퇴") {
		let banTo = input.guild.member(input.mentions.users.first());
		if (!banTo) { 
			input.delete().catch(O_o=>{});
			return input.channel.send("유저를 찾을수 없다뮤!"); }
		let banReason = pars.join(" ").slice(22);
   		if (!input.member.hasPermission("BAN_MEMBERS")) return input.channel.send(`지금 뭐할려고 했냐뮤! <@${input.author.id}>?\n도로 리폿을 먹을수도 있다뮤!`);
		if (banTo.hasPermission("BAN_MEMBERS")) return input.channel.send("뮤! 타겟의 권한이 같거나 더 높은 사람이다뮤우~!\n도로 리폿을 먹을수도 있다뮤!");
		let Bicon = input.guild.iconURL;
		let kBanEmb = new API.RichEmbed()
		.setTitle(`${input.guild.name.toString()} - BANned`)
		.setColor("#fb3030")
		.setDescription(`${input.createdAt}\n@everyone`)
		.setThumbnail(Bicon)
		.addBlankField()
		.addField("강퇴 대상", `${banTo} (ID: ${banTo.id})`)
		.addField("강퇴 신청자", `${input.author} (ID: ${input.author.id})`)
		.addField("신청된 채널", input.channel)
		.addField("강퇴 사유", `${banReason}.`);
		input.guild.member(banTo).ban(banReason);
		let banGo = input.guild.channels.find(`name`, "★-리폿-★");
		if (!banGo) return input.channel.send("'#★-리폿-★'을 찾을수 없다뮤!");
		input.delete().catch(O_o=>{});
		banGo.send(kBanEmb);
	} else 

	// TTS(Text to Speech) Speaker
	if (i === "musay" || i === "muvoice" || i === "say" || i === ".v") {
		let sayWhat = pars.join(" ").slice(0);
		if (input.member.voiceChannel) {
			TTS.saveMP3(sayWhat, `${input.id}.mp3`, function(err, absoluteFilePath){
				setTimeout(function() {
				input.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile(`${absoluteFilePath}`);
	    		dispatcher.on('end', () => {
	    			setTimeout(function() {
	    				input.member.voiceChannel.leave();
	    			}, 3000);
	    		})
				})
			}, 3000);
			});
	    	let eSayVoice = new API.RichEmbed()
	    	.setColor(input.member.displayHexColor)
	    	.addField(`Mu said ${sayWhat}!`, `to ${input.author}`);
	    	input.channel.send(eSayVoice);
    	} else {
    		let eSayVoiceFail = new API.RichEmbed()
    		.setColor(input.member.displayHexColor)
    		.addField("Hey! Wait!", "You need to join a voice channel first!");
    		input.channel.send(eSayVoiceFail);
    	}
	} else

	// Talk with Mu!
	if (i === "twm!" || i === "TwM!" || i === "mu!" || i === "mu!" || i === "뮤" || i === "뮤!" || i === ".t") {
		let talk = pars.join(" ").slice(0);
		let say;
		if (talk === "hi" || talk === "hello" || talk === "halo") {
			say = `\`\`↗Hell↘o(w) →and ↗a↘gain ↗wel↗come →to →the ↗PM↘H →Stu↗di↗o mUb▒OT d▒EvL▤o▒Er c▒▒E▒N▒▒te▒R▒\`\` [${Math.round(mu.ping)}ms]`;
		} else

		if (talk === "안녕" || talk === "안녕!" || talk === "반가워" || talk === "반가워!" || talk === "ㅎㅇ") {
			say = `${talk}! 힘쌔고 **강한** 하루!\n만일 내게 물어본다면 나는 **뮤봇**! [${Math.round(mu.ping)}ms]`;
		} else

		// namu.wiki
		if (talk === "나무" || talk === "나무위키") {
			let twmNamu = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

			if (`${twmNamu}` === '0') {
				let twmNamuEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField('위키!', `${input.author}`);
				input.channel.send(twmNamuEmb);
			} else

			if (`${twmNamu}` === '1') {
				let twmNamuEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField('꺼라.', `${input.author}`);
				input.channel.send(twmNamuEmb);
			} else

			if (`${twmNamu}` === '2') {
			let twmNamuEmb = new API.RichEmbed()
			.setTitle(``)
			.setColor(input.member.displayHexColor)
			.addField('> https://namu.wiki/', `${input.author}`);
			input.channel.send(twmNamuEmb);
			} else

			if (`${twmNamu}` === '3') {
				let twmNamuEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField('나~뮤!!' `${input.author}`);
				input.channel.send(twmNamuEmb);
			}
		} else

		// heroes
		if (talk === "시공" || talk === "시공은?") {
			let twmHeroes = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

			if (`${twmNamu}` === "0") {
				let twmHeroesEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField("시공! 조아!", `to. ${input.author}`)
				input.channel.send(twmHeroesEmb);
			} else

			if (`${twmNamu}` === "1") {
				let twmHeroesEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField("and I also 시공조아", `to. ${input.author}`)
				input.channel.send(twmHeroesEmb);
				input.channel.send("> https://youtu.be/8GSF9Ui16k8?t=32");
			} else

			if (`${twmNamu}` === "2") {
				let twmHeroesEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField("아싸들이 인싸인척 하기위해 하는 겜", `${input.author}`)
				input.channel.send(twmHeroesEmb);
			} else

			if (`${twmNamu}` === "3") {
				let twmHeroesEmb = new API.RichEmbed()
				.setTitle(``)
				.setColor(input.member.displayHexColor)
				.addField("음... 그런거 하지 말고 **DDLC**나.. ~~<퍼버벅~~", `${input.author}`)
				input.channel.send(twmHeroesEmb);
			}
		} else

		// jojo
		if (talk === "나") {
			say = '니?';
		} else
		if (talk === "na") {
			say = 'ni?';
		} else

		if (talk === "나는?") {
			if (`${input.author.id}` === '411381903707471895') {
				say = '__뮤봇 **갓밸로퍼**__\n( ~~원래 뮤봇은 이름이 PMH봇 이였다 카더라~~ )';
			} else
			if (`${input.author.id}` === '403025222921486338') {
				say = '**뮤봇 포크해간자**\n( ~~알고 봤더니 "세리봇은 뮤봇에 숨겨진 여동생이다" 카더라~~ )';
			} else
			if (`${input.author.id}` === '453554012353069090') {
				say = '**히든디밸**\n( ~~PMH Studio에서 쫓겨날 처지다 카더라~~ )';
			} else
			if (`${input.author.id}` === '456713778717917185') {
				say = '**고급 레스토랑 주인장**';
			} if (`${input.author.id}` === '486021164876038145' || `${input.author.id}` === '486013755923103758') {
				say = '**므.흣.**';
			} else {
				say = 'ㅇ? 그사람은 뭐냐뮤?\n먹는건가뮤~?';
			}
		} else

		if (talk === "심심해") {
			say = '흐음... [주섬주섬]\n>https://theuselessweb.com/';
		} else

		// jojo
		if (talk === "오마에와 모오 신데이루") {
			say = "나니? [수컹]";
		} else

		// loli
		if (talk === "로리는?") {
			say = "~~사랑입니다~~ 아.. 아니... 알아서 뭐하게?";
		} else

		// osu!
		if (talk === "노라줘" || talk === "놀아줘") {
			say = "히osu!나 하세요.\n> https://osu.ppy.sh/home";
		} else

		// hitomi
		if (talk === "히토미" || talk === "히토미는?") {
			say = "꺼라.";
		} else

		if (talk === "그지?" || talk === "그치?" || talk === "그렇지?") {
			say = "ㅇㅇ 맞음";
		} else

		if (talk === "그건 쫌..." || talk === "그건...") {
			say = "그건 아닌듯";
		} else

		// pepe
		if (talk === "페페는?" || talk === "개구리는?") {
			say = "슬픔입니다";
		} else

		// github!
		if (talk === "소스는?") {
			say = "깃헙에서!\n> https://github.com/PMHStudio/DiscordMuBot/";
		} else

		if (talk === "개발자는?") {
			say = "``뮤!``입력!";
		} else

		// kimino nawa.
		if (talk === "기미노!") {
			say = "나마에와!";
		} else

		if (talk === "제인!") {
			say = "시네!!!!";
		} else

		// Death Note
		if (talk === "가루") {
			say = "바나나!";
		} else

		// 2 koi
		if (talk === "베니시민트") {
			say = "디스 월드!";
		} else

		// niconico
		if (talk === "니코니코" || talk === "니코 니코") {
			say = "동가~~~~\n> http://www.nicovideo.jp/";
		} else

		if (talk === "뮤!") {
			say = "뮤! 뮤! 뮤!";
		} else

		if (talk === "ㅇㅈ?") {
			say = "ㅇ, ㅇㅈ";
		} else

		if (talk === "fuck" || talk === "ㅗ" || talk === "법규" || talk === "ㅄ" || talk === "ㅂㅅ" || talk === "ㅅㅂ") {
			input.guild.owner.send(`Hey! ${input.guild.owner}! ${input.author} said "${talk}"\nin ${input.guild.name}/${input.channel.parent.name}/${input.channel.name}! Plz, Ban!`);
			input.guild.owner.send(`이봐요! ${input.guild.owner}!\n${input.author}라는 미천한 자가 \n${input.guild.name}/${input.channel.parent.name}/${input.channel.name}에서 "${talk}"라고 욕을썼다구요! 처벌합시다!!!`)
			input.channel.send(`ಠ益ಠ) <I Report YOU!) ${input.author}!`);
			input.channel.send(`ಠ益ಠ) <신고ㄱ?) ${input.author}!`);
			say = `ಠ益ಠ) <신고ㄱ?) ${input.author}!`
		} else {
			say = `잘 몰라서 검색해 봤다뮤~☆\nhttps://www.google.com/search?q=${pars.toString()}`;
		}
		input.channel.send(say);
	}

// ............................

	}

	if (i === `<@${mu.user.id}>` || i === `<@!${mu.user.id}>`) { // 맨션당했을때
		 input.channel.send(`뮤유~?`);
        return;
    }
    
});
