const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.mqttdashboard.com");
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const path = require('path')
const { spawn } = require('child_process');

const { Gpio } = require('onoff');

// set BCM 4 pin as 'output'
const LedOut = new Gpio('23', 'out');
const d_time = 100;
const cipher = [' ', '*-', '-***', '-*-*', '-**', '*', '**-*', '--*', '****', '**', '*---', '-*-', '*-**', '--', '-*', '---', '*--*', '--*-', '*-*', '***', '-', '**-', '***-', '*--', '-**-', '-*--', '--**', ' ', '******', '*-*-*-', '*----', '**---', '***--', '****-', '*****', '-****', '--***', '---**', '----*', '-----', '---***', '-*-*-*', '-*--*-', '-*--*-', '*-**-*', '*-**-*', '**--**', '--**--', '*-*-*', '**-*-'];
const alph = '_abcdefghijklmnopqrstuvwxyz .,1234567890:;()"' + "'?!+";
gpio.setup(23, gpio.DIR_OUT);
/*rpio.write(16, rpio.HIGH);
        rpio.sleep(1);

        /* Off for half a second (500ms) */
/*rpio.write(16, rpio.LOW);*/
/*rpio.msleep(500);*/
function act() {
    LedOut.writeSync(1);
}

function inact() {
    LedOut.writeSync(0);
}

function sleep(time) {
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + time) {
        ;
    }
}

function dot() {
    process.stdout.write("*");
    act();
    sleep(d_time);
    inact();
    sleep(d_time);
}

function dash() {
    process.stdout.write("-");
    act();
    sleep(d_time * 3);
    inact();
    sleep(d_time);
}

function tab() {
    process.stdout.write(" ");
    act();
    sleep(d_time * 7);
    inact();
}

function coder(code) {
    for (const i in code) {
        var ans = "";
        for (const j in alph) {
            if (code[i] == alph[j]) {
                ans = cipher[j];
                break
            }
        }
        for (const j in ans) {
            if (ans[j] == "*") {
                dot();
            }
            if (ans[j] == "-") {
                dash();
            }
            if (ans[j] == " ") {
                tab();
            }
        }
    }
}

function Answer(topic, message) {
    console.log(topic);
    console.log((decoder.write(message)).toString());
    var text = (message.toString()).toLowerCase();
    //apt.get('/', CallNuire('fs');

    console.log(text);

    var a = coder(text);
    console.log("\nYour text printed sucsesfully!");
}

function main() {
    console.log("Program sucsesfully compiled.")
    client.on("message", Answer);
    client.subscribe("qwerty1234");

}
main()

