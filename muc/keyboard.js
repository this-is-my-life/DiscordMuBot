/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const randomHexColor = require('random-hex-color')
const words = ['나', '낫', '레', '닓', '뉂', '갏', '값', '닳', '뒹', '랑', '뢍', '뢊', '멸', '뭽', '몲', '뷁', '뾇', '븤', '쉢', '쉃', '쉶', '쒏', '쒰', '앎', '않', '았', '웳', '줞', '줣', '찋', '촯', '췠', '퀋', '퀢', '퉔', '퉸', '퓀', '펢', '퐸', '핧', '햛', '혉']

module.exports.run = async (mu, input, pars) => {
  let startEmb = new API.RichEmbed()
    .setColor(randomHexColor())
    .setTitle('게임방법')
    .setDescription('1. 5초뒤에 이 임베드에서 문장을 제시합니다\n2. 문장을 보고 빠르게 입력하여 보냅니다\n3. 가장 먼저 입력하여 보낸 사람이 승리!\n\nps. 양심껏 복붙은 하지맙시다')
    .setFooter('5초뒤 문장 제시!')
  input.channel.send(startEmb).then((thi) => {
    let time = 5
    for (let counter = 0; counter < 5; counter++) {
      setTimeout(() => {
        time--
        startEmb.setFooter(time + '초뒤 문장 제시')
        thi.edit(startEmb)
      }, counter * 1000)
    }
    setTimeout(() => {
      let sentence = ''
      for (let countter = 0; countter < 10; countter++) {
        sentence += words[Math.floor(Math.random() * words.length)]
      }
      let ingameEmb = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle('짜잔')
        .setDescription('\'' + sentence + '\'를 입력하세요!')
      thi.edit(ingameEmb)
      const filter = (message) => message.content === sentence
      input.channel.awaitMessages((filter), {
        max: 1
      }).then((collected) => {
        let finishEmb = new API.RichEmbed()
          .setColor(randomHexColor())
          .setTitle('게임종료!')
          .setDescription('**' + collected.first().author.username + '** 님이 우승하셨습니다!')
        thi.edit(finishEmb)
      })
    }, 5000)
  })
}

module.exports.help = {
  name: '타자대결'
}
