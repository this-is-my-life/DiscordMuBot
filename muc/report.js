/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')

module.exports.run = async (mu, input, pars) => {
  let reportTo = input.guild.member(input.mentions.users.first() || input.guild.members.get(pars[0]))
  if (!reportTo) {
    input.channel.send('User Not Found').then((thismsg) => thismsg.delete(1000))
    return input.delete().catch((err) => { console.log(err) })
  }
  let reportReason = pars.join(' ').slice(22)
  if (!input.member.hasPermission('MANAGE_MESSAGES')) { return input.channel.send(`<@${input.author.id}> has NO PERMISSION: MANAGE_MESSAGES`) }
  if (reportTo.hasPermission('MANAGE_MESSAGES')) {
    return input.channel.send('Error: Target has Same or High PERMISSION')
  }
  let Ricon = input.guild.iconURL
  let eReportEmb = new API.RichEmbed()
    .setTitle(`${input.guild.name.toString()} - REPORTed`)
    .setDescription(`Reported at ${input.createdAt}`)
    .setThumbnail(Ricon)
    .setColor('#fb3030')
    .addBlankField()
    .addField('Report To', `${reportTo} (ID: ${reportTo.id})`)
    .addField('Report By', `${input.author} (ID: ${input.author.id})`)
    .addField('Reported Channel', input.channel)
    .addField('Report Reason', `${reportReason}.`)
  input.delete().catch((err) => { console.log(err) })
  input.guild.systemChannel.send(eReportEmb)
}

module.exports.help = {
  name: 'r'
}
