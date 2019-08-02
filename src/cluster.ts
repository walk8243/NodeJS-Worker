import cluster, { worker } from "cluster";

console.log('common');
if(cluster.isMaster) {
  console.log('main cluster');
  cluster.fork();
  cluster.on('message', (worker, message, handle) => {
    console.log('received', message, 'from', worker.id);
  });
} else {
  console.log('worker cluster');
  worker.send({ foo: 'bar' });
  worker.kill();
}
