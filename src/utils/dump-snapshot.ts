import { writeHeapSnapshot } from "v8";

export const dumpSnapshot = () => {
  if (false) {
    console.log('----- Skip snapshot --------');
    return
  }
  console.log('----- Taking snapshot --------');
  const fileName = writeHeapSnapshot();
  console.log(`Created heapdump file: ${fileName}`);
};