//page elements
let usageRate1Box;
let usageRate2Box;
let daysBox;

let tariffRate1Box;
let tariffRate2Box;
let standingChargeBox;

let resultBox

// numerical input variables
let usageRate1;
let usageRate2;
let days;

let tariffRate1;
let tariffRate2;
let standingCharge;

// numerical output variables
let costRate1;
let costRate2;
let eCost;
let standingChargeCost;
let totalCost;
// string output variables
let costRate1Text;
let costRate2Text;
let eCostText;
let standingChargeCostText;
let totalCostText;
let resultText;
//

//functions

function getElements (){ //gets the elements from the page in one function call
    usageRate1Box = document.getElementById("usage1_night");
    usageRate2Box = document.getElementById("usage2_day");
    daysBox = document.getElementById("days");
    resultBox = document.getElementById("result");

    tariffRate1Box = document.getElementById("tariff1_night");
    tariffRate2Box = document.getElementById("tariff2_day");
    standingChargeBox = document.getElementById("sc");
}

function getValues (){//gets current values of the input elements on the page, stores them in working variables
    usageRate1 = Number(usageRate1Box.value);
    usageRate2 = Number(usageRate2Box.value);
    days = Number(daysBox.value);

    tariffRate1 = Number(tariffRate1Box.value);
    tariffRate2 = Number(tariffRate2Box.value);
    standingCharge = Number(standingChargeBox.value);
}

function calculate (){
 costRate1 = (usageRate1 * tariffRate1) / 100;
 costRate2 = (usageRate2 * tariffRate2) / 100;
 eCost = costRate1 + costRate2;
 standingChargeCost = (days * standingCharge) / 100;
 totalCost = eCost + standingChargeCost;
}

function getResultText (){
    costRate1Text = Number.parseFloat(costRate1).toFixed(2);
    costRate2Text = Number.parseFloat(costRate2).toFixed(2);
    eCostText = Number.parseFloat(eCost).toFixed(2);
    standingChargeCostText = Number.parseFloat(standingChargeCost).toFixed(2);
    totalCostText = Number.parseFloat(totalCost).toFixed(2);
}

function setResultText (){
    const resultMessage = " Cost Rate 1 (Night) = £" + costRate1Text + " Cost Rate 2 (Day) = £" + costRate2Text + " Electricity Cost = £" + eCostText + " Standing Charge Cost = £" + standingChargeCostText + " Total Cost = £" + totalCostText;
    
    resultBox.textContent = resultMessage;
}

// main program
function program (){
    getValues();
    calculate();
    getResultText();
    setResultText();
}