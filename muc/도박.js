/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const randomHexColor = require('random-hex-color')
const superagent = require('superagent')

module.exports.run = async (mu, input, pars) => {
  let UsersCoin
  superagent.get('https://api.jsonbin.io/b/5c62c948ad5128320af85de0/latest').then((res) => {
    UsersCoin = res.body
    if (!UsersCoin[input.author.id]) {
      UsersCoin[input.author.id] = {
        UsersCoin: 0
      }
    }

    let Slot1 // 첫번째 슬롯 값의 대한 메세지 스트링
    let Slot2 // 두번째 슬롯 값의 대한 메세지 스트링
    let Slot3 // 세번째 슬롯 값의 대한 메세지 스트링
    let SlotMax = 100 // 생성될 슬롯 값의 최대값
    let SlotResult // 슬롯 결과
    let Ran1 = Math.floor(Math.random() * (SlotMax)) + 0 // 첫번째 슬롯 값 추출
    let Ran2 = Math.floor(Math.random() * (SlotMax)) + 0 // 두번째 슬롯 값 추출
    let Ran3 = Math.floor(Math.random() * (SlotMax)) + 0 // 세번째 슬롯 값 추출

    // 첫번째 슬롯 값의 대한 메세지 스트링
    if (Ran1 <= 20) {
      Slot1 = ':zero:'
    } else if (Ran1 <= 40) {
      Slot1 = ':one:'
    } else if (Ran1 <= 50) {
      Slot1 = ':two:'
    } else if (Ran1 <= 70) {
      Slot1 = ':three:'
    } else if (Ran1 <= 80) {
      Slot1 = ':four:'
    } else if (Ran1 <= 95) {
      Slot1 = ':five:'
    } else if (Ran1 <= 99) {
      Slot1 = ':six:'
    } else if (Ran1 === 100) {
      Slot1 = ':seven:'
    }

    // 두번째 슬롯 값의 대한 메세지 스트링
    if (Ran2 <= 10) {
      Slot2 = ':zero:'
    } else if (Ran2 <= 20) {
      Slot2 = ':one:'
    } else if (Ran2 <= 40) {
      Slot2 = ':two:'
    } else if (Ran2 <= 45) {
      Slot2 = ':three:'
    } else if (Ran2 <= 60) {
      Slot2 = ':four:'
    } else if (Ran2 <= 75) {
      Slot2 = ':five:'
    } else if (Ran2 <= 85) {
      Slot2 = ':six:'
    } else if (Ran2 <= 100) {
      Slot2 = ':seven:'
    }

    // 세번째 슬롯 값의 대한 메세지 스트링
    if (Ran3 <= 10) {
      Slot3 = ':zero:'
    } else if (Ran3 <= 20) {
      Slot3 = ':one:'
    } else if (Ran3 <= 30) {
      Slot3 = ':two:'
    } else if (Ran3 <= 40) {
      Slot3 = ':three:'
    } else if (Ran3 <= 50) {
      Slot3 = ':four:'
    } else if (Ran3 <= 60) {
      Slot3 = ':five:'
    } else if (Ran3 <= 70) {
      Slot3 = ':six:'
    } else if (Ran3 <= 100) {
      Slot3 = ':seven:'
    }

    // 아래 if문들은 위에서 부터 계산이 중요한 순서대로 정렬되야 정상적으로 뮤트코인이 지급됩니다
    if (Slot1 === Slot2 && Slot2 === Slot3 && Slot1 === ':seven:') {
      SlotResult = '끼이야야야야아악!! 777!!! 잭팟이다뮤!!!!!! [기존 보유량에 777배]'
      UsersCoin[input.author.id] = {
        UsersCoin: UsersCoin[input.author.id].UsersCoin * 777
      }
    } else if (Slot1 === Slot2 && Slot2 === Slot3 && Slot1 === ':zero:') {
      SlotResult = '엌ㅋ 000 실화얔ㅋ [기존 보유량에 0배, ㅅㄱ]'
      UsersCoin[input.author.id] = {
        UsersCoin: UsersCoin[input.author.id].UsersCoin * 0
      }
    } else if (Slot1 === Slot2 && Slot2 === Slot3) {
      SlotResult = '3슬롯을 맞추는데 성공했다뮤! [+8192 MUC]'
      UsersCoin[input.author.id] = {
        UsersCoin: UsersCoin[input.author.id].UsersCoin + 8192
      }
    } else if (Slot1 === Slot2 || Slot2 === Slot3) {
      SlotResult = '2슬롯을 연속으로 맞추는데 성공했다뮤! [+2048 MUC]'
      UsersCoin[input.author.id] = {
        UsersCoin: UsersCoin[input.author.id].UsersCoin + 2048
      }
    } else if (Slot1 === Slot3) {
      SlotResult = '연속으론 아니지만 2슬롯을 맞추는데 성공했다뮤! [+1024MUC]'
      UsersCoin[input.author.id] = {
        UsersCoin: UsersCoin[input.author.id].UsersCoin + 1024
      }
    } else {
      let Ran4 = Math.floor(Math.random() * (2)) + 0
      if (Ran4 === 2) {
        SlotResult = '쾅쾅, 경찰이다뮤! **잡았다 요놈** [-4444 MUC(벌금)]'
        UsersCoin[input.author.id] = {
          UsersCoin: UsersCoin[input.author.id].UsersCoin - 4444
        }
      } else {
        SlotResult = '히익, 운이 없네뮤... 국세청에서 세금을 들고갔다뮤.. [-100 MUC(세금)]'
        UsersCoin[input.author.id] = {
          UsersCoin: UsersCoin[input.author.id].UsersCoin - 100
        }
      }
    }

    superagent.put('https://api.jsonbin.io/b/5c62c948ad5128320af85de0').send(UsersCoin).catch((err) => console.log(err))
    let dobakEmb = new API.RichEmbed()
      .setTitle('도박결과:')
      .setAuthor(input.author.username)
      .setColor(randomHexColor())
      .setDescription(`▶ ${Slot1} ${Slot2} ${Slot3}`)
      .setFooter(SlotResult)
    input.channel.send(dobakEmb)
  })
}

module.exports.help = {
  name: '도박',
  description: '가즈아'
}
