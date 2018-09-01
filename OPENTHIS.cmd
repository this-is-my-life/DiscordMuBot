@echo off
mode con cols=79 lines=29
color 0F
echo              ____________________________________________________
echo             /                                                    \
echo            ^|    _____________________________________________     ^|
echo            ^|   ^|                                             ^|    ^|
echo            ^|   ^|  Discord MuBot Server Stater                ^|    ^|
echo            ^|   ^|  -----------------------------              ^|    ^|
echo            ^|   ^|                                             ^|    ^|
echo            ^|   ^|  Select_____________________                ^|    ^|
echo            ^|   ^|  If you run First: Press 0                  ^|    ^|
echo            ^|   ^|  If NOT: Press ENTER or 1                   ^|    ^|
echo            ^|   ^|                                             ^|    ^|
echo            ^|   ^|                                             ^|    ^|
echo            ^|   ^|                                             ^|    ^|
echo            ^|   ^|   *ascii Art by asciiworld.com              ^|    ^|
echo            ^|   ^|   Insert^>_                                  ^|    ^|
echo            ^|   ^|                                             ^|    ^|
echo            ^|   ^|_____________________________________________^|    ^|
echo            ^|                                                      ^|
echo             \_____________________________________________________/
echo                    \_______________________________________/
echo                 _______________________________________________
echo              _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_
echo           _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_
echo        _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_
echo     _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_
echo  _-'.-.-.-.-.-. .---.-. .-----------------------------. .-.---. .---.-.-.-.`-_
echo :-----------------------------------------------------------------------------:
echo `---._.-----------------------------------------------------------------._.---'
set st=1
set /p st=
if %st% == 0 goto maketoken
if %st% == 1 goto run

:maketoken
cls
mode 100
node -v
cls
if %ERRORLEVEL% == 9009 {
	echo  __     _     __  __     ______     ______     ______ 
	echo /\ \^"-./ \   /\ \/\ \   /\  == \   /\  __ \   /\__  _\
	echo \ \ \-./\ \  \ \ \_\ \  \ \  __^<   \ \ \/\ \  \/_/\ \/
	echo  \ \_\ \ \_\  \ \_____\  \ \_____\  \ \_____\    \ \_\
	echo   \/_/  \/_/   \/_____/   \/_____/   \/_____/     \/_/
	echo ------------------------------------------------------------------------------------
	echo.
	echo    First Run
	echo     - Make Mu will be RUN!
	echo       - Node.js Installation...
	echo.
	echo     You Can Have node.js installation file in node.js Official Site.
	echo     Visit: (Auto) https://nodejs.org/dist/v8.11.4/node-v8.11.4-x64.msi
	echo.
	start https://nodejs.org/dist/v8.11.4/node-v8.11.4-x64.msi
	echo.
	echo     When did you Finished Installation. Press ANY Key.
	pause >nul
	echo.
	echo  __     _     __  __     ______     ______     ______ 
	echo /\ \^"-./ \   /\ \/\ \   /\  == \   /\  __ \   /\__  _\
	echo \ \ \-./\ \  \ \ \_\ \  \ \  __^<   \ \ \/\ \  \/_/\ \/
	echo  \ \_\ \ \_\  \ \_____\  \ \_____\  \ \_____\    \ \_\
	echo   \/_/  \/_/   \/_____/   \/_____/   \/_____/     \/_/
	echo ------------------------------------------------------------------------------------
	echo.
	echo    First Run
	echo     - Make Mu will be RUN!
	echo       - Discord.js Installation...
	echo.
	echo    Press ANY Key To Start Install Discord.js...
	pause <nul
	npm i discord.js
	npm i ffmpeg-binaries
	npm i opusscript
	npm i node-opus
} 
cls
echo  __     _     __  __     ______     ______     ______ 
echo /\ \^"-./ \   /\ \/\ \   /\  == \   /\  __ \   /\__  _\
echo \ \ \-./\ \  \ \ \_\ \  \ \  __^<   \ \ \/\ \  \/_/\ \/
echo  \ \_\ \ \_\  \ \_____\  \ \_____\  \ \_____\    \ \_\
echo   \/_/  \/_/   \/_____/   \/_____/   \/_____/     \/_/
echo ------------------------------------------------------------------------------------
echo.
echo    First Run
echo     - Make Mu will be RUN!
echo       - Insert Token...
echo.
echo     You Can Have Bot Token in Discord Developer Site.
echo     Visit: https://discordapp.com/login?redirect_to=^%2Fdevelopers^%2Fapplications^%2F
echo     Login ^> Create an applications (or Yours Application) ^> Left Side Bar: Bot ^> Token
echo.
echo.
set /p token=    And Insert Token Here!: 
echo ^{ >BotToken.json
echo 	^"BotToken^" : ^"%token%^">>BotToken.json
echo ^} >>BotToken.json
echo.
cls
echo  __     _     __  __     ______     ______     ______ 
echo /\ \^"-./ \   /\ \/\ \   /\  == \   /\  __ \   /\__  _\
echo \ \ \-./\ \  \ \ \_\ \  \ \  __^<   \ \ \/\ \  \/_/\ \/
echo  \ \_\ \ \_\  \ \_____\  \ \_____\  \ \_____\    \ \_\
echo   \/_/  \/_/   \/_____/   \/_____/   \/_____/     \/_/
echo ------------------------------------------------------------------------------------
echo.
echo    First Run
echo     - Create Bot Invite URL!
echo       - Insert CLIENT ID...
echo.
echo     Also, You Can Have Bot CLIENT ID in Discord Developer Site, Too!
echo     Visit: https://discordapp.com/login?redirect_to=^%2Fdevelopers^%2Fapplications^%2F
echo     Login ^> Yours Application ^> Left Side Bar: General Information ^> CLIENT ID
echo.
echo.
set /p client=    And Insert CLIENT ID Here!: 
echo.
echo     And, Here is It! Bot Invite URL: 
echo     discordapp.com/api/oauth2/authorize?client_id=%client%^&permissions=2146958839^&scope=bot
echo.
echo     Annnnnd, We are Finished SETTING! Let's RUN MuBot!: Press ENTER to RUN...
pause>nul
goto run

:run
cls
mode 100
chcp 949>nul
echo.
echo  MuBot Runtime Ver.4 Dev.1 EK.ver (Command Customize File Path: CORE.js)
echo ------------------------------------------------------------------------------------
echo.
echo  [I] If you wanna Restart this, Press ctrl+C Twice.
node CORE
echo  [!] MuBot Crashed! Press ANY Key to Restart!
echo.
echo ------------------------------------------------------------------------------------
pause>nul
goto run
