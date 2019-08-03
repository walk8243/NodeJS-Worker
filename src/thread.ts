import { Worker, threadId } from "worker_threads";

console.log('main thread', threadId);
const worker = new Worker(require.resolve('./thread/worker'));
worker.on('message', (message) => {
  console.log('received', message);
});
worker.on('error', (error) => {
  console.error('occurred', error.message);
});
