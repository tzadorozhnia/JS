// #WpkK0ZH1
// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

let arrNumber=[1,2,3,4,5];
let arrString=['str1','str2','str3','str4','str5'];
let arrMix=[1,'str1',true,4,false];

for(let q=0;q<arrNumber.length;q++){
    console.log(arrNumber[q]);
}

for(let q=0;q<arrString.length;q++){
    console.log(arrString[q]);
}

for(let q=0;q<arrMix.length;q++){
    console.log(arrMix[q]);
}

let arrAll=[[1,2,3,4,5],['str1','str2','str3','str4','str5'],[1,'str1',true,4,false]];
for (let i = 0; i < arrAll.length; i++) {
    for (let j = 0; j < arrAll[i].length; j++) {
        console.log(arrAll[i][j]);
    }
}

// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
let arr=[];
arr[0]=1;
arr[1]=2;
arr[2]=3;
arr[3]=4;
arr[4]=5;

for(let q=0;q<arr.length;q++){
    console.log(arr[q]);
}

// #qLQLJSeN7i
let arr1=[2,17,13,6,22,31,45,66,100,-18];
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
let k=0;

while (k<=arr1.length-1){
    console.log(arr1[k]);
    k++
}

//     2. перебрати його циклом for
for (let q=0;q<arr1.length;q++){
    console.log(arr1[q]);
}
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let k1=0;

while (k1<=arr1.length-1){
    if(arr1[k1]%2!==0){
    console.log(arr1[k1]);}
    k1++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let q=0;q<arr1.length;q++){
    if(arr1[q]%2!==0){
        console.log(arr1[q]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// 8. вивести масив у зворотньому порядку.
console.log(arr1.reverse())
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)