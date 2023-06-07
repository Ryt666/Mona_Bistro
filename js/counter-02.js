//любой клик по окну
window.addEventListener('click', function (event) {
    let counter;

    //проверям клик строго по кнопкам плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        //находим обертку счетчика 
        const counterWrapper = event.target.closest('.counter-wrapper');

        //находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');

    }

    //является ли элемент кнопкой плюс
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;

    }

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {

            counter.innerText == --counter.innerText;

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            //проверка на товар который находится в корзине 

            console.log('IN CART');
            event.target.closest('.cart-item').remove();

            toggleCartStatus();

            //запускаем пересчет элементов в корзине 
            calcCartPriceAndDelivery();

        }




    }

    //Проверям клик на + или - внутри корзины

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //запускаем пересчет элементов в корзине 
        calcCartPriceAndDelivery();
    }

});