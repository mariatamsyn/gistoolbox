function round_num(num, dec) {
    let ref = '1'
    for (let i=0; i < dec; i++) {
        ref += '0';
    }
    ref = parseInt(ref)
    return Math.round(num*ref) / ref
}

function toggle_fullscreen() {
    const FULLSCREEN_BUTTONS = document.getElementsByClassName("bi bi-fullscreen")

    if (!document.fullscreenElement) {
        document.body.requestFullscreen();
        for (const i in FULLSCREEN_BUTTONS) {
            console.log(i)
        }
    } else {
        document.exitFullscreen();
    }
}

function print_screen() {
    window.print();
}