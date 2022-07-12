/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");


const calculateBill = () => {
  //TODO:Set the tip percentage
  //TODO: Calculate tip percentage value
    const tipPercentage = Number(tipInput.value / 100);
  //TODO: Sum the tip percentage value with the billTotalInput
  const totalSum = Number(billTotalInput.value) + tipPercentage;
  console.log(totalSum);
  //IS NOT DONE YET
  //FIXME: Cant get the number of person 
    const totalBill = totalSum / perPersonTotal.value;
    // console.log(totalBill);
  //TODO: Display per person total
}

//TODO:Increase people value and display it using DOM


const increasePeople = () => {
  // TODO:Create variable that can make increment when click the plus button
  //TODO:Use conditional to added the number
  let numberOfPeople = Number(numberOfPeopleDiv.innerText);
  numberOfPeople +=  1;
  console.log(numberOfPeopleDiv.innerText = numberOfPeople);

  //TODO:Display the value using the DOM
}


