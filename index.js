const getPincodes = require("./Data/1-Pincodes.js");
const getStateAssociatedCodes = require("./Data/2-State-Associated-Codes.js");
const getBothAssociatedCodes = require("./Data/3-Associated-Codes(2D-Array).js");

const pincodes = JSON.parse(getPincodes());
const stateAssociatedCodes = JSON.parse(getStateAssociatedCodes());
const bothAssociatedCodes = JSON.parse(getBothAssociatedCodes());

const origin = 683504;
const destination = 757093;
const weight = 100;

let oda = 0;
let originCode = "";
let destinationCode = "";

const findPincodeData = (pin) => // this fn takes pincode as input and returns the entire array in a const called originData or destinationData
{
    for (let i = 0; i < pincodes.length; i++)
    {
        if (pincodes[i].Pin === pin)
        {
            return pincodes[i];
        }
    }
    return null;
};

const findStateAssociatedCode = (state) => // this fn takes state name (using the array data from above findPincodeData()) and returns the State Associated Codes
{
    for (let i = 0; i < stateAssociatedCodes.length; i++)
    {
        if (stateAssociatedCodes[i].State === state)
        {
            return stateAssociatedCodes[i].Associated_Codes;
        }
    }
    return null;
};

const findRate = (originCode, destinationCode) =>
{
    for (let i = 0; i < bothAssociatedCodes.length; i++)
    {
        if (bothAssociatedCodes[i].State_Associate_Code === originCode)
        {
            return bothAssociatedCodes[i][destinationCode];
        }
    }
    return null;
};

const originData = findPincodeData(origin);
if (originData) // it could be array data or null
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("The data for Origin:");
    console.log(`Pin:\t\t\t\t\t${originData.Pin}`);
    console.log(`State:\t\t\t\t\t${originData.STATE}`);
    console.log(`ODA:\t\t\t\t\t${originData.ODA}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    originCode = findStateAssociatedCode(originData.STATE); // with this fn we input state name and get State Associated Code
    if (originData.ODA) // oda cost check @hassanqari9check for oda test here
    {
        oda = 800;
    }
} else
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("No Data Found");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

console.log("......................................................");
const destinationData = findPincodeData(destination);
if (destinationData) // it could be array data or null
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("The data for Destination:");
    console.log(`Pin:\t\t\t\t\t${destinationData.Pin}`);
    console.log(`State:\t\t\t\t\t${destinationData.STATE}`);
    console.log(`ODA:\t\t\t\t\t${destinationData.ODA}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    destinationCode = findStateAssociatedCode(destinationData.STATE); // with this fn we input state name and get State Associated Code
    if (destinationData.ODA) // oda cost check
    {
        oda += 800;
    }
} else
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("No Data Found");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

console.log("......................................................");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`Associate Origin State Code:\t\t${originCode}`);
console.log(`Associate Destination State Code:\t${destinationCode}`);

const rate = findRate(originCode, destinationCode);
if (rate) // if not null and has State Associated Codes
{
    console.log(`Rate from 2D Table:\t\t\t${rate}`);
    console.log("......................................................");
    console.log(`Total ODA:\t\t\t\t${oda}`);
    console.log(`Total Cost: (rate * weight) + ODA = \t${(rate * weight) + oda}`);
}
