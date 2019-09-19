

function buyPhones(bal,phon,cas,vat){

var bankBalance = bal;
var phoneCost = phon;
var caseCost = cas;
var phonesBought = 0;
var casesBought = 0;
var taxPercentage = vat;  //Value-added tax, for non-Brits
var totalSpent = 0;
var totalPhoneCost = phoneCost + (phoneCost * taxPercentage/100);
var totalCaseCost = caseCost + (caseCost * taxPercentage/100);
  
if (bankBalance < totalPhoneCost) {console.log("What are you buying phones for, you pauper?");}
else {
while (bankBalance >= totalPhoneCost) {
bankBalance = bankBalance - totalPhoneCost;
//console.log('Balance is now £' + bankBalance.toFixed(2));
phonesBought ++;
//console.log('Number of phones is now ' + phonesBought);
totalSpent += totalPhoneCost;
//console.log('Total spent is now £' + totalSpent);
if (bankBalance >= totalCaseCost){
bankBalance = bankBalance - totalCaseCost;
//console.log('Balance is now £' + bankBalance.toFixed(2));
casesBought++;
//console.log('Number of cases is now ' + phonesBought);
totalSpent += totalCaseCost;}}
//console.log('Total spent is now £' + totalSpent);} */
//else {return "You can't afford the case as well, buddy";}

console.log("Bank Balance: £" + bankBalance.toFixed(2));
console.log("Phones I now own: " + phonesBought);
console.log("Cases I now own: " + casesBought);
console.log("Money I've spent on phones and cases: £" + totalSpent.toFixed(2));}}
