import cluster, { worker } from "cluster";

console.log('common', process.pid);
if(cluster.isMaster) {
  console.log('main cluster', process.pid);
  cluster.fork();
  cluster.on('message', (worker, message, handle) => {
    console.log('received', message, 'from', worker.id);
  });
} else {
  console.log('worker cluster', process.pid);
  worker.send({ foo: 'bar' });
  worker.kill();
}
