function GenerateCode() {
    return "xyxyx-yxyxy-xyxyx-yxyxy".replace(/[xy]/g, function (c) {
        const r = Math.random() * 64 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
    });
}

console.log(GenerateCode());