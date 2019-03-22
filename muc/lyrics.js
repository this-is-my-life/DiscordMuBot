/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const superagent = require('superagent')
const randomHexColor = require('random-hex-color')

module.exports.run = async (mu, input, pars) => {
  let songs = pars.join(' ').slice(0)
  let { body } = await superagent
    .get(`https://some-random-api.ml/lyrics?title=${songs}`)
  if (body.error) {
    input.channel.send(`${body.error}`)
  } else {
    let eLyrics = new API.RichEmbed()
      .setColor(randomHexColor())
      .setTitle('Lyrics, HERE!')
      .setURL(body.links.genius)
      .setDescription(`"${body.title}" -${body.author}`)
      .setThumbnail(`${body.thumbnail.genius}`)
      .setFooter('Powered by some-random-api.ml')
    let lyrics = body.lyrics
    let lyrics1 = lyrics.substring(0, 999)
    let lyrics2 = lyrics.substring(1000, 1999)
    let lyrics3 = lyrics.substring(2000, 2999)
    let lyrics4 = lyrics.substring(3000, 3999)
    let lyrics5 = lyrics.substring(4000, 4999)
    if (lyrics1) { input.channel.send(lyrics1) }
    if (lyrics2) { input.channel.send(lyrics2) }
    if (lyrics3) { input.channel.send(lyrics3) }
    if (lyrics4) { input.channel.send(lyrics4) }
    if (lyrics5) { input.channel.send(lyrics5) }
    input.channel.send('[Lyric End]')
    input.channel.send(eLyrics)
  }
}

module.exports.help = {
  name: 'ly',
  description: '가사'
}
