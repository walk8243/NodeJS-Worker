import { Worker } from "worker_threads";

export function createThread(filepath: string, workerData: object = {}): Promise<{threadId: number, result: number[]}> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(filepath, { workerData: workerData });
    worker.on('message', (message) => {
      return resolve({ threadId: worker.threadId, result: message.result });
    });
    worker.on('error', reject);
  });
}
