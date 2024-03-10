const addSum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                reject("a, b must be numbers");
            } else {
                resolve(a + b);
            }
        }, 300);
    })
}

addSum(10, 20)
    .then(sum1 => addSum(sum1, 10))
    .then(sum2 => addSum(sum2, "20"))
    .then(console.log)
    .catch((err) => console.log({err}));

const totalSum = async () => {
    try {
        let sum = await addSum(10, 10)
        let sum2 = await addSum(sum, 10)
        console.log({sum, sum2})
    } catch (err) {
        if (err) console.log({err})
    }
}

totalSum();
