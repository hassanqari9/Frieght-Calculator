const getJson = require("./jsonData.js")
const jsonData = getJson()
var obj = JSON.parse(jsonData);

const getJson2 = require("./jsonData2.js")
const jsonData2 = getJson2()
var obj2 = JSON.parse(jsonData2);

const getJson3 = require("./jsonData3.js")
const jsonData3 = getJson3()
var obj3 = JSON.parse(jsonData3);

const origin = 577573
const destination = 641022
const weight = 100

var ODA = 0
// Access the data
//origin
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("The data for Origin:")
var flag1 = 0;
for (var i = 0; i < 21056; i++)
{
    if (obj[i].Pin === origin)
    {
        // console.log(obj[i]);
        console.log("Pin:\t\t\t\t\t" + obj[i].Pin);
        console.log("State:\t\t\t\t\t" + obj[i].STATE);
        console.log("ODA:\t\t\t\t\t" + obj[i].ODA);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        var State = obj[i].STATE;
        if (obj[i].ODA)
        {
            ODA = ODA + 800
        }
        flag1 = 1;
        break;
    }
}
if (flag1 === 0)
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("No Data Found");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

}

console.log("......................................................");
for (var i = 0; i < 59; i++)
{
    if (obj2[i].State === State)
    {
        // console.log(obj2[i]);
        console.log("State:\t\t\t\t\t" + obj2[i].State);
        console.log("Associate Origin State Code:\t\t" + obj2[i].Associated_Codes);
        var origin_code = obj2[i].Associated_Codes
    }
}
console.log("......................................................");

// destination
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("The data for Destination:")
var flag2 = 0;
for (var i = 0; i < 21056; i++)
{
    if (obj[i].Pin == destination)
    {
        // console.log(obj[i]);
        console.log("Pin:\t\t\t\t\t" + obj[i].Pin);
        console.log("State:\t\t\t\t\t" + obj[i].STATE);
        console.log("ODA:\t\t\t\t\t" + obj[i].ODA);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        var State2 = obj[i].STATE
        if (obj[i].ODA)
        {
            ODA = ODA + 800
        }
        flag2 = 1;
        break;
    }
}
if (flag2 === 0)
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("No Data Found");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

}

console.log("......................................................");
for (var i = 0; i < 59; i++)
{
    if (obj2[i].State === State2)
    {
        // console.log(obj2[i]);
        console.log("State:\t\t\t\t\t" + obj2[i].State);
        console.log("Associate Destination State Code:\t" + obj2[i].Associated_Codes);
        var destination_code = obj2[i].Associated_Codes
    }
}
console.log("......................................................");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//final
console.log("Associate Origin State Code:\t\t" + origin_code);
console.log("Associate Destination State Code:\t" + destination_code);
for (let i = 0; i < 17; i++)
{
    if (obj3[i].State_Associate_Code === origin_code)
    {
        // console.log(obj3[i]);
        console.log("Rate from 2D Table: " + obj3[i][destination_code]);
        var rate = obj3[i][destination_code]
        break;
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("......................................................");
console.log("Total ODA:\t\t\t\t" + ODA);
console.log(`Total Cost: (rate * weight) + ODA = \t${(rate * weight) + ODA}`);
console.log("......................................................");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");



/*
21073 // total number of arrays in DATAVALID

fix else using flag

if oda is true then add 0 
else add 800

*/


