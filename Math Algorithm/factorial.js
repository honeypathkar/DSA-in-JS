function factorial (n) {
    let fact = 1;
    if(n == 0 && n == 1){
        return fact;
    }
    else{
        for(let i = n; i > 1; i--){
            fact *= i
        }
        return fact;
    }
}

console.log(factorial(1)) //Output 1
console.log(factorial(5)) //Output 120