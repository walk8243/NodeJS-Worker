import { Worker, isMainThread, parentPort } from "worker_threads";

console.log('common');
if(isMainThread) {
  console.log('main thread');
  const worker = new Worker(__filename);
  worker.on('message', (message) => { console.log('received', message); });
  worker.on('error', (error) => { console.error('occurred', error.message); });
} else {
  console.log('worker thread');
  parentPort!.postMessage({ foo: 'bar' });
}
