const addSum = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a !== "number" || typeof b !== "number") {
            callback("a, b must be numbers");
        } else {
            callback(undefined, a + b);
        }
    }, 3000);
}

addSum(10, 10, (error, sum) => {
    if (error) {
        console.log({error});
    } else {
        console.log({sum})
    }
    addSum(sum, 15, (error, sum) => {
        if (error) {
            console.log({error});
        } else {
            console.log({sum})
        }
    });
});
