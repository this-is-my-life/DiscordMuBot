PMH Studio μBot
================
Official Discord μBot( Version 5.0 ) Github Repository.
--------------------------------------------------------------
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/943f9f547e1a4ed4b492dcf8037a5e30)](https://app.codacy.com/app/kok4575/DiscordMuBot?utm_source=github.com&utm_medium=referral&utm_content=PMHStudio/DiscordMuBot&utm_campaign=Badge_Grade_Settings)
[![Discord Server](https://discordapp.com/api/guilds/458629337264947221/widget.png?style=shield)](https://discord.io/PMHStudioBots)
[![AppVeyorCI Status](https://ci.appveyor.com/api/projects/status/h79vw2fwy198c98d/branch/μBot-ver5?svg=true)](https://ci.appveyor.com/project/PMHStudio/discordmubot/branch/μBot-ver5)
[![CircleCI Status](https://img.shields.io/circleci/project/github/PMHStudio/DiscordMuBot.svg)](https://circleci.com/gh/PMHStudio/DiscordMuBot)
[![CodeFactor](https://www.codefactor.io/repository/github/pmhstudio/discordmubot/badge)](https://www.codefactor.io/repository/github/pmhstudio/discordmubot)
[![GitHub license](https://img.shields.io/github/license/PMHStudio/DiscordMuBot.svg)](https://github.com/PMHStudio/DiscordMuBot/blob/%CE%BCBot-ver5/LICENSE)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PMHStudio/DiscordMuBot.svg)
![GitHub (pre-)release](https://img.shields.io/github/release/PMHStudio/DiscordMuBot/all.svg)
![Github All Releases](https://img.shields.io/github/downloads/PMHStudio/DiscordMuBot/total.svg)
[![GitHub forks](https://img.shields.io/github/forks/PMHStudio/DiscordMuBot.svg)](https://github.com/PMHStudio/DiscordMuBot/network)
[![GitHub issues](https://img.shields.io/github/issues/PMHStudio/DiscordMuBot.svg)](https://github.com/PMHStudio/DiscordMuBot/issues)
[![MuBot Language](https://img.shields.io/badge/language-javascript-yellow.svg)](https://www.javascript.com)
[![MuBot Using](https://img.shields.io/badge/using-node.js-green.svg)](https://nodejs.org)
[![MuBot Request](https://img.shields.io/badge/request-discord.js-blue.svg)](https://discord.js.org)


- 안녕하세요! PMH Studio의 Studio장! PMH입니다! @PMHStudio
- 이 프로젝트는 [**Discord**](https://discordapp.com)에서 제공하는 [**Discord API**](https://discordapp.com/developers)기반으로 다용도 Bot을 만드는것을 목표로 하는 프로젝트입니다!
- **모든 Projects의 저작권은 특별히 명시되지 않는한 @PMHStudio에게 있습니다.**

## [**Bot Developers' Discord Server!**](https://discord.gg/kEnspqB)
[![Discord Server Invite](https://discordapp.com/api/guilds/458629337264947221/widget.png?style=banner3)](https://discord.io/PMHStudioBots)

### 뮤봇의 작동을 위한 값들입니다! 소스 수정시 참고하세요!
-----------------------------------------------------------
#### 기본요구값 - 뮤봇의 동작을 위하여 **꼭** 필요한 값들입니다 
**muto**
> 디스코드 API에 연결하기 위한 디스코드 에플리케이션 빌트인 봇 토큰입니다
>> https://discordapp.com/developers 에서 발급하실 수 있습니다

**muai**
> Google에서 제작한 Dialogflow에 인공지능 연결을 위한 토큰입니다
>> http://dialogflow.com/ 에서 발급하실 수 있습니다

**prefix, defaultPrefix**
> 프리픽스값과 기본값입니다
>> 프리픽스란, 봇을 호출할때 (프리픽스)(명령어)순으로 호출할때의 프리픽스 값입니다
>> 즉, mu!help에서 mu!는 프리픽스 help는 명령어입니다

#### 저장문서 호출 - 중요한 값을 저장하기위한 저장문서들을 호출합니다
**prefixes**
> 서버에서 커스터마이징한 프리픽스를 저장하기 위한 문서입니다
>> 문서의 경로 기본값은 (/Saved/ServersPrefix.json)입니다

**mute**
> 뮤트코인 사용자의 코인정보를 저장하기 위한 문서입니다
>> 문서의 경로 기본값은 (/Saved/UsersCoin.json)입니다 

#### 모듈호출 - 뮤봇을 동작을 보조하기 위한 모듈을 호출합니다
**API**
> 가장 중요한 모듈로서 디스코드 API에 접속하기 위한 모듈입니다
>> 저희 뮤봇은 API에 접속하기 위하여 Discord.js 모듈을 사용중입니다

**cmds**
> node.js의 파일시스템("fs")입니다.
>> 주로 커멘드 파일(/muc 디렉터리)를  불러오기위한 모듈입니다
>> 그 외에도 뮤트코인 저장문서 호출, 프리픽스 저장문서 호출등을 담당합니다

**apiai**
> Google에서 제작한 Dialogflow를 호출하여 muai값을 받아 ai값으로 넘깁니다
>> Dialogflow를 호출함으로서 인공지능을 사용하여 지능을 가진 메세징이 가능해 집니다
>> 그 외에도 mu!심심해, mu!안녕 등을 담당합니다

#### 명령어 호출 - 뮤봇의 뇌! 명령어를 호출합니다
**jsfile**
> (/muc/) 디렉토리에 존제하는 파일중 .js 확장자를 가진 파일만을 지칭합니다
>> 예시로 /muc/help.js가 있을때 help.js는 jsfile에 속합니다

**filename(s)**
> (/muc/) jsfile들의 이름중 .js를 뺀 이름값입니다
>> 예시로 /muc/help.js가 있을때 help가 filename에 속합니다

#### 클라이먼트 호출 - 뮤봇의 몸! 클라이먼트를 호출합니다
**mu**
> 뮤봇 자기 자신을 지칭하는 값입니다!
>> 당연히 가장 중요하겠죠?

#### 사용자 입력 정보 추출 - 사용자가 입력한 정보를 간추리고 추출합니다
**input**
> 입력값입니다! 이 값은 아무런 과정없이 입력된 그대로를 지칭합니다!

**msgAr**
> input값을 스페이스바(" ")로 나눈 값들입니다!
>> 예를 들어 mu!sayd Test가 input값일때 mu!sayd와 Test는 msgAr에 들어갑니다

**i**
> msgAr중 맨 앞 값을 말합니다
>> 즉, mu!sayd와 Test가 msgAr일때 mu!sayd는 i값 입니다

**pars**
> 이번엔 반대로 msgAr중 맨 앞 값이 아닌 모든 값을 말합니다
>> 즉, mu!sayd와 Test와 테스트와 ㅎㅇ가 msgAr일때 Test, 테스트, ㅎㅇ는 pars에 들어갑니다

**verify**
> 앞서 말한 i값에서 쩌어어 앞에서 말한 prefix를 제외한 값을 말합니다
>> 즉, mu!sayd가 i값일때 prefix인 mu!를 제외하여 sayd라는 값은 verify값입니다
>> 이렇게 하여 프리픽스와 pars를 제외한 명령어 부분을 알아넸네요!

#### 명령어 실행! - 음... 이건 행동이 되겠네요
**cmdFile**
> 앞서 말한 verify값을 가진 명령어를 실행합니다!
>> 정확하게는 cmdFile.run을 사용해서 실행하죠
>>> 물론 mu, input, pars 값들을 같이 보냅니다!

**aiRequest**
> 앞서 말한 verify값을 가지고 Google의 Dialogflow에 보냅니다!
>> 이로서 인공지능을 가지게 되어 input값의 대한 대답을 하게됩니다!

###### 여기까지 뮤봇의 값들을 알아봤습니다. 하지만, 이 글은 요약의 요약을 한 요약본일 뿐입니다!
> 사용된 소스들
>> [Discord.js](https://discord.js.org/#/): 대부분의 값들을 사용하였습니다
>> [npm:apiai](https://www.npmjs.com/package/apiai): 모든 값들을 사용하였습니다
>> [fs](https://www.npmjs.com/package/fs): 일부분의 값들을 사용하였습니다
> 생략된 값들
>> 뮤트코인 구성값
>> 임베드 이름값

--------------------------------------------------------------------------------------

### Project Dir
> PMH Studio
>> Projects
>>> Programs
>>>> Discord bot
>>>>> proj-μBot
>>>>>> [Branch: Version 5.0](https://github.com/PMHStudio/DiscordMuBot/branches)

### Discord.js Included
### Node.js Included

-------------------------------------------------------------

- Copyright &copy; 2018. PMH Studio. [MIT Licensed.](https://github.com/PMHStudio/DiscordMuBot/blob/%CE%BCBot-ver5/LICENSE)
