import { Worker } from "worker_threads";
import Main from "./thread/Main";

const loop = 4;
const workerData = {
  maxNumber: 100000,
};
const main = new Main(loop);

for(let i=0; i<loop; i++) {
  const worker = new Worker(require.resolve('./thread/worker'), { workerData: workerData });
  worker.on('message', (message) => {
    main.emit('result', worker.threadId, message.result);
  });
}
