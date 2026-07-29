// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить
// його через document.write
let ulNumber = (text,number) =>{
    document.write(`<ul>`)
    for(let i=0; i<number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')

}
ulNumber('text text text', 10)