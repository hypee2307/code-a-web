let number = 10;
function increase(number) {
  global: number++;
}
increase(number);
console.log(number);
