/*
  μBot v7.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')
const fs = require('fs')
const ms = require('ms')
let warns = JSON.parse(fs.readFileSync('./Saved/warn.json', 'utf8'))

module.exports.run = async (mu, input, pars) => {
  //! warn @daeshan <reason>
  if (!input.member.hasPermission('MANAGE_MESSAGES')) return input.reply('No can do pal!')
  let wUser = input.guild.member(input.mentions.users.first()) || input.guild.members.get(pars[0])
  if (!wUser) return input.reply("Couldn't find them yo")
  if (wUser.hasPermission('MANAGE_MESSAGES')) return input.reply('They waaaay too kewl')
  let reason = pars.join(' ').slice(22)

  if (!warns[wUser.id]) {
    warns[wUser.id] = {
      warns: 0
    }
  }

  warns[wUser.id].warns++

  fs.writeFile('./Saved/warn.json', JSON.stringify(warns), (err) => {
    if (err) { console.log(err) }
  })

  let warnEmbed = new API.RichEmbed()
    .setDescription('Warns')
    .setAuthor(input.author.username)
    .setColor('#fc6400')
    .addField('Warned User', `<@${wUser.id}>`)
    .addField('Warned In', input.channel)
    .addField('Number of Warnings', warns[wUser.id].warns)
    .addField('Reason', reason)

  let warnchannel = input.guild.systemChannel
  if (!warnchannel) return input.reply("Couldn't find channel")

  warnchannel.send(warnEmbed)

  if (warns[wUser.id].warns === 3) {
    let muterole = input.guild.roles.find(`name`, 'muted')
    if (!muterole) return input.reply('You should create that role dude.')

    let mutetime = '3h'
    await (wUser.addRole(muterole.id))
    input.channel.send(`<@${wUser.id}> has been temporarily muted`)

    setTimeout(function () {
      wUser.removeRole(muterole.id)
      input.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if (warns[wUser.id].warns === 5) {
    input.guild.member(wUser).ban(reason)
    input.reply(`<@${wUser.id}> has been banned.`)
  }
}

module.exports.help = {
  name: 'warn'
}
