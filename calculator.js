import { weight, baseFreight, oda } from './index.js';

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
const totalAmount = preTaxCharges + GST;

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
document.querySelector('h1').innerHTML = totalAmount;
// Contact @AarishShah when you are done with this. Both Files need to be obfuscated before publishing.