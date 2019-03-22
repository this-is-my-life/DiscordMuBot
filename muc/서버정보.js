/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')

module.exports.run = async (mu, input, pars) => {
  let icon = input.guild.iconURL
  let kChannelInfo = new API.RichEmbed()
    .setTitle(`${input.guild.name.toString()} 정보다뮤~♬`)
    .setDescription(`to. ${input.author.toString()}`)
    .setThumbnail(icon)
    .setColor('#E5748B')
    .addBlankField()
    .addField('서버 이름', input.guild.name)
    .addField('서버 생성일', input.guild.createdAt)
    .addField('서버 가입일', input.member.joinedAt)
    .addField('서버 맴버수', input.guild.memberCount)
  input.channel.send(kChannelInfo)
}

module.exports.help = {
  name: '섭정보'
}
