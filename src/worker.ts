import { Worker, isMainThread, threadId, parentPort } from "worker_threads";

console.log('common', threadId);
if(isMainThread) {
  console.log('main thread', threadId);
  const worker = new Worker(__filename);
  worker.on('message', (message) => { console.log('received', message); });
  worker.on('error', (error) => { console.error('occurred', error.message); });
} else {
  console.log('worker thread', threadId);
  parentPort!.postMessage({ foo: 'bar' });
}
