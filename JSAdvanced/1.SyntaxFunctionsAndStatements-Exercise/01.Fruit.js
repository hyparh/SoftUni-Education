function fruit(fruit, grams, price) {
    let fruitWeight = grams * 0.001;
    let priceForFruit = price;

    let totalPrice = fruitWeight * priceForFruit;
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitWeight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
