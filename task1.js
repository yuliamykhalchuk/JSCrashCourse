const myName = "Yuliia";
const myDaughterName = "Vlada";
const myEyesColor = "sky blue";
let myAge = 28;
let myHusbandAge = 27;
let myDaughterAge = 4;
let myFriendAge = 28;
let myJobTitle = "trainee";
/**I am starting to study JS and 
 * I like this procces */
let totalAge;
let num1 = 19;
let num2 = 8;
let result = num1 % num2;
totalAge = myAge + myHusbandAge + myDaughterAge;
console.log(myName, myAge, myJobTitle);
// console.log(totalAge);
// console.log(myAge - myDaughterAge);
// console.log(num1 = num1 + num2);
// console.log(num2 += num1);
// console.log(result);
// console.log(myDaughterAge < myAge);
// console.log(myName == myDaughterName);
// console.log(myAge != myHusbandAge);
// console.log(myAge >= myFriendAge);
// console.log(myAge === myFriendAge);
// const res = myAge + myDaughterAge > myHusbandAge && myHusbandAge > 30
//         ? console.log("Expected result")
//         : console.log("Our daddy is so old");

// if(myFriendAge == 30 && myDaughterAge == 4){
//     console.log("Perfect age!");
// }else if(myFriendAge < myAge){
//     console.log("We look great!")
// }else{
//     console.log("Wooow");
// }
const result2 = "Friday";
switch (result2){
    case "Monday" :{
        console.log("Not today");
    }
    break;
    case "Sunday" :{
        console.log("This is false");
    }
    break;
    case "Friday" :{
        console.log("You are right");
    }
    break;
    default: {
        console.log("Yes!!!");
    }
}
