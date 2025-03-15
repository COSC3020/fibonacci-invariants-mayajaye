function fib(n, fib_solns = {}) {
    if (n == 0) return [0];
    if (n == 1) return [0, 1]; //base cases <-^

    if (!fib_solns[n]) { //if n is not in the computed
        if (!fib_solns[n - 1]) { //and if n - 1 is not computed
            fib_solns[n - 1] = fib(n - 1, fib_solns); //compute fib of n - 1 and store it
        }
        const prevFibs = fib_solns[n-1];                                             //compute fib of current n using
        const fib_n = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]; //the values in the array then
        fib_solns[n] = prevFibs.concat([fib_n]);                                     //add fib(n) to the end of the array                                                  
    }
    return fib_solns[n];
}

