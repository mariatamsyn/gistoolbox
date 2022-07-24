function round_num(num, dec) {
    let ref = '1'
    for (let i=0; i < dec; i++) {
        ref += '0';
    }
    ref = parseInt(ref)
    return Math.round(num*ref) / ref
}

function toggle_fullscreen() {
    
    let icons = {
        fullscreen : "bi-fullscreen",
        exit_fullscreen : "bi-fullscreen-exit"
    }

    if (!document.fullscreenElement) {
        document.body.requestFullscreen();

        let FULLSCREEN_BUTTONS = document.getElementsByClassName(icons.fullscreen)
        for (const i in FULLSCREEN_BUTTONS) {
            FULLSCREEN_BUTTONS[i].classList.remove(icons.fullscreen)
            FULLSCREEN_BUTTONS[i].classList.add(icons.exit_fullscreen)
        }

    } else {
        document.exitFullscreen();
    }
}

function print_screen() {
    window.print();
}