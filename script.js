//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));



function fizzy() {
    let answer = document.getElementById("num").value;
    let display = "hello";
    let currentNum ="";

for(let i=1 ; i<=answer; i++){
    if((i%3)===0 && (i%5)===0){
        console.log("FizzBuzz!");
        currentNum=  currentNum + " fizzbuzz!";
        ;
    } else if((i%3)===0){
        console.log("Fizz!");
        currentNum=  currentNum + " fizz!";
    } else if((i%5)===0){
        console.log("Buzz!");
        currentNum=  currentNum + " buzz!";
    }
    else {
        console.log(i);
        currentNum=  currentNum + " " + i;
    }
    document.getElementById("display").innerHTML = currentNum;
}

};
fizzy()




