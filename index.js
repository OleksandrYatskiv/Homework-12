vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];

vegetablePrices = [8, 30, 10];
fruitPrices = [20, 25, 50];

season = null;
category = null;
basketIndex = null;
basketName = null;
basketPrice = null;
countOfProducts = null;
price = null;

do {
    season = prompt('When do you make a purchase? (winter or summer)').toLowerCase().replaceAll(' ', '');
} while (season !== 'winter' && season !== 'summer');

do {
    category = prompt('Choose a category (fruits or vegetables)').toLowerCase().replaceAll(' ', '');
} while (category !== 'fruits' && category !== 'vegetables');

options = null;
prices = null;

if (category === 'fruits') {
    options = fruits;
    prices = fruitPrices;
} else if (category === 'vegetables') {
    options = vegetables;
    prices = vegetablePrices;
}

do {
    optionsNames = '';
    for (i = 0; i < options.length; i++) {
        optionsNames += options[i];
        if (i !== options.length - 1) {
            optionsNames += ' or ';
        }
    }
    basket = prompt(`Choose a ${category} (${optionsNames})`).toLowerCase().replaceAll(' ', '');
    basketIndex = options.indexOf(basket);
} while (basketIndex === -1);

basketName = options[basketIndex];
basketPrice = prices[basketIndex];

do {
    countOfProducts = prompt(`How many of ${basketName} do you need? (Value must be more than 1.)`);
} while (countOfProducts <= 1);

if (season === 'winter') {
    price = countOfProducts * basketPrice * 2;
} else if (season === 'summer') {
    price = countOfProducts * basketPrice * 0.8;
}

productName = basketName[0].toUpperCase() + basketName.slice(1);
productImage = `images/${category}/${basketName}.svg`;

document.write(`<div class="product" align="center">
  <img src="${productImage}" alt="${basketName}" width="100" height="100">
  <p>Selected product: <b>${productName}</b></p>
  <p>Count of ${basketName}s: <b>${countOfProducts}</b></p>
  <p>Selected period: <b>${season}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${price} UAH</b></p>
</div>`);
