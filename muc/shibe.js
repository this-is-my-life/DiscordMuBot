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
  let { body } = await superagent
    .get('http://shibe.online/api/shibes?count=1')
  let shibEmb = new API.RichEmbed()
    .setColor(randomHexColor())
    .setTitle('Dogs, HERE!')
    .setURL(body[0])
    .setDescription(`${input.author} said "cuteeeeeeee!"`)
    .setImage(body[0])
    .setFooter('Powered by shibe.online')
  input.channel.send(shibEmb)
}

module.exports.help = {
  name: '시바',
  description: 'shiba'
}
