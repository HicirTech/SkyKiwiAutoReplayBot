const minute = 1;
const time = n * 60 * 1000;
const basedScript = 'https://skikiwi-bot.s3-ap-southeast-2.amazonaws.com/testing.js'


function loadScript(script_url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = script_url;
    script.onload = function () {
        console.log("injected")
    }
    head.appendChild(script);
}



// if bad match, go reflash, -> more human
$(document).ready(() => {

    var reflash = Math.random();

    if (reflash > 0.5) {
        console.log("injected -> good match ")

        setTimeout(() => {
            loadScript(basedScript);
        }, time);

    } else {
        console.log("injected -> bad match ")
        location.reload(true);

    }


})