// #bq1zkx7WP
//
// *** (подібне вже було, але...будьте уважні в другій частині)

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

const priceElement = document.getElementById('price');

let price = Number(localStorage.getItem('price')) || 100;

const currentTime = Date.now();

let lastSession = sessionsList[sessionsList.length - 1];

if (!lastSession || currentTime - lastSession.time >= 10000) {
    price += 10;
}

sessionsList.push({
    time: currentTime,
    price: price
});

localStorage.setItem('price', price);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

priceElement.innerText = `${price} грн`;

//
// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об'єктів та дві кнопки prev next
//
// при завантаженні сторінки з'являються перші 10 об'єктів.
//
//     При натисканні next виводяться наступні 10 об'єктів
//
// При натисканні prev виводяться попередні 10 об'єктів


const users = [];

for (let i = 1; i <= 100; i++) {
    users.push({
        id: i,
        name: `User ${i}`
    });
}

const container = document.getElementById('container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPage = 0;
const itemsPerPage = 10;

function showUsers() {

    container.innerHTML = '';

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = start; i < end; i++) {

        const div = document.createElement('div');

        div.innerText = `${users[i].id} - ${users[i].name}`;

        container.appendChild(div);
    }
}

nextButton.addEventListener('click', function () {
    if (currentPage < 9) {
        currentPage++;
        showUsers();
    }

});

prevButton.addEventListener('click', function () {
    if (currentPage > 0) {
        currentPage--;
        showUsers();
    }

});

showUsers();