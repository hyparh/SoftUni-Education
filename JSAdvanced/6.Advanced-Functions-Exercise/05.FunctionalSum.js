function solve(n) {
    let inner = function(a) {
        n += a;
        return inner;
    };

    inner.toString = function() {
        return n;
    };

    return inner;
}

console.log(solve(1).toString());
console.log(solve(1)(6)(-3).toString());