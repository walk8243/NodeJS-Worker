import { threadId, parentPort } from "worker_threads";

console.log('worker thread', threadId);
let result = 0;
for(let i=0; i<1000; i++) {
  result += i;
}
const data = { result: result };

parentPort ? parentPort.postMessage(data) : console.log(data);
