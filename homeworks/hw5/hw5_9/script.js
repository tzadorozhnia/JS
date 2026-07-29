// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
//     Для кожного об’єкту окремий блок.

let printWithForIn = (arr) =>{
    for (let item of arr) {
        for (let key in item) {
            document.write(`<div>${key} - ${item[key]}</div>`);
        }
        document.write("<hr>");
    }
}
printWithForIn([{'id': 101, 'status': "active", 'tags': "admin" }, { 'title': "Книга", 'price': 450, 'instock': true }])
