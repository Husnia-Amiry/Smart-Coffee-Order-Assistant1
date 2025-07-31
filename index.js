
function startAssistant() {
// Part 1:
  let username = prompt("Enter your username (admin/user):");
  let password = prompt("Enter your password:");

  let role, securityLevel;

  if ((username === "admin" || username === "user") && password === "1234"){
    role = username;
    if(username === "admin"){
      securityLevel ="high";
      alert("High credential.");
    } else {
      securityLevel = "low";
      alert("Low credential.");
    }
  } else {
    alert("Invalid credentials. Access denied.");
    throw new Error("Authentication failed.");
  }

  // Part 2:
  let customerName = prompt("What's your name?");
  let age = parseInt(prompt("How old are you?"));
  let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
  let quantity = parseInt(prompt("How many cups would you like?"));

  let pricePerCup;

  if (coffeeType === "espresso") {
    pricePerCup = 2.5;
  } else if (coffeeType === "latte") {
    pricePerCup = 3.5;
  } else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
  } else {
    alert("Invalid coffee type.");
    throw new Error("Invalid coffee selection.");
  }

  let originalTotal= pricePerCup * quantity;

  let discount = 0;
  if (age < 18 || age > 60) {
    discount = originalTotal * 0.1;
  }

  let finalTotal = originalTotal-discount;

  // Part 3:
  let numPeople = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
  let tipPercentage = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

  let tipAmount = (finalTotal * tipPercentage) / 100;
  let totalwithTip= finalTotal + tipAmount;
  let amountPerPerson= totalwithTip / numPeople;

  // Display Results
  alert(
    `Hello ${customerName}!\n` +
    `You ordered ${quantity} ${coffeeType}(s).\n` +
    `Original total: $${originalTotal}\n` +
    `Discount: $${discount}\n` +
    `Tip: $${tipAmount}\n` +
    `Total with Tip: $${totalwithTip}\n` +
    `Split between ${numPeople} people: $${amountPerPerson} each`
  );

}