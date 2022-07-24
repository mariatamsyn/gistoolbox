function round_num(num, dec) {
    let ref = '1'
    for (let i=0; i < dec; i++) {
        ref += '0';
    }
    ref = parseInt(ref)
    return Math.round(num*ref) / ref
}

function toggle_fullscreen() {
    
    const FULLSCREEN_ICONS = {
        fullscreen : "bi-fullscreen",
        exit_fullscreen : "bi-fullscreen-exit"
    }

    const FULLSCREEN_BUTTONS = document.getElementsByClassName("fullscreen-button")

    if (!document.fullscreenElement) {
        document.body.requestFullscreen();

        for (const i in FULLSCREEN_BUTTONS) {
            FULLSCREEN_BUTTONS[i].classList.remove(FULLSCREEN_ICONS.fullscreen)
            FULLSCREEN_BUTTONS[i].classList.add(FULLSCREEN_ICONS.exit_fullscreen)
        }

    } else {
        document.exitFullscreen();
    
        for (const i in FULLSCREEN_BUTTONS) {
            FULLSCREEN_BUTTONS[i].classList.remove(FULLSCREEN_ICONS.exit_fullscreen)
            FULLSCREEN_BUTTONS[i].classList.add(FULLSCREEN_ICONS.fullscreen)
        }
    
    }
}

function print_screen() {
    window.print();
}