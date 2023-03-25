// Data from previous file
const {weight, baseFreight, oda} = require("./index")
// const baseFreight = 10;
// const weight = 151;
// const oda = 1000;
console.log(weight);

const totalFreight = (baseFreight * weight); // using formula
const processingFee = 50 // this is constant(fixed)
const fuel = (15 * totalFreight) / 100; // using formula
const handlingCharges = (weight <= 150) ? 0 : weight; // using ternary operator
const insurance = 50; // this is constant(fixed)
const FM_Charges = weight;

const preTaxCharges = (totalFreight + oda + processingFee + fuel + handlingCharges + FM_Charges + insurance); // using formula
const GST = (12 * preTaxCharges) / 100; // using formula
const totalAmount = preTaxCharges + GST;


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Total Freight:\t\t\t" + totalFreight);
console.log("Fuel:\t\t\t\t" + fuel);
console.log("Handling Charges:\t\t" + handlingCharges);
console.log("FM_Charges\t\t\t" + FM_Charges);
console.log("PreTax Charges:\t\t\t" + preTaxCharges);
console.log("GST\t\t\t\t" + GST);
console.log("Total amount to be paid:\t" + totalAmount);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");