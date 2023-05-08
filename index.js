// vegetables
cabbage = 8;
avocado = 30;
tomato = 10;

// fruits
grapes = 20;
raspberry = 25;
coconut = 50;

do {
    season = prompt('When do you make a purchase? (winter or summer)');
} while (season.toLowerCase().replaceAll(' ', '') !== 'winter' && season.toLowerCase().replaceAll(' ', '') !== 'summer');

do {
    category = prompt('Choose a category (fruits or vegetables)');
} while (category.toLowerCase().replaceAll(' ', '') !== 'fruits' && category.toLowerCase().replaceAll(' ', '') !== 'vegetables');

if (category === 'fruits') {
    do {
        basket = prompt('Choose a fruit (grapes or raspberry or coconut)');
    } while (basket.toLowerCase().replaceAll(' ', '') !== 'grapes'
    && basket.toLowerCase().replaceAll(' ', '') !== 'raspberry'
        && basket.toLowerCase().replaceAll(' ', '') !== 'coconut');
} else if (category === 'vegetables') {
    do {
        basket = prompt('Choose a vegetable (cabbage or avocado or tomato)');
    } while (basket.toLowerCase().replaceAll(' ', '') !== 'cabbage'
    && basket.toLowerCase().replaceAll(' ', '') !== 'avocado'
        && basket.toLowerCase().replaceAll(' ', '') !== 'tomato');
}

do {
    countOfProducts = prompt(`How many of ${basket} do you need? 
    (Value must be more then 1.)`);
} while (countOfProducts <= 1);

if (season.toLowerCase().replaceAll(' ', '') === 'winter') {
    if (category.toLowerCase().replaceAll(' ', '') === 'fruits') {
        if (basket.toLowerCase().replaceAll(' ', '') === 'grapes') {
            price = countOfProducts * grapes * 2;
            document.write(`<div class="product" align="center">
            <img src="images/fruits/grapes.svg" alt="grapes" width="100" height="100">
            <p>Selected product: <b>grapes</b></p>
            <p>Count of grapes: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>winter</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'raspberry') {
            price = countOfProducts * raspberry * 2;
            document.write(`<div class="product" align="center">
            <img src="images/fruits/raspberry.svg" alt="raspberry" width="100" height="100">
            <p>Selected product: <b>raspberry</b></p>
            <p>Count of raspberries: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>winter</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'coconut') {
            price = countOfProducts * coconut * 2;
            document.write(`<div class="product" align="center">
            <img src="images/fruits/coconut.svg" alt="coconut" width="100" height="100">
            <p>Selected product: <b>coconut</b></p>
            <p>Count of coconuts: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>winter</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        }
    } else if (category.toLowerCase().replaceAll(' ', '') === 'vegetables') {
        if (basket.toLowerCase().replaceAll(' ', '') === 'cabbage') {
            price = countOfProducts * cabbage * 2;
            document.write(`<div class="product" align="center">
            <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
            <p>Selected product: <b>cabbage</b></p>
            <p>Count of cabbages: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>winter</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'avocado') {
            price = countOfProducts * avocado * 2;
            document.write(`<div class="product" align="center">
            <img src="images/vegetables/avocado.svg" alt="avocado" width="100" height="100">
            <p>Selected product: <b>avocado</b></p>
            <p>Count of avocados: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>winter</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'tomato') {
            price = countOfProducts * tomato * 2;
            document.write(`<div class="product" align="center">
            <img src="images/vegetables/tomato.svg" alt="tomato" width="100" height="100">
            <p>Selected product: <b>tomato</b></p>
            <p>Count of tomatos: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>winter</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        }
    }
} else if (season.toLowerCase().replaceAll(' ', '') === 'summer') {
    if (category.toLowerCase().replaceAll(' ', '') === 'fruits') {
        if (basket.toLowerCase().replaceAll(' ', '') === 'grapes') {
            price = countOfProducts * grapes * 0.8;
            document.write(`<div class="product" align="center">
            <img src="images/fruits/grapes.svg" alt="grapes" width="100" height="100">
            <p>Selected product: <b>grapes</b></p>
            <p>Count of grapes: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>summer</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'raspberry') {
            price = countOfProducts * raspberry * 0.8;
            document.write(`<div class="product" align="center">
            <img src="images/fruits/raspberry.svg" alt="raspberry" width="100" height="100">
            <p>Selected product: <b>raspberry</b></p>
            <p>Count of raspberries: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>summer</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'coconut') {
            price = countOfProducts * coconut * 0.8;
            document.write(`<div class="product" align="center">
            <img src="images/fruits/coconut.svg" alt="coconut" width="100" height="100">
            <p>Selected product: <b>coconut</b></p>
            <p>Count of coconuts: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>summer</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        }
    } else if (category.toLowerCase().replaceAll(' ', '') === 'vegetables') {
        if (basket.toLowerCase().replaceAll(' ', '') === 'cabbage') {
            price = countOfProducts * cabbage * 0.8;
            document.write(`<div class="product" align="center">
            <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
            <p>Selected product: <b>cabbage</b></p>
            <p>Count of cabbages: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>summer</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'avocado') {
            price = countOfProducts * avocado * 0.8;
            document.write(`<div class="product" align="center">
            <img src="images/vegetables/avocado.svg" alt="avocado" width="100" height="100">
            <p>Selected product: <b>avocado</b></p>
            <p>Count of avocados: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>summer</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        } else if (basket.toLowerCase().replaceAll(' ', '') === 'tomato') {
            price = countOfProducts * tomato * 0.8;
            document.write(`<div class="product" align="center">
            <img src="images/vegetables/tomato.svg" alt="tomato" width="100" height="100">
            <p>Selected product: <b>tomato</b></p>
            <p>Count of tomatos: <b>${countOfProducts}</b></p>
            <p>Selected period: <b>summer</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${price} UAH</b></p>
            </div>`);
        }
    }
}