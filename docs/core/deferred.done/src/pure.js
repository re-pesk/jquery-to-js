const Deferred = () => {
  let methods = {}; 
  const promise = new Promise((resolve, reject) => (methods = {resolve, reject}));
  return Object.assign(promise, methods);
}

const p = document.querySelector('p');
const button = document.querySelector('button')

const fn1 = () => p.append(' 1 ');
const fn2 = () => p.append(' 2 ');
const fn3 = (n) => p.append(n + ' 3 ' + n);

const dfd = Deferred();

dfd
  // .done() can take any number of functions or arrays of functions
  .then((n) => [fn1, fn2, fn3, fn2, fn1].forEach(fn => fn(n)))
  // We can chain done methods, too
  .then((n) => p.append(n + ' we\'re done.'));

button.onclick = () => dfd.resolve('and');