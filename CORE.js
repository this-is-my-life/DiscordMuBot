/*
	μBot v4.0 Core. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require('discord.js');
const private = require("./BotToken.json");
const mu = new API.Client();

mu.login(private.BotToken); // Login! Go, MuBot!

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

	if (!input.guild) return; // ignore DM

	console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Loging

// Commands....................
	
	// Ping & Pong
	if (i === 'ping' || i === 'Ping' || i === '.p') {
		let ePingEmb = new API.RichEmbed()
		.setTitle(`Pong!`)
		.setImage("http://mubotapi.dothome.co.kr/discordapi/images/PingCMDEmbImage.png")
		.setColor("#ffff00")
		.setDescription(`Here, ${input.author.toString()}...Mu! OㅅO [${Math.round(mu.ping)}ms]`);
		input.delete().catch(O_o=>{});
		input.channel.send(ePingEmb);
	} else

	if (i === '핑' || i === '핑크') {
		input.channel.send(`${input.author.toString()}뮤! OㅅO [${Math.round(mu.ping)}ms]`);
		input.delete().catch(O_o=>{});
	} else

	// Bot Info & Credit
	if (i === 'mubot' || i === 'muinfo' || i === 'mu' || i === '.i') {
		let avat = mu.user.displayAvatarURL;
		let eBotInfoEmb = new API.RichEmbed()
		.setTitle(`${mu.user.username.toString()} Infomation!`)
		.setDescription(`to. ${input.author.toString()}`)
		.setThumbnail(avat)
		.setColor("#ffff00")
		.addBlankField()
		.addField("Bot Username & Tag", mu.user.tag)
		.addField("Bot ID", mu.user.id)
		.addField("Created At", mu.user.createdAt);
		input.channel.send(eBotInfoEmb);

		let eCreditEmb = new API.RichEmbed()
		.setAuthor(`${mu.user.username.toString()} Credit!`)
		.setTitle("- Made By PMH Studio / PMH & WSF")
		.setURL("http://pmhstudio.co.nf")
		.setColor("#E5748B")
		.addField("PMH Studio / PMH", "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 메니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
		.addField("WHTIESNWOFLAEKS (하얀눈송이)", "```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)")
		.setFooter("Thanks For Using Our Bot", avat);
		input.channel.send(eCreditEmb);
	} else

	if (i === '뮤봇' || i === '뮤정보' || i === '뮤' || i === '뮤봇정보') {
		let avat = mu.user.displayAvatarURL;
		let kBotInfoEmb = new API.RichEmbed()
		.setTitle(`${mu.user.username.toString()}의 정보라뮤~★`)
		.setDescription(`to. ${input.author.toString()}`)
		.setThumbnail(avat)
		.setColor("#ffff00")
		.addBlankField()
		.addField("유저 계정이름", mu.user.tag)
		.addField("유저 고유 식별번호 (UID)", mu.user.id)
		.addField("만들어진 날짜", mu.user.createdAt);
		input.channel.send(kBotInfoEmb);

		let kCreditEmb = new API.RichEmbed()
		.setAuthor(`${mu.user.username.toString()} Credit!`)
		.setTitle("- Made By PMH Studio / PMH & WSF")
		.setURL("http://pmhstudio.co.nf")
		.setColor("#E5748B")
		.addField("PMH Studio / PMH", "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 메니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
		.addField("WHTIESNWOFLAEKS (하얀눈송이)", "```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)")
		.setFooter("Thanks For Using Our Bot", avat);
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
			input.channel.send("유저를 찾을수 없다뮤!");
			return input.delete().catch(O_o=>{}); }
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
			input.channel.send("User Not Found");
			return input.delete().catch(O_o=>{}); }
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
			input.channel.send("유저를 찾을수 없다뮤!");
			return input.delete().catch(O_o=>{}); }
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
		.addField("신청된 체널", input.channel)
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
			input.channel.send("User Not Found");
			return input.delete().catch(O_o=>{}); }
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
		let banTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]));
		if (!banTo) { 
			input.channel.send("유저를 찾을수 없다뮤!");
			return input.delete().catch(O_o=>{}); }
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
		.addField("신청된 체널", input.channel)
		.addField("강퇴 사유", `${banReason}.`);
		input.guild.member(banTo).ban(banReason);
		let banGo = input.guild.channels.find(`name`, "★-리폿-★");
		if (!banGo) return input.channel.send("'#★-리폿-★'을 찾을수 없다뮤!");
		input.delete().catch(O_o=>{});
		banGo.send(kBanEmb);
	}

// ............................

});
