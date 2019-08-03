import { threadId, parentPort } from "worker_threads";

console.log('worker thread', threadId);
const data = { foo: 'bar' };

parentPort ? parentPort.postMessage(data) : console.log(data);
