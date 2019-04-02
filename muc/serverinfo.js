/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const API = require('discord.js')

module.exports.run = async (mu, input, pars) => {
  let icon = input.guild.iconURL
  let eChannelInfo = new API.RichEmbed()
    .setTitle(`${input.guild.name.toString()} Infomation!`)
    .setDescription(`to. ${input.author.toString()}`)
    .setThumbnail(icon)
    .setColor('#E5748B')
    .addBlankField()
    .addField('Server Name', input.guild.name)
    .addField('Created On', input.guild.createdAt)
    .addField('You Joined', input.member.joinedAt)
    .addField('Total Members', input.guild.memberCount)
  input.channel.send(eChannelInfo)
}

module.exports.help = {
  name: 'serverinfo'
}
