const API = require("discord.js");
const mute = require("../Saved/UsersCoin.json");
const cmds = require("fs");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {

    let Slot1; // 첫번째 슬롯 값의 대한 메세지 스트링
    let Slot2; // 두번째 슬롯 값의 대한 메세지 스트링
    let Slot3; // 세번째 슬롯 값의 대한 메세지 스트링
    let SlotMax = 7; // 생성될 슬롯 값의 최대값
    let SlotResult; // 슬롯 123 값을 비교한 결과의 대한 메세지 스트링
    let Random_Number1 = Math.floor(Math.random() * (SlotMax)) + 0; // 첫번째 슬롯 값 추출
    let Random_Number2 = Math.floor(Math.random() * (SlotMax)) + 0; // 두번째 슬롯 값 추출
    let Random_Number3 = Math.floor(Math.random() * (SlotMax)) + 0; // 세번째 슬롯 값 추출
   
    // 첫번째 슬롯 값의 대한 메세지 스트링
    if (Random_Number1 == 0) {
        Slot1 = ":zero:";
    } else if (Random_Number1 == 1) {
        Slot1 = ":one:";
    } else if (Random_Number1 == 2) {
        Slot1 = ":two:";
    } else if (Random_Number1 == 3) {
        Slot1 = ":three:";
    } else if (Random_Number1 == 4) {
        Slot1 = ":four:";
    } else if (Random_Number1 == 5) {
        Slot1 = ":five:";
    } else if (Random_Number1 == 6) {
        Slot1 = ":six:";
    } else if (Random_Number1 == 7) {
        Slot1 = ":seven:";
    }

    // 두번째 슬롯 값의 대한 메세지 스트링
    if (Random_Number2 == 0) {
        Slot2 = ":zero:";
    } else if (Random_Number2 == 1) {
        Slot2 = ":one:";
    } else if (Random_Number2 == 2) {
        Slot2 = ":two:";
    } else if (Random_Number2 == 3) {
        Slot2 = ":three:";
    } else if (Random_Number2 == 4) {
        Slot2 = ":four:";
    } else if (Random_Number2 == 5) {
        Slot2 = ":five:";
    } else if (Random_Number2 == 6) {
        Slot2 = ":six:";
    } else if (Random_Number2 == 7) {
        Slot2 = ":seven:";
    }
    
    // 세번째 슬롯 값의 대한 메세지 스트링
    if (Random_Number3 == 0) {
        Slot3 = ":zero:";
    } else if (Random_Number3 == 1) {
        Slot3 = ":one:";
    } else if (Random_Number3 == 2) {
        Slot3 = ":two:";
    } else if (Random_Number3 == 3) {
        Slot3 = ":three:";
    } else if (Random_Number3 == 4) {
        Slot3 = ":four:";
    } else if (Random_Number3 == 5) {
        Slot3 = ":five:";
    } else if (Random_Number3 == 6) {
        Slot3 = ":six:";
    } else if (Random_Number3 == 7) {
        Slot3 = ":seven:";
    }
    
    // 아래 if문들은 위에서 부터 계산이 중요한 순서대로 정렬되야 정상적으로 뮤트코인이 지급됩니다
    if (Slot1 == Slot2 == Slot3 && Slot1 == ":seven:") {
        SlotResult = "끼이야야야야아악!! 777!!! 잭팟이다뮤!!!!!! (기존 보유량에 777배)";
		mute[input.author.id] = {
			mute: mute[input.author.id].mute * 777
        };
        cmds.writeFile("../Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
    } else if (Slot1 == Slot2 == Slot3 && Slot1 == ":zero:") {
        SlotResult = "엌ㅋ 000 실화얔ㅋ (기존 보유량에 0배, ㅅㄱ)";
		mute[input.author.id] = {
			mute: mute[input.author.id].mute * 0
        };
        cmds.writeFile("../Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
    } else if (Slot1 == Slot2 == Slot3) {
        SlotResult = "3슬롯을 맞추는데 성공했다뮤! (+8192 MUC)";
		mute[input.author.id] = {
			mute: mute[input.author.id].mute + 8192
        };
        cmds.writeFile("../Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
    } else if (Slot1 == Slot2 || Slot2 == Slot3) {
        SlotResult = "2슬롯을 연속으로 맞추는데 성공했다뮤! (+2048 MUC)";
		mute[input.author.id] = {
			mute: mute[input.author.id].mute + 2048
        };
        cmds.writeFile("../Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
    } else if (Slot1 == Slot3) {
        SlotResult = "연속으론 아니지만 2슬롯을 맞추는데 성공했다뮤! (1024MUC)";
		mute[input.author.id] = {
			mute: mute[input.author.id].mute + 1024
        };
        cmds.writeFile("../Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
    } else {
        SlotResult = "히익, 운이 없네뮤... (-10MUC)";
		mute[input.author.id] = {
			mute: mute[input.author.id].mute - 10
        };
        cmds.writeFile("../Saved/UsersCoin.json", JSON.stringify(mute), (error) => { if (error) { console.log(error); } });
    }
    let dobakEmb = new API.RichEmbed()
    .setTitle("도박결과:")
    .setAuthor(input.author.username)
    .setColor(randomHexColor())
    .setDescription(`▶ ${Slot1} ${Slot2} ${Slot3}`)
    .setFooter(SlotResult);
    input.channel.send(dobakEmb);
}

module.exports.help = {
  name: "도박",
  description: "가즈아"
}
