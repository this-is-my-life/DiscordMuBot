/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const randomHexColor = require('random-hex-color')

module.exports.run = async (mu, input, pars) => {
  let avata = input.author.displayAvatarURL
  let eMyInfo = new API.RichEmbed()
    .setTitle(`${input.author.username}님의 정보다뮤유~!`)
    .setDescription(`누군가는 보겠지뮤...`)
    .setThumbnail(avata)
    .setColor(randomHexColor())
    .addBlankField()
    .addField('유저 이름', input.author.username)
    .addField('유저 별명', input.member.displayName)
    .addField('유저 코드', input.author.discriminator)
    .addField('유저 태그', input.author.tag)
    .addField('유저 식별 아이디', input.author.id)
    .addField('유저 상태', input.author.presence.status)
    .addField('유저 플레이 중...', input.author.presence.game)
    .addField('유저 프로필 사진 URL', input.author.displayAvatarURL)
    .addField('유저 회원가입 날짜', input.author.createdAt)
  input.channel.send(eMyInfo)
}

module.exports.help = {
  name: '정보'
}
