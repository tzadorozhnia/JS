// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об'єкта.
//
// Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.


function CopyObject(value) {
    let strObf = JSON.stringify(value);
    let newObj = JSON.parse(strObf);

    for (let key in value) {

        if (value[key] === undefined) {
            newObj[key] = undefined;
        }
        if (value[key] === null) {
            newObj[key] = null;
        }
        if (Number.isNaN(value[key])) {
            newObj[key] = NaN;
        }
        if (typeof value[key] === 'function') {
            newObj[key] = value[key];
        }
    }

    return newObj;
}

obj = {
    name: "John",
    age: 32,
    foo(){
        console.log(`name:${this.name} age: ${this.age}`);
    }
}

copy = new CopyObject(obj);
console.log(copy);
copy.foo()
