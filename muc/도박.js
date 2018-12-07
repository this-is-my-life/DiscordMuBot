const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {

    let Random_Number1 = Math.floor(Math.random() * 6);
    let Random_Number2 = Math.floor(Math.random() * 6);
    let Random_Number3 = Math.floor(Math.random() * 6);
    let kSummonVoice = new API.RichEmbed()
    let N11;
    let N12;
   
    if (Random_Number1 == 1) {
        N11 = "▶:one:";
    };
    
    if (Random_Number1 == 2) {
        N11 = "▶:two:";
    };
    
    if (Random_Number1 == 3) {
        N11 = "▶:three:";
    };
    
    if (Random_Number1 == 4) {
        N11 = "▶:four:";
    };
    
    if (Random_Number1 == 5) {
        N11 = "▶:five:";
    };

    if (Random_Number2 == 1) {
        N12 = "▶:one:";
    };
    
    if (Random_Number2 == 2) {
        N12 = "▶:two:";
    };
    
    if (Random_Number2 == 3) {
        N12 = "▶:three:";
    };
    
    if (Random_Number2 == 4) {
        N12 = "▶:four:";
    };
    
    if (Random_Number2 == 5) {
        N12 = "▶:five:";
    };
    
    let dobakEmb = new API.RichEmbed()
    .setTitle("도박결과:")
    .setDescription(`${N11}`, `${N12}`);
    input.channel.send(dobakEmb);
}

module.exports.help = {
  name: "도박",
  description: "가즈아"
}
