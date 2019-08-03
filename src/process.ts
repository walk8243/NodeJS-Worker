import { exec } from "child_process";

const childProcess = exec('echo 1', (error, stdout, stderr) => {
  console.log('received', stdout);
});
console.log('main process', process.pid);
console.log('child process', childProcess.pid);
