const getJson = require("./jsonData.js")
const jsonData = getJson()
var obj = JSON.parse(jsonData);

const getJson2 = require("./jsonData2.js")
const jsonData2 = getJson2()
var obj2 = JSON.parse(jsonData2);

const getJson3 = require("./jsonData3.js")
const jsonData3 = getJson3()
var obj3 = JSON.parse(jsonData3);

const origin = 492010
const destination = 641022

// Access the data
//origin
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Origin Ka HAi yeh")
var flag = 0;
for (var i = 0; i<obj.DATAVALID.length; i++)
{
    var test = obj.DATAVALID[i].Column1
    if (test === origin) {
        // console.log(obj.DATAVALID[i]);
        console.log(obj.DATAVALID[i].Column1); 
        console.log(obj.DATAVALID[i].N2);
        var State = obj.DATAVALID[i].N2;
        flag = 1;
        break;
    }  
}
if (flag === 0) {
    console.log("No Data Found");
}
console.log("....................");
for (var i=0; i<59; i++)
{
    if (obj2[i].State === State)
    {
        // console.log(obj2[i]);
        console.log(obj2[i].State);
        console.log(obj2[i].Code);
        var origin_code = obj2[i].Code
    }
}

// destination
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("destination ka yeh yeh")
for (var i = 0; i<21074; i++)
{
    if (obj.DATAVALID[i].Column1 == destination) {
        // console.log(obj.DATAVALID[i]);
        console.log(obj.DATAVALID[i].Column1); 
        console.log(obj.DATAVALID[i].N2);
        var State2 = obj.DATAVALID[i].N2
        break;
    }
}
console.log("...................");
for (var i=0; i<59; i++)
{
    if (obj2[i].State === State2)
    {
        // console.log(obj2[i]);
        console.log(obj2[i].State);
        console.log(obj2[i].Code);
        var destination_code = obj2[i].Code
    }
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//final
console.log(origin_code);
console.log(destination_code);
for (let i = 0; i < 17; i++) {
    if (obj3[i].origin_code === origin_code) {
        // console.log(obj3[i]);
        console.log(obj3[i][destination_code]);
        break;
    }
}




/*
21073 // total number of arrays in DATAVALID

fix else using flag

if oda is true then add 0 
else add 800

*/


