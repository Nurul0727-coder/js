//1
const n = 7;
let result = "";
for (let k = 0; k < n; k++) {
  let i = 0;
  while (i < n) {
    result = result + "* ";
    i++;
  }
  result = result + "\n";
}
console.log(result);
