//Alerts
alert("I am unstoppable today...")

//datatypes string number boolean undefined null
var name="Cristiano Messi";
console.log(typeof(name));

//variables
var yourname=prompt("What is your name: ")
alert("Hello, "+yourname+" welcome from javascript :3")

//String length
var words=prompt("Enter words to count the length")
var wordsCounter=words.length
alert("You words have total of "+wordsCounter+" words")

//Slicing and Extracting parts of String
var goat1="Cristiano Ronaldo"
var goat2="Leo Messi"
alert(goat1.slice(9,17))
alert(goat2.slice(4,6))

//Casing in Text-> name.toUpperCase() name.toLowerCase()

//Basic Arithmetic and modulo operators in JS
var dogAge=prompt("Enter your dog age: ")
var humanAge=((dogAge-2)*4)+21;
alert("Your dog Age is "+humanAge+" in human years")

//Ask tweet and return back tweet with words limit 140
alert(prompt("Enter your tweet :").slice(0,140))

//Ask name and return back with First letter of name to Capital Letter
var Name=prompt("Enter your name to enter the room: ")
var firstChar=Name.slice(0,1)
var upperCaseName=firstChar.toUpperCase()
var restofName=Name.slice(1,Name.length)
restofName=restofName.toLocaleLowerCase()

var capitalizedName= upperCaseName + restofName
alert("Hello "+capitalizedName+" we allowed you to enter the rooom")

//Creating and Calling functions
function getMilk(money,costPerBottle){
    console.log("Went outside to buy milk bottles");
    alert("You got "+calcuBottles(money,costPerBottle)+" milk bottles")
    alert("You left "+calcChange(money,costPerBottle)+"$ of change")

}
function calcuBottles(startingMoney,costPerBottle){
    var numberofBottles= Math.floor(startingMoney/costPerBottle)
    return numberofBottles
}
function calcChange(startingAmount,costPerBottle){
    var leftChange= Math.floor(startingAmount%costPerBottle)
    return leftChange
}
getMilk(11,4);

//Bmi Calculator
function bmicalculator(weight,height){
    var bmi=weight/Math.pow(height,2)
    alert("Your bmi is "+Math.floor(bmi))
}
bmicalculator(65,1.8)
