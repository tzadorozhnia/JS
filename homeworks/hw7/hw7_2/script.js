// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "Kait", "Winslet", "winslet@gmail.com", "067454555455"),
    new User(2, "John", "Smith", "smith@gmail.com", "067111111111"),
    new User(3, "Anna", "Brown", "brown@gmail.com", "067222222222"),
    new User(4, "Peter", "Wilson", "wilson@gmail.com", "067333333333"),
    new User(5, "Emma", "Taylor", "taylor@gmail.com", "067444444444"),
    new User(6, "Michael", "Davis", "davis@gmail.com", "067555555555"),
    new User(7, "Sarah", "Miller", "miller@gmail.com", "067666666666"),
    new User(8, "David", "Anderson", "anderson@gmail.com", "067777777777"),
    new User(9, "Laura", "Thomas", "thomas@gmail.com", "067888888888"),
    new User(10, "James", "Moore", "moore@gmail.com", "067999999999")
];

let usFilter = users.filter(user=>user.id % 2 ===0)
console.log(usFilter);