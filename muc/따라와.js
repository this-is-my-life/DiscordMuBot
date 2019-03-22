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
// Discord.js Official Voice Source
  if (input.member.voiceChannel) {
    input.member.voiceChannel.join()
      .then(connection => {
        let kSicon = input.guild.iconURL
        let kSummonVoice = new API.RichEmbed()
          .setThumbnail(kSicon)
          .setColor(randomHexColor())
          .addField(`짜잔~`, `불가능이란 없구요,\n 뮤봇은 ${input.author}를 따라 ${input.member.voiceChannel}에 있습니다...뮤♩`)
        input.channel.send(kSummonVoice)
      })
  } else {
    let Sekicon = input.guild.iconURL
    let kSummonVoiceFail = new API.RichEmbed()
      .setThumbnail(Sekicon)
      .setColor(randomHexColor())
      .addField('어... 저기...', `${input.author}가 어디 있는지 찾을 수 없다뮤!!`)
    input.channel.send(kSummonVoiceFail)
  }
}

module.exports.help = {
  name: '여기야'
}
