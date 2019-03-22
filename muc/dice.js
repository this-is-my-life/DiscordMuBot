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
  let ranNum = Math.floor(Math.random() * (5) + 0)
  let Emb1 = new API.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/530043751901429762/531827699585515530/1.png')
    .setColor(randomHexColor())
  let Emb2 = new API.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/530043751901429762/531827700726235140/2.png')
    .setColor(randomHexColor())
  let Emb3 = new API.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/530043751901429762/531827702785638411/3.png')
    .setColor(randomHexColor())
  let Emb4 = new API.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/530043751901429762/531827703104667669/4.png')
    .setColor(randomHexColor())
  let Emb5 = new API.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/530043751901429762/531827704904024084/5.png')
    .setColor(randomHexColor())
  let Emb6 = new API.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/530043751901429762/531827706107658241/6.png')
    .setColor(randomHexColor())
  input.channel.send(Emb1).then((q1) => {
    setTimeout(() => {
      q1.edit(Emb2).then((q2) => {
        setTimeout(() => {
          q2.edit(Emb3).then((q3) => {
            setTimeout(() => {
              q3.edit(Emb4).then((q4) => {
                setTimeout(() => {
                  q4.edit(Emb5).then((q5) => {
                    setTimeout(() => {
                      if (ranNum === 0) {
                        q5.edit(Emb1)
                      } else if (ranNum === 1) {
                        q5.edit(Emb2)
                      } else if (ranNum === 2) {
                        q5.edit(Emb3)
                      } else if (ranNum === 3) {
                        q5.edit(Emb4)
                      } else if (ranNum === 4) {
                        q5.edit(Emb5)
                      } else if (ranNum === 5) {
                        q5.edit(Emb6)
                      }
                    }, 100)
                  })
                }, 100)
              })
            }, 100)
          })
        }, 100)
      })
    }, 100)
  })
}

module.exports.help = {
  name: '주사위',
  description: '다이스'
}
