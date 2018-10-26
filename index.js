const Discord = require('discord.js');
const Mubot = new Discord.Client();
const Token = '  ';

// ''와 ``를 잘구분하자 - 자신에게 하는말

Mubot.on('ready', () => {
    Mubot.user.setActivity('뮤! 도와줘 \| 뮤는 지금 Online뮤~★', { type: 'PLAYING' }); //뮤봇 게임중
    console.log(`\n┌───────────────────ⓒ\n│ μBot Server　　　　　　　　　　　　　│\n│             Made By PMH Studio / PMH  │\n│---------------------------------------│\n│ 사용자 총 ${Mubot.users.size}명　　　　　　　　　　　　│\n│ ${Mubot.guilds.size}개 서버에 연결됨!　　　 　　　　　　 │\n\n\n\n\n\n\n`);
});

Mubot.on('message', message => {

    console.log(`[Ｍ] ${message.content}`); // 콘솔창에 로깅
    if (!message.guild) return; // 승인

// 커멘드 부분 ----------------------------------------------------------------

    //Hello.E
    if (message.content === 'mu hi' || message.content === 'mu hello' || message.content === 'mubot hi' || message.content === 'mubot hello' || message.content === 'hi mu' || message.content === 'hello mu' || message.content === 'hi mubot' || message.content === 'hello mubot') {
        console.log(`[Ｃ] Hello.E`)
        message.channel.send(`Hi ${message.author.toString()}...Mu!`);
        return;
    }

    //Hello.K
    else if (message.content === '안녕! 뮤' || message.content === '뮤 안녕!' || message.content === '뮤! 안녕!') {
        console.log(`[Ｃ] Hello.K`);
        message.channel.send(`좋은 하루다뮤~${message.author.toString()}!`);
        return;
    }

    //Ping.EL
    else if (message.content === 'p') {
        console.log(`[Ｃ] Ping.EL`);
        message.channel.send('P!');
        return;
    }

    //Ping.E
    else if (message.content === 'ping') {
        console.log(`[Ｃ] Ping.E`)
        message.channel.send('Pong!');
        return;
    }

    //Ping.K
    else if (message.content === '핑') {
        console.log(`[Ｃ] Ping.K`);
        message.channel.send('**크퐁!**');
        message.channel.send('... ㅈㅅ;;');
        return;
    }

    //Avatar
    else if (message.content === 'what is my avatar'  || message.content === 'avatar' || message.content === 'my avatar' || message.content === '내 프사' || message.content === '내 프로필사진' || message.content === '프사' || message.content === '프로필사진') {
        console.log(`[Ｃ] Avatar`);
        message.reply(message.author.avatarURL);
        return;
    }

    //Okay.K
    else if (message.content === 'ㅇㅋ') {
        console.log(`[Ｃ] Okay.K`);
        message.channel.send('~~뭔진 모르지만 암튼~~ :thumbsup:이다뮤!');
        return;
    }

    //Yes.K
    else if (message.content === 'ㅇ') {
        console.log(`[Ｃ] Yes.K`);
        message.channel.send(`${message.author.toString()}가 :okay_hand:이라네뮤!`);
        return;
    }

    //ThatsNo.K
    else if (message.content === '그건 아님' || message.content === '아님') {
        console.log(`[Ｃ] ThatsNo.K`);
        message.channel.send('음... 그건 아닌듯하뮤... :thumbsdown:');
        return;
    }

    else if (message.content === 'ㄱㄷ' || message.content === '기다리삼') {
        message.channel.send(`X를 눌러 ${message.author.toString()}를 기다린다뮤~★`);
        return;
    }

    else if (message.content === 'X' || message.content === 'x') {
        message.channel.send(`${message.author.toString()}님이 조의를 표했다뮤!`);
        return;
    }

    else if (message.content === '뭐 알았음') {
        message.channel.send('¯\\_(ツ)_/¯');
        return;
    }

    else if (message.content === '따라와') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply('접속했다뮤~');
            })
            .catch(console.log);
        } else {
            message.reply('뮤...? 어딜따라오란 말인가뮤~?');
        }
    }

    else if (message.content === 'summon') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply('Here I\'m...Mu!');
            })
            .catch(console.log);
        } else {
            message.reply('Mu...? Where r u..?');
        }
    }

// 커멘드 부분 끝 --------------------------------------------------------------

    if (message.content.indexOf("<@"+Mubot.user.id) === 0 || message.content.indexOf("<@!"+Mubot.user.id) === 0) { // 맨션당했을때
        message.channel.send(`뮤유~?`);
        return;
    }
    return;

});

// 새 맴버 가입시
Mubot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`@everyone! ${member}님이다뮤~★`);
});

// 에러 찾기용
process.on('uncaughtException', (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
    console.error('Uncaught Exception: ', errorMsg);
});

process.on('unhandledRejection', err => {
    console.error('Uncaught Promise Error: ', err);
});

Mubot.login(Token);
