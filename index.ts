#! /usr/bin/env node
import inquirer from"inquirer"
let myBalance = 10000;
let myPIn = 1234;
let pinAnswer = await inquirer.prompt(
    [
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);

if(pinAnswer.pin === myPIn){
console.log("Correct pin code!!!")

   let operationAns = await inquirer.prompt(
    [
      {
       name: "operation",
       message: "please select option",
       type: "list",
       choices: ["withdraw","fast chash", "check balance"]
    
       }
    ]
);
  console.log(operationAns);

  if(operationAns.operation === "fast chash"){
  let fastchachAns = await inquirer.prompt(
    [
        {
            name: "fastchash",
            message: "Salect your amount ",
            type: "list",
            choices: ["1000","3000","5000","7000","9000"]
        }
    ]
  );
   if(fastchachAns.fastchash > myBalance){
    console.log(" Insufficient balance ")
   }else{
    myBalance -= fastchachAns.fastchash;
    console.log(` ${fastchachAns.fastchash} withdraw Successfully`);
    console.log("your balnce is: " + myBalance)
   }
  }


if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
            
        }
    ]);
    if(amountAns.amount > myBalance){
        console.log("Insufficient Balance")
    }else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} withdraw successfully`);
    console.log("your current blance is: " + myBalance);
}
} else if (operationAns.operation === "check balance"){
    console.log("your balnce is: " + myBalance)
} 

}else{
    console.log(" your code is inCorrect try agin")
}