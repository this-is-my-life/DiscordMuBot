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
  let powered = new API.RichEmbed()
    .setColor(randomHexColor())
    .setTitle('Powered By')
    .setDescription('[Discord](https://discordapp.com) [Discord API](https://discordapp.com/developers/docs) [node.js](https://nodejs.org) [npm](https://www.npmjs.com/) [discord.js](http://discord.js.org) [python](https://www.python.org) [PyPI](https://pypi.org/) [discord.py](https://discordpy.readthedocs.io) [Heroku](https://heroku.com) [Google Dialogflow](https://dialogflow.com/) [GitHub](https://developer.github.com/v3/) [Steam](https://steamcommunity.com/dev) [NekoBot](https://docs.nekobot.xyz/) [TesWiki](http://teswiki.co.nf) [shibe.online](https://shibe.online/) [Dog CEO](https://dog.ceo/) [TheCatAPI.com](https://thecatapi.com/) [Some Random Api](https://some-random-api.ml/) [DiscordEmoji](https://discordemoji.com/)')
  input.channel.send(powered)
}

module.exports.help = {
  name: 'powered',
  description: '파워드'
}
