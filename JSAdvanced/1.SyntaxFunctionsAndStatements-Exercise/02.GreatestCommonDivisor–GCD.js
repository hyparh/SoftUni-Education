function pgcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b > a) {
       var tmp = a; 
       a = b; 
       b = tmp;
    }
    
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

console.log(pgcd(15, 5));
console.log(pgcd(2154, 458));


// greatestCommonDivisors(15, 5);
// greatestCommonDivisors(2154, 458);
