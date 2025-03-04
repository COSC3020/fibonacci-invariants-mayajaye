function fib(n, fib_solns = {}) {
    if (n == 0) return [0];
    if (n == 1) return [0, 1]; //base cases <-^

    if (!fib_solns[n]) { //if n is not in the array
        const leftNum1 = fib(n - 1, fib_solns); //recursively compute n - 1
        const leftNum2 = fib(n - 2, fib_solns); //and n - 2

        const fib_n = leftNum1[leftNum1.length - 1] + leftNum2[leftNum2.length - 1]; //compute fib of current n with the
        fib_solns[n] = leftNum1.concat([fib_n]);                                     //last values of the arrays then                                                                                     
    }                                                                                //add fib(n) to the end of the array
    return fib_solns[n];
}

