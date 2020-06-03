
var needReflash = false;
const msg = "耀教练是真的牛逼, 上过他的课都说好";


async function testing() {
    setTimeout(() => {
        $($(`.BTN_reply `)[0]).trigger("touchend");
        setTimeout(() => {
            $($(`.textarea`).children()[0]).val(msg);
            setTimeout(() => {
                var list = $(`.q_checkcode`).text().split(' ');
                var result = `${list[0]}${list[1]}${list[2]}`
                var eva = eval(result);
                setTimeout(() => {
                    $($($($($(`.q_checkcode`).parent()[0]).parent()[0]).children()[1]).children()[0]).val(eva)
                    setTimeout(() => {
                        try {
                            $($(`.submitReply`)[0]).trigger("touchend");
                        } catch (error) {
                            location.reload(true);
                        }
                    }, 2000);
                }, (2000));
            }, 2000);
        }, 2000);

    }, 2000);
}
async function makesureItNotStuck() {

    console.log("Start time count")
    setTimeout(() => {
        location.reload(true);
        console.log("time's up, reflash!")
    }, 200000);
}

makesureItNotStuck();
testing();


window.onerror = function (message, source, lineno, colno, error) {
    console.log("Catched" + message);
    if (!needReflash) {
        $($(`.submitReply`)[0]).trigger("touchend");
        needReflash = true;
    } else {
        location.reload(true);
    }
};
