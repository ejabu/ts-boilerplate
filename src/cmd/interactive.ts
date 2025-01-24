import { createInterface } from 'node:readline';
import { calculate } from '@src/utils/calculate';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on('line', (line) => {
  console.log(calculate());
  rl.prompt();
});

rl.on('close', () => {
  console.log('Closed.');
  process.exit(0);
});
