#Tip Calculator
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


BACKEND DEVELOPMENT

const calculateBill = () => {
  //TODO:Set the tip percentage
  //TODO: Calculate tip percentage value
  const tipPercentage = Number(tipInput.value / 100);
  const tipAmount = Number(billTotalInput.value) * tipPercentage;
  //TODO: Sum the tip percentage value with the billTotalInput
  const totalSum = Number(billTotalInput.value) + tipAmount;
  console.log(totalSum);
  //IS NOT DONE YET
  //FIXME: Cant get the number of person 
  let numberOfPeople = Number(numberOfPeopleDiv.innerText);
  totalBill = totalSum / numberOfPeople;
    // console.log(totalBill);
  //TODO: Display per person total
  perPersonTotal.innerText = totalBill;
}

//TODO:Increase people value and display it using DOM


const increasePeople = () => {
  // TODO:Create variable that can make increment when click the plus button
  //TODO:Use conditional to added the number
  let numberOfPeople = Number(numberOfPeopleDiv.innerText);
  numberOfPeople +=  1;
  numberOfPeopleDiv.innerText = numberOfPeople;

  //TODO:Display the value using the DOM
}

const decreasePeople = () => {
  let numberOfPeople = Number(numberOfPeopleDiv.innerText);
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  //TODO: Prevent to fall to 0 people and display negative value
  if (numberOfPeople <= 0) {
     numberOfPeopleDiv.innerText = 1;
  }
}

