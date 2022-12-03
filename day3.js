const input = require("./input")
let priorities = []
let count = 0
const strs = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log('Day #3');

for(let line of input.split("\n")){
    const first = [...new Set([...line.replace([...line].join("").slice(line.length / 2), "")])]
    const second = [...new Set([...line.slice(line.length / 2)])]
    const table = {}
    for(let char of first) table[char] = true
    for(let char of second) if(table[char]) priorities.push(char)
}

for(let str of priorities){
    count += strs.indexOf(str)
}

console.log(`Part 1: ${count}`)

priorities = [], count = 0;
const groups = [];
let c = 0, c2 = 0;

input.split("\n").map((v, i) => {
    if(!groups[c2]){
        groups[c2] = []
    }
    groups[c2][c] = v
    if(c++ == 2){
        c2++
        c = 0
    }
})

for(let arrs of groups){
    const table = {"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,"g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,"y":0,"z":0,"A":0,"B":0,"C":0,"D":0,"E":0,"F":0,"G":0,"H":0,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0}
    for(let line of arrs){
        for(let char of [...new Set(line.split(""))]) table[char]++
    }
    for(let [k, tb] of Object.entries(table)){
        if(tb == 3) priorities.push(k)
    }
}

for(let str of priorities){
    count += strs.indexOf(str)
}

console.log(`Part 2: ${count}`)