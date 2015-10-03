// JavaScript Document

// Jarrod Smith
// SDI Section 1 
// Expressions

//Variables

var weightSq = 40.84;      //Weight of 1 inch steel plate
var thickness = 0;         //Thickness of the steel plate
var length = 0;            //Length of steel plate
var width = 0;             //Width of steel plate
var sqFeet = 0;            //Total sq feet of steel plate
var adjSqWeight = 0;       //Weight adjust for the inputed plate weight
var total = 0;

//Inputs

var thickness = prompt("Enter the thickness of the steel plate in deciaml.");   //User inputs plate thickness
var length = prompt ("Enter the length of your plate in inches.");              //User inputs plate length in inches
var width = prompt ("Enter the width of your plate in inches");                 //User inputs plate width in inches

//Equations

var adjSqWeight = weightSq * thickness;
var sqFeet = length * width / 144;
var total = adjSqWeight * sqFeet;


//Outputs

