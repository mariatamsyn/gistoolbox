function round_num(num, dec) {
    console.log('here')
    let ref = '1'
    for (let i=0; i < dec; i++) {
        ref += '0';
    }
    ref = parseInt(ref)
    console.log(ref)
    return Math.round(num*ref) / ref
}