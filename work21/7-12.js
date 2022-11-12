const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let buf = []
rl.on('line', (line) => {
    if (line.trim() == "") rl.close()
    buf.push(line)
})
rl.on('close', () => {
   let input = buf[0]
   let sum = Math.pow(2,input)
   console.log("2" + "^" +input + "=" +sum)
});