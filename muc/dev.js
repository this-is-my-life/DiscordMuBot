/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

module.exports.run = async (mu, input, pars, prefix) => {
  if (input.author.id === process.env.owner || input.author.id === 527746745073926145 || input.author.id === 403025222921486338 || input.author.id === 453554012353069090) {
    let say = pars.slice(1).join(' ')
    let cmd = pars[0]
    if (cmd === '이벤트') {
      if (!say) {
        mu.user.setActivity(`Messages | ${prefix}help`, { type: 'WATCHING' })
        input.channel.send('이벤트 초기화 완료!')
      }
      mu.user.setActivity(say, { url: 'https://www.twitch.tv/pmhstudio', type: 'STREAMING' })
      input.channel.send(`이벤트 적용완료! (뮤봇 상태바 확인) : "${say}"`)
    } else if (cmd === '그린') {
      mu.user.setStatus('online')
    } else if (cmd === '옐로') {
      mu.user.setStatus('idle')
    } else if (cmd === '레드') {
      mu.user.setStatus('dnd')
    } else if (cmd === '그레이') {
      mu.user.setStatus('invisible')
    }
  } else {
    input.channel.send(`<@${input.author.id}>\n어헛! 어디서 감히 관리자 행세를!`)
  }
}

module.exports.help = {
  name: '관',
  description: '관리자의권한으로'
}
