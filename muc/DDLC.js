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
  let c
  let b
  let z
  let t

  const filter = (m) => m.author.id === input.author.id
  input.channel.send('캐릭터를 1분 안에 선택해달라뮤! [취소를 원할경우 `취소`라고 말해달라뮤!]\n캐릭터 리스트 : [사유리, 모니카, 나츠키, 유리]').then((q) => q.delete(60000))
  input.channel.awaitMessages(filter, {
    max: 1,
    time: 60000
  }).then((collected) => {
    let ghinput = collected.first().content
    collected.delete()
    if (ghinput === '취소') { input.channel.send('취소됬다뮤!').then((q) => q.delete(2000)) } else {
      if (ghinput === '사유리') {
        c = 's'
      } else {
        if (ghinput === '모니카') {
          c = 'm'
        } else {
          if (ghinput === '나츠키') {
            c = 'n'
          } else {
            if (ghinput === '유리') {
              c = 'y'
            } else {
              if (ghinput === 'PMH') {
                input.channel.send('PMH Studio / WSF가 숨긴 이스터에그를 발견했다뮤!\n내용 : (사실 PMH는 DokiDoki의 사용되지 않은 캐릭터이다...)')
                return
              } else {
                input.channel.send('존재하지 않는 캐릭터다뮤!')
                return
              }
            }
          }
        }
      }

      const filter = (m) => m.author.id === input.author.id
      input.channel.send('캐릭터 자세를 1분 안에 선택해달라뮤! [취소를 원할경우 `취소`라고 말해달라뮤!]\n[캐릭터가 사유리 일경우: (1b, 1, 2b, 2), 캐릭터가 모니카 일경우: (1, 2), 캐릭터가 나츠키 일경우: (1b, 1, 2b, 2), 캐릭터가 유리 일경우: (1b, 1, 2b, 2)]').then((q) => q.delete(60000))
      input.channel.awaitMessages(filter, {
        max: 1,
        time: 60000
      }).then((collected) => {
        let cbody = collected.first().content
        collected.delete()
        if (cbody === '취소') { input.channel.send('취소됬다뮤!').then((q) => q.delete(2000)) } else {
          if (cbody === '1') {
            b = '1'
          } else {
            if (cbody === '1b') {
              b = '1b'
            } else {
              if (cbody === '2') {
                b = '2'
              } else {
                if (cbody === '2b') {
                  b = '2b'
                } else {
                  input.channel.send('존재하지 않는 자세다뮤!!')
                  return
                }
              }
            }
          }

          const filter = (m) => m.author.id === input.author.id
          input.channel.send('배경화면을 1분 안에 선택해달라뮤! [취소를 원할경우 `취소`라고 말해달라뮤!]\n[침실, 교실, 책장, 동아리실, 복도, 집, 집앞, 사유리 침실]').then((q) => q.delete(60000))
          input.channel.awaitMessages(filter, {
            max: 1,
            time: 60000
          }).then((collected) => {
            let backg = collected.first().content
            collected.delete()
            if (backg === '취소') { input.channel.send('취소됬다뮤!').then((q) => q.delete(2000)) } else {
              if (backg === '침실') {
                z = 'bedroom'
              } else {
                if (backg === '교실') {
                  z = 'class'
                } else {
                  if (backg === '책장') {
                    z = 'closet'
                  } else {
                    if (backg === '동아리실') {
                      z = 'club'
                    } else {
                      if (backg === '복도') {
                        z = 'corridor'
                      } else {
                        if (backg === '집') {
                          z = 'house'
                        } else {
                          if (backg === '집앞') {
                            z = 'residential'
                          } else {
                            if (backg === '사유리 침실') {
                              z = 'sayori_bedroom'
                            } else {
                              input.channel.send('존재하지 않는 배경화면이다뮤!')
                              return
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

              const filter = (m) => m.author.id === input.author.id
              input.channel.send(`${ghinput}가 말할 텍스트를 적어달라뮤! [취소를 원할경우 1분을 기다리라뮤!]\n[한국어는 지원되지 않는다뮤....]`).then((q) => q.delete(60000))
              input.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
              }).then((collected) => {
                let textinput = collected.first().content
                collected.delete()
                if (textinput === '취소') { input.channel.send('취소됬다뮤!').then((q) => q.delete(2000)) } else {
                  t = textinput

                  input.channel.send('이미지가 로딩되는동안 시간이 걸릴수있다뮤!')
                  superagent.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=${c}&body=${b}&face=${c}&background=${z}&text=${t}`)
                    .then((res) => {
                      let hentaiEmb = new API.RichEmbed()
                        .setImage(res.body.message)
                        .setColor(randomHexColor())
                        .setFooter('Powered by nekobot.xyz')
                      input.channel.send(hentaiEmb)
                    }).catch((err) => { if (err) { console.log(err) } })
                }
              })
            }
          })
        }
      })
    }
  })
}

module.exports.help = {
  name: 'ddlc',
  description: '도키도키'
}
