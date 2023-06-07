const productsContaner = document.querySelector('#products-container');

getProducts();

//асинхронная функция получения данных из файлов products.json
async function getProducts() {

    //получение данных из products.json
    const response = await fetch('./js/products.json');

    //парсим данные из json формата в js
    const productArray = await response.json();

    //запускаем функцию рендера(отображение товаров)
    console.log(productArray);

    renderProducts(productArray);

}



function renderProducts(productArray) {

    productArray.forEach(function (item) {
        const productHTML = `<div class="col-md-6">
    <div class="card mb-4" data-id="${item.id}">
        <img class="product-img" src="images/${item.imgSrc}" alt="">
        <div class="card-body text-center">
            <h4 class="item-title">${item.title}</h4>
            <p><small data-items-in-box class="text-muted">${item.itemsInBox} pieces</small></p>

            <div class="details-wrapper">

                <!--Счетчик -->
                <div class="items counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter>1</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__weight">${item.weight}</div>
                    <div class="price__currency">${item.price}</div>
                </div>
            </div>

            <button data-cart type="button" class="btn btn-block btn-outline-warning">+ in cart</button>

        </div>
    </div>
</div>`;

        productsContaner.insertAdjacentHTML('beforeend', productHTML);

    })

}