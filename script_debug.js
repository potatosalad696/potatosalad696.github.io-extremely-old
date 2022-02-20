function timeouted1() {
    console.log("TimeoutError: Timeout")
}

var token = "xyxyx-yxyxy-xyxyx-yxyxy-xyxyx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
});

const timeout1 = setTimeout(timeouted1, 25000)

console.log("Your token is: " + token);