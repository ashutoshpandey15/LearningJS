//IIFE
let a = () => {
  //promise placed inside a fxn to return a new promise after every 4s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(259);
    }, 4000);
  });
};

(async () => {
  //in this line we used iife (function{})() because we dont have to place async fxn in a
  //   nother functiona an call it again and again
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})();
