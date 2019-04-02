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
  let kPingEmb = new API.RichEmbed()
    .setTitle(`Pong!`)
    .setColor(randomHexColor())
    .setDescription(`${input.author.toString()}뮤! OㅅO [${Math.round(mu.ping)}ms]`)
  input.channel.send(kPingEmb)
}

module.exports.help = {
  name: '핑크'
}
