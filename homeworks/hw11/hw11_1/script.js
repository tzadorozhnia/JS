let url = new URL("https://dummyjson.com/carts");

let divCart = document.createElement("div");

fetch(url)
    .then(response => response.json())
    .then(cartsObj => {
        for (let cart of cartsObj.carts) {

            let h2 = document.createElement("h2");
            h2.innerText = `Корзина ID: ${cart.id}`;
            divCart.appendChild(h2);

            let pCartInfo = document.createElement("p");
            pCartInfo.innerText = `Загальна сума: ${cart.total}, 
Сума зі знижкою: ${cart.discountedTotal}, 
ID користувача: ${cart.userId}, 
Всього товарів: ${cart.totalProducts}, 
Загальна кількість: ${cart.totalQuantity}`;

            divCart.appendChild(pCartInfo);

            let h3 = document.createElement("h3");
            h3.innerText = "Товари:";
            divCart.appendChild(h3);

            for (let product of cart.products) {

                let pProduct = document.createElement("p");

                pProduct.innerText = `Товар ID: ${product.id} | 
Назва: ${product.title} | 
Ціна: ${product.price} | 
Кількість: ${product.quantity} | 
Сума: ${product.total} | 
Знижка: ${product.discountPercentage}% | 
Сума зі знижкою: ${product.discountedTotal}`;

                divCart.appendChild(pProduct);

                let img = document.createElement("img");
                img.src = product.thumbnail;
                img.alt = product.title;

                divCart.appendChild(img);
            }
        }
    });

document.body.appendChild(divCart);