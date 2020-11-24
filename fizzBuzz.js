function fizzBuzz() {
    let sumTotal = 0;
	for(let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumTotal += i;
        }
    }
    console.log(sumTotal)
}

fizzBuzz();