import { threadId, parentPort } from "worker_threads";

console.log('worker thread', threadId);
const naturalNumber = [];
target: for(let i=2; i<100000; i++) {
  check: for(let j=2; j<i; j++) {
    if(i % j == 0) {
      continue target;
    }
  }
  naturalNumber.push(i);
}

const data = { result: naturalNumber };

parentPort ? parentPort.postMessage(data) : console.log(data);
