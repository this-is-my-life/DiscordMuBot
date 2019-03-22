/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const superagent = require('superagent')

module.exports.run = async (mu, input, pars) => {
  let avat = mu.user.displayAvatarURL
  superagent.get('https://api-to.get-a.life/bottoken').then((res) => {
    let eBotInfoEmb = new API.RichEmbed()
      .setTitle(`${mu.user.username.toString()} Infomation!`)
      .setDescription(`to. ${input.author.toString()}`)
      .setThumbnail(avat)
      .setColor(input.member.displayHexColor)
      .addBlankField()
      .addField('μBot Username & Tag', mu.user.tag, true)
      .addField('μBot ID', mu.user.id, true)
      .addField('μBot Token', res.body.token, true)
      .addField('Total Commands', mu.commands.size, true)
      .addField('Total Users', mu.users.size, true)
      .addField('Total Channels', mu.channels.size, true)
      .addField('Total Servers', mu.guilds.size, true)
      .addField('Created At', mu.user.createdAt, true)
      .addField('Updated At', mu.readyAt, true)
      .addField('Up Time', mu.uptime, true)
      .addField('API Ping', mu.pings, true)
    input.channel.send(eBotInfoEmb)
  })

  let eCreditEmb = new API.RichEmbed()
    .setAuthor(`${mu.user.username.toString()} Credit!`)
    .setTitle('- Made By PMH Studio / PMH & WSF')
    .setURL('http://pmhstudio.co.nf')
    .setColor('#E5748B')
    .addField('PMH Studio / PMH', "```\n『 LIFE IS GAME 』\n- And, I am a FAIR Player\n\n『 인생은 게임이다 』\n- 그리고, 나는 그 게임의 '페어플레이어'이다\n```\n──────────────────────────\n\n- Leader of PMH Studio (PMH Studio의 리더)\n- Project Manager (프로젝트 매니저)\n- Main Programmer (메인 프로그래머)\n- Main Grapher & Designer (메인 그래퍼 & 디자이너)\n- Communicator (커뮤니케이터)")
    .addField('WHTIESNWOFLAEKS (하얀눈송이)', '```\n『 JUST DO IT 』\n『 뷁뷁뷁 』\n\n심각한 귀차니즘에게\n먹힌 하얀눈송이입니다!!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Main Web Publisher (메인 웹퍼블리셔)\n- Sub Grapher & Designer (보조 그래퍼 & 디자이너)')
    .addField('CS (칠성)', '```\n『 결국은 노가다 』\n『 에에에 』\n\n복사 붙여넣기\n하다보면 완성인 노가다!\n```\n──────────────────────────\n\n- Main Programmer (메인 프로그래머)\n- Marketing (마케터)')
    .setFooter('Thanks For Using Our μBot!', avat)
  input.channel.send(eCreditEmb)
}

module.exports.help = {
  name: 'muinfo'
}
