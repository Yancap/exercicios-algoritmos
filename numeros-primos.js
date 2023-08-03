


function isPrime(num){
    if (num === 2 || num === 3 || num === 5 || num === 7 ) {
        return true
    }
    
    return (Math.sqrt(num) % 1 === 0) ? false : true
}

const time1 = new Date()
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(997*997));
console.log(isPrime(977));
console.log(isPrime(997));
console.log(isPrime(947));
console.log(isPrime(883));
console.log(isPrime(773));

console.log(new Date().getTime() - time1.getTime() );