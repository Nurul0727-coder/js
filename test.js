//bodlogo:21. 3-37 хүртэлх тоонуудаас 5д хуваагддаг тоонуудыг дарааллуулан хэвлэ.
// let i=3;
// while(i<37){
//     i+=1
//     if (i%5===0){
//         console.log(i)
//     }
// }

//bodlogo 23. Өгөгдсөн эерэг тооны тэгш цифрүүдийн үржвэрийг олно уу
// Жишээ нь 4019 үед 4 * 0 == 0
// let a=7274  //bymbaagiin jishee
// let d=1
// let c = false
// while(a>0){
//     let b=a%10;
//     if(b%2==0){
//         if (b ==0){
//             d=0
//             console.log(0)
//         }
//         d*=b
//         c=true
//     }
//     a=Math.floor(a/10);
//     if (!c){d}
// }
// console.log(d)
//bodlogo 23. Orgiliin jishee /amrhn
// let a=0, b=7, c=2, d=7
// let multiple=1
// if (a%2==0){multiple*=a}
// if (b%2==0){multiple*=b}
// if (c%2==0){multiple*=c}
// if (d%2==0){multiple*=d}
// console.log(multiple)

/*bodlogo 26. N тоо өгөгдөнө, Хэрэв N тоо тэгш бол 2-т хуваа 
эсвэл сондгой бол 3 аар үржиж 1 ийг нэм.
 Дээрх үйлдлийг N нь 1 тэй тэнцүү болох хүртэл хэдэн удаа давтах вэ.*/
//  let n=27, a=0;
//  if (n%2==0){while(n>0){n=n/2
//     a++
//  }console.log(a)
//  else {
//     console.log(n*3+1)}

// for (i = 0; i < 10; i = i % 2) {
//   console.log("HELLO!", i);
// }

// let age1 = 20;
// let age2 = 35;
// let age3 = 40;
// let age4 = 21;
// let age5 = 64;
// let totalAge = age1 + age2 + age3 + age4 + age5;
// let total = 5;
// let avgAge = totalAge / total;
// console.log(avgAge);

//Array

// 1. favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.
// let favoriteColors = ["purple", "pink", "lightblue", "black", "cherryred"];
// favoriteColors[3] = "limegreen";
// console.log(favoriteColors);

//2.levelsCompleted гэсэн array үүсгээд  boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.
// let levelsCompleted = [false];
// levelsCompleted.push(true);
// console.log(levelsCompleted);

//3. destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.
// let destinations = ["SouthKorea", "France", "italy", "Norway", "Spain"];
// // destinations.shift();
// destinations.unshift("New York");
// console.log(destinations);

// 4. ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.
// let ages = [18, 21, 22, 20, 23, 36, 79];
// for (let i = 0; i < ages.length; i++) {
//   ages[i] += 5;
// }
// console.log(ages);

// 5.numbers гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// Дээрх олсон утгуудаа хэвлэж харуулаарай.

// 5.1 Дээрх array доторх тоонуудын нийлбэрийг ол.
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 14, 15, 16, 17, 18];
let sum = 0;
for (i = 0; i < number.length; i++) {
  sum += number[i];
}
console.log(sum);

// 5.2  Дээрх аrray - ийн хамгийн их тоог ол.
// let biggest = number[0];
// for (let i = 0; i < number.length;i++){if(number[i<biggest])}
//5.3
// let smallest = number[0];
// for (let i = 0; i < number.length; i++) {
//   if (number[i] < smallest) {
//     smallest = number[i];
//   }
// }
// number.push(5);
// number.unshift(17);
// console.log(number);

let tegsh = 0;
let sondgoi = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    tegsh++;
  } else {
    sondgoi++;
  }
}
console.log(tegsh, sondgoi);
