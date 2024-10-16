export function priceFormatter(price) {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const TotalPrice = (cartProducts) => {
    return cartProducts.reduce((acc, product) => acc + product.price, 0);
}