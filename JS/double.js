const steps = 8;

let result = 1;

for (let i = 1; i <= steps; i++) {

    result *= Math.pow(i, i);
}

console.log(result);
