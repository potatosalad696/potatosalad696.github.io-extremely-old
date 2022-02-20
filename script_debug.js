function timeouted1() {
    console.log("TimeoutError: Timeout")
}

var code = "yxyxxyxxxyxxxxyxxxxxyxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
});

function check() {
    const timeout1 = setTimeout(timeouted1, 25000)
    var input_code = document.getElementById("input").value

    if (input_code == code) {
        console.log("Correct!")
    }
}

console.log("Your code is: " + code);