/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const superagent = require('superagent')
const randomHexColor = require('random-hex-color')

module.exports.run = async (mu, input, pars) => {
  let long = input.content.split(' ')[1]
  let short = encodeURI(input.content.split(' ')[2])
  if (!long || !long.startsWith('http')) {
    let shortEmb = new API.RichEmbed()
      .setColor(randomHexColor())
      .setTitle('사용방법')
      .addField(process.env.defaultPrefix + '단축URL <도착점: URL> [시작점: 키워드]', 'ex) ' + process.env.defaultPrefix + '단축URL http://codeshare.kro.kr/example\nor) ' + process.env.defaultPrefix + '단축URL http://codeshare.kro.kr/example 코드셰어')
    input.channel.send(shortEmb)
  } else {
    if (short === 'undefined') {
      let max = Math.floor(Math.random() * 3) + 5
      let result = ''
      for (let counter = 0; counter < max; counter++) {
        result += String.fromCharCode(Math.floor(Math.random() * (0xD7AF - 0xAC00 + 1)) + 0xAC00)
      }
      short = encodeURI(result)
    }
    superagent.get('https://api.myjson.com/bins/1cpw6g').then((res) => {
      if (!res.body[short]) {
        res.body[short] = long
        superagent.put('https://api.myjson.com/bins/1cpw6g')
          .send(res.body)
          .then((res) => console.log(res))
        let shortEmb = new API.RichEmbed()
          .setColor(0x00ff00)
          .setTitle('완성! 여기를 눌러 테스트!')
          .setURL('http://short.kro.kr/' + decodeURI(short))
          .addField('단축한 URL (시작점)', 'http://short.kro.kr/' + decodeURI(short))
          .addField('단축된 URL (도착점)', long)
        input.channel.send(shortEmb)
      } else {
        let shortEmb = new API.RichEmbed()
          .setColor(0xff0000)
          .addField('삐빅, 오류다뮤!', '이미 사용된 시작점 키워드를 사용했다뮤!')
        input.channel.send(shortEmb)
      }
    })
  }
}

module.exports.help = {
  name: '단축',
  description: 'url'
}
