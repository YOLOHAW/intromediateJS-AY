//Love Calculator by Random Generator
var number=Math.floor(Math.random()*6)+1
console.log("Your Dice number is "+number);

var yourName=prompt("What is your name")
var partnerName=prompt("What is your partner name")

var love_score= Math.floor(Math.random()*100)+1
console.log(love_score);

if(love_score === 100){
    alert("Oh my God Your partner and you are right person 100% each other")
}else if(love_score>70){
    alert("Your partner love you as like messi love his wife Antonela")
}else if(love_score<=70 && love_score>=30){
    alert("Wow your partner love you as like kanye love kanye")
}else{
    alert("You love score is "+love_score)
}

//Leap Year Challenge
function leapYearChecker(year){
    if(year%4===0){
        if(year%100==0){
            if(year%400==0){
                alert("Leap Year")
            }else{
                alert("Not Leap Year")
            }
        }else{
            alert("Leap Year")
        }
    }else{
        alert("Not Leap Year")
    }
}
leapYearChecker(2049)

//Collections Working with Js Arrays
var guestList=['Jack','Phil','Kevin','Jude',]
var guestName=prompt("What is your Name:")
if(guestList.includes(guestName)){
    alert("Welcome from the celebration Party")
}else{
    alert("Sorry,you can not enter the party")
}
console.log(guestList[0]);
console.log(guestList.includes("Kevin"))
guestList.push('Harry')
guestList.pop()
alert("Today's Guest names are "+guestList)

//Intermediate array techniques
var output=[];
var count=1;
function fizzBuzz(){
    if(count%3===0 && count%5===0){
      output.push("FizzBuzz")
    }else if(count%3===0){
       output.push("Fizz")
    }else if(count%5===0){
        output.push("Buzz")
    }else{
        output.push(count);
    }
    count++;
    console.log(output);
}

//Who is gonna pay Lunch Challenge // In browser console, whoispaying(['jack','phil','jude']) //

function whoispaying(names){
    var numberofPeople=names.length
    var randomPersonPosition=Math.floor(Math.random()*numberofPeople)
    var randomPerson=names[randomPersonPosition]
    alert("The person who gonna pay our lunch is "+randomPerson)
}

//While loops
var progress=0
while(progress<=100){
    console.log("Good Progress");
    progress++;
}

//for loops
var output=[];
function fizzBuzz(){
    for(var count=1;count<101;count++)
    if(count%3===0 && count%5===0){
      output.push("FizzBuzz")
    }else if(count%3===0){
       output.push("Fizz")
    }else if(count%5===0){
        output.push("Buzz")
    }else{
        output.push(count);
    }
    count++;
    console.log(output);
}

//Fibonacci Challenge 0,1,1,2,3,5,8

function fibonacciGenerator(n){
    outputs=[]
    if(n===1){
        outputs=[0]
    }else if(n===2){
        outputs=[0,1]
    }else{
        outputs=[0,1]
        for(i=2;i<n;i++){
            outputs.push(outputs.length-2+outputs.length-1)
        }
    }
    return outputs
}