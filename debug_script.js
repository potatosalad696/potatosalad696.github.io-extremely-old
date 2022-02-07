function GenerateCode() {
    return "xyxyx-yxyxy-xyxyx-yxyxy-xyxyx-xxxxx-yyyyy".replace(/[xy]/g, function (c) {
        const r = Math.random() * 64 | 0;
        const v = c === 'x' ? r : (r & 0x2 | 0x4);

        return v.toString(16);
    });
}

console.log(GenerateCode());