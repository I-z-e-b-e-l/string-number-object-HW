//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer

let dogQuestion = "But what if I like dogs more than cats?"

console.log(dogQuestion.length);

//1 Result Answer: 39



//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer

let noms ="gluten free pizza"

console.log(noms.length);

//2 Result Answer: 17



//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer

let boba ="I have no interest in boba"
let fixedIt = (boba.replace("no", "absolutely every"))

console.log(fixedIt)

//3 Result Answer: "I have absolutely every interest in boba"



//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer

let aintNothinButAHeartache = "Tell me whyyyy!                 "
console.log(aintNothinButAHeartache.trim())

//4 Result Answer: Tell me whyyyy!



//5
// Convert 1400 into a string.
//5 Code Answer: 

let num = 1440;
let stringyNum = num.toString();
console.log(stringyNum)
console.log(typeof(stringyNum))


//5 Result Answer: 1440



//6
//Convert the boolean true and false into integers
//6 Code Answer: 

let imFuckingAwesome = true;
let imABackStreetBoy = false;

console.log(Number(imFuckingAwesome))
console.log(Number(imABackStreetBoy))

//6 Result Answer: 1, 0 



//7
// Convert the string "02130" into an integer
//7 Code Answer:

let stringyNum2 = "02130"
console.log(typeof(stringyNum2))
let notStringyNum2 = Number(stringyNum2)
console.log(typeof(notStringyNum2))

//7 Result Answer: string, number



//8 ✔️
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:

let fightingEvil= "Fighting Evil by Moonlight"
let lunar = fightingEvil.includes("Moonlight")
console.log(lunar)

//8 Result Answer: true 





//9 ✔️
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:

let myLove = "I love "
let favefood = "anything Addy cooks and "
let favedrink = "Adeline's Manhattans"

console.log(myLove.concat(favefood, favedrink))

//9 Result Answer: I love anything Addy cooks and Adeline's Manhattans



//10 ✔️
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//10 Code Answer:

let DogQuestion = "But what if I like dogs more than cats?"
let lengthOfDog = DogQuestion.length;
console.log(lengthOfDog)

//10 Result Answer: 39


//11 ✔️
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:

console.log(Math.min(85, -3, 5, 93.2, -42.4))

//11 Result Answer: -42.4


//12 ✔️
//Print to the console a random number between 1 to 10.

//12 Code Answer:
console.log(Math.floor(Math.random()*(10)+1));

//12 Result Answer: 8


//13 ✔️
//Print to the console a random number between 14 to 21.

//13 Code Answer:

console.log(Math.floor(Math.random()*(21-14+1)+14));

//13 Result Answer: 14



//14 Challenge! (Optional) ✔️
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:

let todaysdate = new Date();

let year = todaysdate.getFullYear()
let month = todaysdate.getMonth()+1
let today = todaysdate.getDate()

console.log(`${month}/${today}/${year}`);

//14 Result Answer: 3/14/2021