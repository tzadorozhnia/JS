// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write

let ulArr=(arr) =>{
    document.write(`<ul>`)
    for(let i=0; i<arr.length; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write('</ul>')

}
ulArr([1,'f',true])