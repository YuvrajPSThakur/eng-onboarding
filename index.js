const n = parseInt(
    prompt(
        "Enter the value of N:"
    )
);

let number1 = 0 , number2 = 1;
let newNumber ;

console.log("Fibonacci Sequence");

if (n<1){
    console.log("Number should be greater than 0")

}else {
    for(let i =1;i<=n ;i++){
        console.log(number1);
        newNumber = number1 + number2;
        number1 = number2;
        number2 = newNumber;
    }
}


