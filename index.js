let output = [];
let count = 1;

function fizzBuzz () {

    while( count <= 100) {
output.push(count);
count++;
    if (count % 3 === 0 && count % 5 === 0){
        console.log("FizzBuzz")
    } else if (count % 5 === 0 ){
        console.log("Buzz")
     } else if (count % 3 === 0) {
        console.log("Fizz")
     } else {console.log(count)}
}
}
fizzBuzz()
