// JavaScript Document
// Jarrod Smith
// SDI Section 1 
// Expression assignment

//Variables

var weightSq = 40.84;       //Weight of 1 inch steel plate
var thickness;              //Thickness of the steel plate
var length;                 //Length of steel plate
var width;                  //Width of steel plate
var sqFeet;                 //Total sq feet of steel plate
var adjSqWeight;            //Weight adjust for the inputed plate weight
var total;                  //The total weight for plate
var price;                  //The price you are paying per pound.
var cost;                   //Total cost for plate

//Inputs

var thickness = prompt("Enter the thickness of the steel plate in deciaml.");   //User inputs plate thickness
var length = prompt ("Enter the length of your plate in inches.");              //User inputs plate length in inches
var width = prompt ("Enter the width of your plate in inches.");                 //User inputs plate width in inches
var price = prompt ("Enter the cost per pound.");

//Equations
var array = [length, width, weightSq, thickness];   //Array to store length, width, weight, thickness
var adjSqWeight = array[2] * array[3];              //The equated weight for the thickness
var sqFeet = array[0] * array[1] / 144;             //The equating the sq Ft
var total = adjSqWeight * sqFeet;                   //The total weight for the plate
var cost = total * price;                           //Equating the cost for the plate

//Outputs


alert ("The total square feet of the plate is " + sqFeet + ".\nThe total weight of the plate is " + total + ".\nThe total cost for the plate is "+ cost + ".");

//Test

// I entered in .5 for the thickness prompt, for the length I entered 24, for the width I entered 24,
// for price per pound I entered .50. My output is 4 sq feet, 81.68 total weight, and the cost for the $40.84
// Manually figuring the problem I came up with the same thing.

// I entered in .75 for the thickness prompt, for the length I entered 59, for the width I entered 94,
// for the price per pound I entered .45. My output is 38.513 sq feet, 1179.6804 total weight, and the cost of 530.856
// Manually figuring the problem I came up with the same thing.