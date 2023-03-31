const getPincodes = require("./Data/1-Pincodes.js");
const getStateAssociatedCodes = require("./Data/2-State-Associated-Codes.js");
const getBothAssociatedCodes = require("./Data/3-Associated-Codes(2D-Array).js");

const pincodes = JSON.parse(getPincodes());
const stateAssociatedCodes = JSON.parse(getStateAssociatedCodes());
const bothAssociatedCodes = JSON.parse(getBothAssociatedCodes());

const origin = 190001;
const destination = 180001;
const weight = 100;

if (weight === 0)
{
    console.log("Weight is zero.");
    process.exit(1)

} else if (weight < 0)
{
    console.log("Weight is negative.");
    process.exit(1)
}

let originCode = "";
let destinationCode = "";
var oda = 0;

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

const findBaseFreight = (originCode, destinationCode) =>
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

const originData = findPincodeData(origin); // stores the entire details related to the pincode
if (originData) // if correct pincode is entered then
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("The data for Origin:");
    console.log(`Pin:\t\t\t\t\t${originData.Pin}`);
    console.log(`State:\t\t\t\t\t${originData.STATE}`);
    console.log(`ODA:\t\t\t\t\t${originData.ODA}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    originCode = findStateAssociatedCode(originData.STATE); // with this fn we input state name and get State Associated Code

} else
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("We don't accept orders from this location at this moment. {Dev log: Origin Data not found}");
    process.exit(1);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

console.log("......................................................");
const destinationData = findPincodeData(destination);
if (destinationData) // if correct pincode is entered then (this is same as above)
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("The data for Destination:");
    console.log(`Pin:\t\t\t\t\t${destinationData.Pin}`);
    console.log(`State:\t\t\t\t\t${destinationData.STATE}`);
    console.log(`ODA:\t\t\t\t\t${destinationData.ODA}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    destinationCode = findStateAssociatedCode(destinationData.STATE); // with this fn we input state name and get State Associated Code

} else
{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("We don't deliver orders to this location at this moment. {Dev log: Destination Data not found}");
    process.exit(1);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

console.log("......................................................");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`Associate Origin State Code:\t\t${originCode}`); // For debugging only
console.log(`Associate Destination State Code:\t${destinationCode}`); // For debugging only



const baseFreight = findBaseFreight(originCode, destinationCode);
if (baseFreight) // if not null and has State Associated Codes
{
    console.log(`BaseFreight from 2D Table:\t\t${baseFreight}`);
    console.log("......................................................");
}
else // although this will not happen unless some modifications have been made to JSON (3-Associated-Codes(2D-Array).js) incorrectly
{
    console.log("404, Data not found!");
    process.exit(1);
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


const odaChecker = () =>
{
    oda = (originData?.ODA || destinationData?.ODA) ? (weight <= 800 ? 800 : weight) : 0; // using ternary operator // Using optional chaining ('?.') with 'originData' and 'destinationData' will avoid errors if either of them is 'null'or 'undefined'.
}

odaChecker();
console.log(`Total ODA:\t\t\t\t${oda}`);

// Constants
const PROCESSING_FEE = 50;
// const INSURANCE = 50; // value given by client
const INSURANCE = 566.40; // value used in excel file


// Calculations
const totalFreight = baseFreight * weight;
const processingFee = PROCESSING_FEE;
const fuel = (15 * totalFreight) / 100;
const handlingCharges = weight <= 150 ? 0 : weight;
const FM_Charges = weight;
const insurance = INSURANCE;
const preTaxCharges = totalFreight + oda + processingFee + fuel + handlingCharges + FM_Charges + insurance;
const GST = (12 * preTaxCharges) / 100;
const minimumAmount = 336;
var totalAmount = preTaxCharges + GST;
totalAmount = totalAmount < minimumAmount ? minimumAmount : preTaxCharges + GST;


// Output
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Total Freight:\t\t\t" + totalFreight);
console.log("Fuel:\t\t\t\t" + fuel);
console.log("Handling Charges:\t\t" + handlingCharges);
console.log("FM_Charges:\t\t\t" + FM_Charges);
console.log("PreTax Charges:\t\t\t" + preTaxCharges);
console.log("GST:\t\t\t\t" + GST); // round off decimals
console.log("Total amount to be paid:\t" + totalAmount); // use ceiling fn
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Contact @AarishShah when you are done with this. Both Files need to be obfuscated before publishing.