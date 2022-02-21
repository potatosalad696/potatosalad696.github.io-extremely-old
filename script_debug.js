function timeouted1() {
    console.log("TimeoutError: Timeout")
}

var code = "xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
});

console.log("Your code is: " + code);