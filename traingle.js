//2
const n = 7;
let result = "";
for (let k = 0; k < n; k++) {
  let i = 0;
  for (let j = 0; j < n; j++) {
    result = result + " ";
  }
  while (i < k + 1) {
    result = result + "* ";
    i++;
  }
  result = result + "\n";
}
console.log(result);

//3
// for (let k = 0; k < n; k++) {
//   let i = 0;
//   for (let j = 0; j < n - k - 1; j++) {
//     result = result + " ";
//   }

//   while (i < k + 1) {
//     result = result + "* ";
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

//4
// const n = 7;
// let result = "";
// for (let k = 0; k < n; k++) {
//   let i = 0;
//   for (let j = 0; j < n - k - 1; j++) {
//     result = result + " ";
//   }
//   while (i < k + 1) {
//     if (i == 0 || i == k || k == n - 1) {
//       result += "* ";
//     } else {
//       result += "  ";
//     }
//     i++;
//   }
//   result = result + "\n";
// }
// console.log(result);

// 5
// const n = 5;
// let result = "";
// for (let k = 0; k < n; k++) {
//   let i = 0;
//   for (let j = 0; j < n - k - 1; j++) {
//     result = result + " ";
//   }
//   while (i < k + 1) {
//     if (i == 0 || i == k ) {
//       result += "* ";
//     } else {
//       result += "  ";
//     }
//     i++;
//   }
//   result = result + "\n";
// }
// for (let k=n-1; k>=0; k--) {
//   let i=0;
//   for(let j=0;j<n-k-1; j++){
//   result = result + " ";
// }
// while (i < k + 1) {
//   if (i == 0 || i == k ) {
//     result += "* ";
//   } else {
//     result += "  ";
//   }
//   i++;
// }
// result = result + "\n";
// }
// console.log(result);