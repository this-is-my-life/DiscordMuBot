const API = require("discord.js");

module.exports.run = async (mu, input, pars) => {

    let Random_Number1 = Math.floor(Math.random() * 6);
    let Random_Number2 = Math.floor(Math.random() * 6);
    let Random_Number3 = Math.floor(Math.random() * 6);
    let kSummonVoice = new API.RichEmbed()

   
    if (Random_Number1 == 1) {
        let N11 = "▶:one  :";
    };
    
    if (Random_Number1 == 2) {
        let N11 = "▶:two  :";
    };
    
    if (Random_Number1 == 3) {
        let N11 = "▶:three  :";
    };
    
    if (Random_Number1 == 4) {
        let N11 = "▶:four  :";
    };
    
    if (Random_Number1 == 5) {
        let N11 = "▶:five  :";
    };

    if (Random_Number2 == 1) {
        let N12 = "▶:one  :";
    };
    
    if (Random_Number2 == 2) {
        let N12 = "▶:two  :";
    };
    
    if (Random_Number2 == 3) {
        let N12 = "▶:three  :";
    };
    
    if (Random_Number2 == 4) {
        let N12 = "▶:four  :";
    };
    
    if (Random_Number2 == 5) {
        let N12 = "▶:five  :";
    };
    
    let dobakEmb = new API.RichEmbed()
    .setTitle("도박결과  :")
    .setDiscription(`${N11}`, `${N12}`);
    input.channel.send(dobakEmb);
}

module.exports.help = {
  name: "도박",
  description: "가즈아"
}
