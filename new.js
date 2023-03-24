const getJson3 = require("./jsonData3.js")
const jsonData3 = getJson3()
var obj3 = JSON.parse(jsonData3);

// console.log(obj3[0].origin_code);

const codeONe = "N1"
const codeTwo = "NE2"

console.log(typeof(obj3[0]));

for (let i = 0; i < 17; i++) {
    if (obj3[i].origin_code === codeONe) {
        console.log(obj3[i]);
        console.log(obj3[i][codeTwo]);
        break;
    }
}
