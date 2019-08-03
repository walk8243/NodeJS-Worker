const data = [];
const loop = 4;
const maxNumber = 100000;

for(let i=0; i<loop; i++) {
  const naturalNumber = [];
  target: for(let i=2; i<maxNumber; i++) {
    check: for(let j=2; j<i; j++) {
      if(i % j == 0) {
        continue target;
      }
    }
    naturalNumber.push(i);
  }
  
  data.push({ result: naturalNumber });
}

// console.log(data);
console.log(data.map((value) => value.result.length));
