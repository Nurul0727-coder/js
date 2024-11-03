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
 let n=27, a=0;
 if (n%2==0){while(n>0){n=n/2
    a++
 }console.log(a)
 else {
    console.log(n*3+1)}
