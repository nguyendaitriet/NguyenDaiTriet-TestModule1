function solveLinearEquation(a, b) {
    if (a == 0) {
        if (b == 0) {
            console.log("The given linear has infinite number of solutions.");
        } else {
            console.log("The given linear has no solution.");
        }
    }
    else {
        console.log("The solution of the given linear equation is: " + -b / a);
    };

}
solveLinearEquation(0,0);