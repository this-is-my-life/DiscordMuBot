const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./Saved/warn.json", "utf8"));

module.exports.run = async (mu, input, pars) => {

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  
  if(!input.member.hasPermission("MANAGE_MESSAGES")) return input.reply("You can't do that.");
  let wUser = input.guild.member(input.mentions.users.first()) || input.guild.members.get(pars[0])
  if(!wUser) return input.reply("Couldn't find them yo");
  let warnlevel = warns[wUser.id].warns;

  input.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.help = {
  name: "경고레벨"
}
