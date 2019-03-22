/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const request = require('request')
const randomHexColor = require('random-hex-color')

module.exports.run = async (mu, input, pars) => {
  request.get('http://thecatapi.com/api/images/get?format=src&type=png', {
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let eCat = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle('Cats, HERE!')
        .setURL(response.request.uri.href)
        .setDescription(`${input.author} said "meow!"`)
        .setImage(response.request.uri.href)
        .setFooter('Powered by thecatapi.com')
      input.channel.send(eCat)
    } else {
      console.log(error)
    }
  })
}

module.exports.help = {
  name: 'cat',
  description: '냥코'
}
