/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const randomHexColor = require('random-hex-color')
const reactions = ['🖐', '🤞', '✌', '👊', '✋']

module.exports.run = async (mu, input, pars) => {
  let startEmb = new API.RichEmbed()
    .setColor(randomHexColor())
    .setTitle('게임방법')
    .setDescription('1. 5초뒤에 이 메세지에 반응(리엑션)이 달립니다\n2. 리엑션이 달리면 빠르게 리엑션을 누릅니다\n3. 가장 먼저 리엑션을 누른사람이 승리!')
    .setFooter('5초뒤 리엑션!')
  input.channel.send(startEmb).then((thi) => {
    let time = 5
    for (let counter = 0; counter < 5; counter++) {
      setTimeout(() => {
        time--
        startEmb.setFooter(time + '초뒤 리엑션!')
        thi.edit(startEmb)
      }, counter * 1000)
    }
    setTimeout(() => {
      let reacting = reactions[Math.floor(Math.random() * reactions.length)]
      let ingameEmb = new API.RichEmbed()
        .setColor(randomHexColor())
        .setTitle('짜잔')
        .setDescription('빨리 ' + reacting + '를 리엑션하세요!')
      thi.edit(ingameEmb)
      for (let countter = 0; countter < reactions.length; countter++) {
        thi.react(reactions[countter])
      }
      const filter = (reaction, user) => reaction.emoji.name === reacting && user.id !== mu.user.id
      thi.awaitReactions(filter, {
        maxUsers: 1
      }).then((collected) => {
        let finishEmb = new API.RichEmbed()
          .setColor(randomHexColor())
          .setTitle('게임종료!')
          .setDescription('**' + collected.array()[0].users.array()[1].username + '** 님이 우승하셨습니다!')
        thi.edit(finishEmb)
      })
    }, 5000)
  })
}

module.exports.help = {
  name: '빨리리엑'
}
