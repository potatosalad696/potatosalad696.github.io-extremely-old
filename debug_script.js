var code = "xxxx-yyyy-xxxx-yyyy".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
});

console.log("The code is: " + code);