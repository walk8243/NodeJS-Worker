import { createThread } from "./thread/Main";

const loop = 4;
const workerData = {
  maxNumber: 100000,
};

const promises = [...Array(loop).keys()].map(() => createThread(require.resolve('./thread/worker'), workerData));
Promise.all(promises)
  .then((results) => {
    console.log(results.map((value) => value.result.length));
  });
