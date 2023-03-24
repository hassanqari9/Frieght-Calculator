const getPincodes = require("./Data/1-Pincodes.js")
const Pincodes = getPincodes()
const objectPincodes = JSON.parse(Pincodes);

const getState_Associate_Codes = require("./Data/2-State-Associated-Codes.js")
const State_Associate_Codes = getState_Associate_Codes()
const objectSAC = JSON.parse(State_Associate_Codes); // SAC is short for State Associate Codes

const getBoth_Associated_Codes = require("./Data/3-Associated-Codes(2D-Array).js")
const Both_Associated_Codes = getBoth_Associated_Codes()
const objectBAC = JSON.parse(Both_Associated_Codes);  // BAC is short for Both Associate Codes

// collect this data from user
const origin = 683504
const destination = 757093
const weight = 100

var ODA = 0

// origin
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("The data for Origin:")
var flag1 = 0;
for (var i = 0; i < 21056; i++)
{
    if (objectPincodes[i].Pin === origin)
    {
        // console.log(objectPincodes[i]);
        console.log("Pin:\t\t\t\t\t" + objectPincodes[i].Pin);
        console.log("State:\t\t\t\t\t" + objectPincodes[i].STATE);
        console.log("ODA:\t\t\t\t\t" + objectPincodes[i].ODA);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        var State = objectPincodes[i].STATE;
        if (objectPincodes[i].ODA)
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
    if (objectSAC[i].State === State)
    {
        // console.log(objectSAC[i]);
        console.log("State:\t\t\t\t\t" + objectSAC[i].State);
        console.log("Associate Origin State Code:\t\t" + objectSAC[i].Associated_Codes);
        var origin_code = objectSAC[i].Associated_Codes
    }
}
console.log("......................................................");

// destination
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("The data for Destination:")
var flag2 = 0;
for (var i = 0; i < 21056; i++)
{
    if (objectPincodes[i].Pin == destination)
    {
        // console.log(objectPincodes[i]);
        console.log("Pin:\t\t\t\t\t" + objectPincodes[i].Pin);
        console.log("State:\t\t\t\t\t" + objectPincodes[i].STATE);
        console.log("ODA:\t\t\t\t\t" + objectPincodes[i].ODA);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        var State2 = objectPincodes[i].STATE
        if (objectPincodes[i].ODA)
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
    if (objectSAC[i].State === State2)
    {
        // console.log(objectSAC[i]);
        console.log("State:\t\t\t\t\t" + objectSAC[i].State);
        console.log("Associate Destination State Code:\t" + objectSAC[i].Associated_Codes);
        var destination_code = objectSAC[i].Associated_Codes
    }
}
console.log("......................................................");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//final
console.log("Associate Origin State Code:\t\t" + origin_code);
console.log("Associate Destination State Code:\t" + destination_code);
for (let i = 0; i < 17; i++)
{
    if (objectBAC[i].State_Associate_Code === origin_code)
    {
        // console.log(objectBAC[i]);
        console.log("Rate from 2D Table:\t\t\t" + objectBAC[i][destination_code]);
        var rate = objectBAC[i][destination_code]
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


