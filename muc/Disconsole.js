/*
	μBot v5.0 Command: Ping. 
	---------------------
	PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

const API = require("discord.js");

    

module.exports.run = async (mu, input, pars) => {
	let msgAr = input.content.split(" "); // Check Space
	let i = msgAr[0]; // input Command
	let li = langAr[0];

if (i === ">echo") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: batch file, cmd.exe");
    input.channel.send("Language: Batch file, CMD.exe -----------");
    buffer = pars.join(" ").slice(0);
    console.log(`Check String: ${buffer}`);
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (i === "$echo") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: bash");
    input.channel.send("Language: Unix&Linux Bash ---------------");
    buffer = pars.join(" ").slice(0);
    console.log(`Check String: ${buffer}`);
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">printf(" || li === ">puts(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: C, C++");
    input.channel.send("Language: C, C++ ------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">print(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: C, Lua, Python");
    input.channel.send("Language: C, Lua Python -----------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">console.log(" || li === ">document.write(" || li === ">alert(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: js");
    input.channel.send("Language: JavaScript --------------------")
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">Serial.println(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: arduino");
    input.channel.send("Language: Arduino -----------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">PRINT ") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: basic");
    input.channel.send("Language: Basic -------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`)
;		console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">std::cout << ") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: C++");
    input.channel.send("Language: C++ ---------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">Console.WriteLine(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: C#");
    input.channel.send("Language: C# ----------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">DISPLAY") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: cobol");
    input.channel.send("Language: Cobol -------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">writeln(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: D");
    input.channel.send("Language: D -----------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">Print *, ") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: fortran");
    input.channel.send("Language: FORTRAN -----------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
} else

if (li === ">fmt.Printf(") {
    console.log(`-----------Convert: ${input.id}----------`);
    console.log("Check Language: go");
    input.channel.send("Language: Go ----------------------------");
    let langArr = langAr[1].split("\"");
    buffer = langArr[0];
    console.log(`Check String: ${buffer}`);
    if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
    console.log("-----------------------------------------------");
    input.channel.send(buffer);
    }
}

module.exports.help = {
	name: "disconsole"
}