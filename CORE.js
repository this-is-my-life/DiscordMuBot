/*
	μBot v4.0 Core. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

// API Require
const API = require('discord.js'); // Main API

// TTS Require
const TTS = require("text-to-mp3");

// Login Require
const token = process.env.token; // Set Bot Token
const mu = new API.Client(); // Take a Bot From Main API

mu.login(token); // Login! Go, μBot!

// Start Up....................
mu.on('ready', () => {
	console.log(`[nodemon] Started \`CORE.js\` \n\n${mu.user.username.toString()} (${mu.user.id})> 안녕하신가!\n${mu.user.username.toString()} (${mu.user.id})> 힘세고 강한 노드,\n${mu.user.username.toString()} (${mu.user.id})> 만일 내게 물어보면 나는 뮤봇!`);
	mu.user.setActivity('Your All Messages', { type: 'WATCHING' });
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

	// 욕설 필터링 By PMH Studio / WSF (https://github.com/whitesnowflakes)
	if (i === `개새끼` | i === `느금마` | i === `닥쳐` | i === `등신` | i === `또라이` | i === `메갈` | i === `미친놈` | i === `병신` | i === `빠가` | i === `보지` | i === `불알` | i === `섹스` | i === `자지` | i === `새끼` | i === `씨발` | i === `아가리` | i === `애미` | i === `애비` | i === `일베` | i === `좆` | i === `지랄` | i === `창녀` | i === `틀딱충` | i === `후장` | i === `니미씨발` | i === `니비씨발` | i === `ㅗ` | i === `h` | i `개새끼` | i === `개색기` | i === `개색끼` | i === `개자식` | i === `개보지` | i === `개자지` | i === `개년` | i === `개걸래` | i === `개걸레` | i === `씨발` | i === `씨팔` | i === `씨부랄` | i === `씨바랄` | i === `씹창` | i === `씹탱` | i === `씹보지` | i === `씹자지` | i === `씨방세` | i === `씨방새` | i === `씨펄` | i === `시펄` | i === `십탱` | i === `씨박` | i === `썅` | i === `쌍놈` | i === `쌍넘` | i === `싸가지` | i === `쓰벌` | i === `씁얼` | i === `상넘이` | i === `상놈의` | i === `상놈이` | i === `상놈을` | i === `좆` | i === `좃` | i === `존나게` | i === `존만한` | i === `같은년` | i === `넣을년` | i === `버릴년` | i === `부랄년` | i === `바랄년` | i === `미친년` | i === `니기미` | i === `니미씹` | i === `니미씨` | i === `니미럴` | i === `니미랄` | i === `호로` | i === `후레아들` | i === `호로새끼` | i === `후레자식` | i === `후래자식` | i === `후라들년` | i === `후라들넘` | i === `빠구리` | i === `병신`) {
		input.guild.systemChannel.send(`Hey! Server owner!\n${input.author} used "${talk}"! Plz, Ban!`);
		input.guild.systemChannel.send(`이봐요! 서버장!\n${input.author}라는 미천한 자가 \n"${talk}"라고 욕을썼다구요! 처벌합시다!!!`);
		input.channel.send(`ಠ益ಠ) <I Report YOU!) ${input.author}!`);
		say = `ಠ益ಠ) <신고ㄱ?) ${input.author}!`
	} else





	if (`${input}` === `${i}`) { // Parameter Check





	// Ping & Pong
	if (i === 'ping' || i === 'Ping' || i === '.p') {
		let ePingEmb = new API.RichEmbed()
		.setTitle(`Pong!`)
		.setColor("#ffff00")
		.setDescription(`Here, ${input.author.toString()}...Mu! OㅅO [${Math.round(mu.ping)}ms]`);
		input.delete().catch(O_o=>{});
		input.channel.send(ePingEmb);
	} else

	if (i === '핑' || i === '핑크') {
		let kPingEmb = new API.RichEmbed()
		.setTitle(`Pong!`)
		.setColor("#ffff00")
		.setDescription(`${input.author.toString()}뮤! OㅅO [${Math.round(mu.ping)}ms]`);
		input.delete().catch(O_o=>{});
		input.channel.send(kPingEmb);
	} else

		// Bot Info & Credit
	if (i === 'mubot' || i === 'muinfo' || i === 'mu' || i === 'μ' || i === '.i') {
		let avat = mu.user.displayAvatarURL;
		let eBotInfoEmb = new API.RichEmbed()
		.setTitle(`${mu.user.username.toString()} Infomation!`)
		.setDescription(`to. ${input.author.toString()}`)
		.setThumbnail(avat)
		.setColor("#ffff00")
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
		.setColor("#ffff00")
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
		if (talk === "나무") {
			say = '위키';
		} else

		// heroes
		if (talk === "시공" || talk === "시공은?") {
			say = '조아';
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

		// jojo
		if (talk === "오마에와 모오 신데이루") {
			say = "나니? [수컹]";
		} else

		// loli
		if (talk === "로리는?") {
			say = "~~사랑입니다~~ 아.. 아니... 알아서 뭐하게?";
		} else

		// osu!
		if (talk === "노라줘" || talk === "놀아줘" || talk === "심심해") {
			let TwMosu;
			TwMosu = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
			if (TwMosu === "0") say = "히osu!나 하세요.\n> https://osu.ppy.sh/home";
			if (TwMosu === "1") say = '흐음... [주섬주섬]\n> https://theuselessweb.com/';
			if (TwMosu === "2") say = "**시.러.**";
			if (TwMosu === "3") say = "do you want DDLC?"
		} else

		// hitomi
		if (talk === "히토미" || talk === "히토미는?") {
			say = "꺼라.";
		} else

		if (talk === "그지?" || talk === "그치?" || talk === "그렇지?") {
			let TwMright;
			TwMright = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			if (TwMright === "0") say = "ㅇㅇ 맞음";
			if (TwMright === "1") say = "뭔개솔?"
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
		if (talk === "베니시민트" || talk === "vanishment!") {
			let TwMvani;
			TwMvani = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			if (TwMvani === "0") say = "Th!s World!";
			if (TwMvani === "1") say = "왜... 왜그러시죠? 설마.. 쥬...중2병?"
		} else

		// niconico
		if (talk === "니코니코" || talk === "니코 니코") {
			let TwMnico;
			TwMnico = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
			if (TwMnico === "0") say = "동가~~~~\n> http://www.nicovideo.jp/";
			if (TwMnico === "1") say = "틴.";
			if (TwMnico === "2") say = "니~~\n아나타노 하토니 니코니코니~\n> https://www.youtube.com/watch?v=3oD8tj3eBls";
		} else

		if (talk === "뮤!") {
			let TwMmu;
			TwMmu = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			if (TwMmu === "0") say = "뮤! 뮤! 뮤!";
			if (TwMmu === "1") say = "왜... 왜저래... [정색]";
		} else

		if (talk === "ㅇㅈ?") {
			let TwMokay;
			TwMokay = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			if (TwMokay === "0") say = "ㅇ, ㅇㅈ";
			if (TwMokay === "1") say = "ㄴㄴ ㄴㅇㅈ";
		} else

		// 욕설 필터링 By PMH Studio / WSF (https://github.com/whitesnowflakes)
		if (talk === `개새끼` | talk === `느금마` | talk === `닥쳐` | talk === `등신` | talk === `또라이` | talk === `메갈` | talk === `미친놈` | talk === `병신` | talk === `빠가` | talk === `보지` | talk === `불알` | talk === `섹스` | talk === `자지` | talk === `새끼` | talk === `씨발` | talk === `아가리` | talk === `애미` | talk === `애비` | talk === `일베` | talk === `좆` | talk === `지랄` | talk === `창녀` | talk === `틀딱충` | talk === `후장` | talk === `니미씨발` | talk === `니비씨발` | talk === `ㅗ` | talk === `h` | talk `개새끼` | talk === `개색기` | talk === `개색끼` | talk === `개자식` | talk === `개보지` | talk === `개자지` | talk === `개년` | talk === `개걸래` | talk === `개걸레` | talk === `씨발` | talk === `씨팔` | talk === `씨부랄` | talk === `씨바랄` | talk === `씹창` | talk === `씹탱` | talk === `씹보지` | talk === `씹자지` | talk === `씨방세` | talk === `씨방새` | talk === `씨펄` | talk === `시펄` | talk === `십탱` | talk === `씨박` | talk === `썅` | talk === `쌍놈` | talk === `쌍넘` | talk === `싸가지` | talk === `쓰벌` | talk === `씁얼` | talk === `상넘이` | talk === `상놈의` | talk === `상놈이` | talk === `상놈을` | talk === `좆` | talk === `좃` | talk === `존나게` | talk === `존만한` | talk === `같은년` | talk === `넣을년` | talk === `버릴년` | talk === `부랄년` | talk === `바랄년` | talk === `미친년` | talk === `니기미` | talk === `니미씹` | talk === `니미씨` | talk === `니미럴` | talk === `니미랄` | talk === `호로` | talk === `후레아들` | talk === `호로새끼` | talk === `후레자식` | talk === `후래자식` | talk === `후라들년` | talk === `후라들넘` | talk === `빠구리` | talk === `병신`) {
			input.guild.systemChannel.send(`Hey! Server owner!\n${input.author} used "${talk}"! Plz, Ban!`);
			input.guild.systemChannel.send(`이봐요! 서버장!\n${input.author}라는 미천한 자가 \n"${talk}"라고 욕을썼다구요! 처벌합시다!!!`)
			input.channel.send(`ಠ益ಠ) <I Report YOU!) ${input.author}!`);
			say = `ಠ益)ಠ <신고ㄱ?) ${input.author}!`
		} else {
			say = `잘 몰라서 검색해 봤다뮤~☆\nhttps://www.google.com/search?q=${pars.toString()}`;
		}
		input.channel.send(say);
	}

// ............................

	}

	if (i === `<@${mu.user.id}>` || i === `<@!${mu.user.id}>`) { // 맨션당했을때
        input.channel.send(`뮤유~?`);
    }
    
return;
});
