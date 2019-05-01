/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const randomHexColor = require('random-hex-color')
const superagent = require('superagent')

module.exports.run = async (mu, input, pars) => {
  let say = pars.join(' ').slice(0)
  if (!say) {
    input.channel.send('nu!사전 <검색어>')
  } else {
    superagent.get('https://stdict.korean.go.kr/api/search.do?key=' + process.env.dicToken + '&q=' + encodeURI(say))
      .then((res) => {
        if (res.text.includes('<item>')) {
          let dicEmb = new API.RichEmbed()
            .setTitle('오옷, "' + say + '"라는 단어를 찾았다뮤!')
            .setColor(randomHexColor())
            .addField('국립국어원의 표준국어대사전에 따르면...', res.text.split('<![CDATA[')[2].split(']]>')[0])
          input.channel.send(dicEmb)
        } else {
          input.channel.send('응 그딴거 없어~')
        }
      }).catch((err) => {
        console.log(err)
      })
  }
}

module.exports.help = {
  name: '사전'
}
