const printLn = text => console.log(text);

const lines = text => text.split('\n');

const even = (_, number) => number % 2 === 0;

const filter = predicate => array => array.filter(predicate)

const join = separator => array => array.join(separator)


const joinLines = join('\n')

const filterEven = filter(even)


const text = `
Hi, my name is
My name is,
My name is
Chika chika
Slim Shady
`;

printLn(
  joinLines(
    filterEven(
      lines(text)
    )
  )
);


const createRange = arr => from => to => from < to ? createRange(arr.concat([from]))(from + 1)(to) : arr
const range = createRange([])

const jsRange = (start, end) => Array.from({ length: end - start }, (_, i) => start + i)

const iters = [10, 100, 1000, 10_000, 100_000];

const jstimes = [];
const fntimes = [];

for (const i of iters) {
  let start = performance.now();
  jsRange(0, i);
  jstimes.push(performance.now() - start);

  start = performance.now();
  range(0)(i);
  fntimes.push(performance.now() - start);
}

const jsTotal = jstimes.reduce((acc, curr) => acc + curr, 0);
const fnTotal = fntimes.reduce((acc, curr) => acc + curr, 0);

printLn(`Javascript ${jstimes}\nTotal: ${jsTotal}\nAverage: ${jsTotal / jstimes.length}\n`);
printLn(`Functional ${fntimes}\nTotal: ${fnTotal}\nAverage: ${fnTotal / fntimes.length}\n`);


