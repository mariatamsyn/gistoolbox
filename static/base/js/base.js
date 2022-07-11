function round_num(num, dec) {
    let ref = '1'
    for (let i=0; i < dec; i++) {
        ref += '0';
    }
    ref = parseInt(ref)
    return Math.round(num*ref) / ref
}