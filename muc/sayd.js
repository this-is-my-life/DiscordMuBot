/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

module.exports.run = async (mu, input, pars) => {
  let say = pars.join(' ').slice(0)
  input.delete().catch((err) => { console.log(err) })
  input.channel.send(`${say}`)
}

module.exports.help = {
  name: '지우고따라해'
}
