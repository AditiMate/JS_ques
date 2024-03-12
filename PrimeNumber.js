// program to check if a number is prime or not

/*A prime number is a positive integer that is only divisible by 1 and itself. 
For example, 2, 3, 5, 7, 11 are the first few prime numbers.
*/

let number = -44;
isPrime = true

// check if number is equal to 1
if(number === 1){
    console.log("1 is neither prime nor composite");
}

// check if number is greater than 1
else if(number > 1){

    // looping through 2 to number-1
    for(i = 2; i < number; i++){
        if(number % i == 0){
            isPrime = false
            break
        }     
    }
    if(isPrime){
        console.log(`${number} is a prime number`);
    } 
    else{
        console.log(`${number} is not a prime number`);
    }
}

// check if number is less than 1
else {
    console.log(`${number} is not a prime number`);
}