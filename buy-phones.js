function buyCases(bal,phon,cas,vat){

var bankBalance = bal;
var phoneCost = phon;
var caseCost = cas;
var phonesBought = 0;
var casesBought = 0;
const VAT = vat;  //Value-added tax, for non-Brits
let totalSpent = 0;
var totalCost = phoneCost + phoneCost * VAT;

while (bankBalance < totalCost) {return "What are you buying phones for, you pauper?"}

while (bankBalance >= totalCost) {
bankBalance = bankBalance - totalCost;
phonesBought ++;
totalSpent += totalCost;
if (bankBalance >= caseCost) {
bankBalance = bankBalance - caseCost;
casesBought++;
totalSpent += caseCost;}
else {return "You can't afford the case as well, buddy";}} //Aren't multiple phones enough?

console.log("Bank Balance: £" + bankBalance.toFixed(2));
console.log("Phones I now own: " + phonesBought);
console.log("Cases I now own: " + casesBought);
console.log("Money I've spent on phones and cases: £" + totalSpent)}
