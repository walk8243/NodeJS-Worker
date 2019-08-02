import { MessageChannel } from "worker_threads";

// const messageChannel = new MessageChannel();
// const port1 = messageChannel.port1;
// const port2 = messageChannel.port2;
const { port1, port2 } = new MessageChannel();
port1.on('message', (message) => { console.log('received', message); });
port2.postMessage({ foo: 'bar' });
