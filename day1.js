const input = require("./input");
console.log('Day #1');

let mcal = 0
for(let line of input.split("\n\n")){
    const elf = line.split("\n")
        .map(v => parseInt(v))
        .reduce((i, v) => i+v,0);
    if(elf > mcal) mcal = elf
}
console.log(`Part 1: ${mcal}`)

let cals = [0, 0, 0]
for(let line of input.split("\n\n")){
    const elf = line.split("\n")
        .map(v => parseInt(v))
        .reduce((i, v) => i+v,0);
    for(let i = 0; i < 3;i++){
        if(elf > cals[i]) {
            cals[i] = elf
            break;
        }
    }
    cals.map((v, i) => {
        if(elf > v) return elf;
        return v;
    })
}
console.log(`Part 2: ${cals.reduce((i, v) => i+v, 0)} (${cals.join(", ")})`)