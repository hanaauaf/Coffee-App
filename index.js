'use strict'

//Part 1: 🔐 Login and Access Control
let username= prompt ("Please login by choosing your role: Admin/User (capital letter)") 
let password=  prompt("Please write a password for your account")
if (username !==null) {
    if ((username === "Admin" || username=== "User") && password=== "1234") {
        if (username=== "Admin"){
            console.log ("Welcome Admin! Your security level is high.")
        } else {
            console.log ("Welcome User! Your security level is low.")
        }
        
    } else{
       alert("Invalid input")
       
    }
}
if ((username !== "Admin" && username !== "User") || password !== "1234") {
  alert("Warning: Invalid role or password. You can still continue, but some features may not work.");
} else {
  alert("Access granted. You are logged in as " + username + ".");
}


//Part 2: ☕ Coffee Shop Order Calculator
let name = prompt (" Please enter your name:")
let age= Number (prompt ("Please enter your age:"))
let order= prompt("Please enter your order: Espresso/Latte/Cappucino")
let quantity= Number(prompt("How many cups?")) 
let pricePerCup;
if (order.toLowerCase()==="espresso"){
    pricePerCup=2.5
}
else if (order.toLowerCase()==="latte"){
    pricePerCup=3.5
}
else if (order.toLowerCase()==="cappucino"){
    pricePerCup=4.00
}
else{
    alert("Invalid coffee type!")
    
}
let originalTotal= pricePerCup * quantity;
let discount= 0;
if (age < 18 || age > 60){
    discount= originalTotal * 0.10
}
let finalTotal= originalTotal - discount;



//Part 3: 🧾 Bill Splitter with Tip
let numOfPeople = Number(prompt("Please choose the number of people: 1/2/3"))
let tipPercent= Number(prompt("Please write the tip you want to give: 0/5/10/15"))
let tipAmount= finalTotal * (tipPercent/100)
let totalWithTip = finalTotal + tipAmount
let eachPersonPays= totalWithTip / numOfPeople

alert(
  "Order Summary:\n" +
  "You ordered " +  quantity + "cups of "+ order + "\n"+
  "Original total: " + originalTotal + "\n"+
  "Discount: " + discount+ "\n"+
  "Tip: $" + tipAmount.toFixed(2) + "\n" +
  "Total with Tip:$ " + totalWithTip.toFixed(2) + "\n" +
  "Each Person Pays:$ " + eachPersonPays.toFixed(2)
);


console.log (`Hello ${name}`)
console.log(`Your original total is: ${originalTotal.toFixed(2)}`)
console.log (`Your discount is: ${discount}`)
console.log (`Your final total is: ${totalWithTip}`)
console.log (`Each person has to pay: ${eachPersonPays} dollars.`)
console.log ("Thanks for your purchase.")