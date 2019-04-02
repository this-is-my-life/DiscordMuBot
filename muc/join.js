/*
  μBot v8.0 Command.
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
      .then((connection) => {
        let Sicon = input.guild.iconURL
        let eSummonVoice = new API.RichEmbed()
          .setThumbnail(Sicon)
          .setColor(randomHexColor())
          .addField('Bam!', `μBot is ${input.member.voiceChannel}, ${input.author}~♪`)
        input.channel.send(eSummonVoice)
      })
      .catch((err) => { console.log(err) })
  } else {
    let Seicon = input.guild.iconURL
    let eSummonVoiceFail = new API.RichEmbed()
      .setThumbnail(Seicon)
      .setColor(randomHexColor())
      .addField('Wait!', 'You need to join a voice channel first!').then((thismsg) => thismsg.delete(1000))
    input.channel.send(eSummonVoiceFail)
  }
}

module.exports.help = {
  name: 'j'
}
