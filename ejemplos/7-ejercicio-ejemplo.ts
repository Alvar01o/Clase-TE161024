interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

interface Stock {
    products: Product[];
}

function addProduct(stock: Stock, product: Product): void {
    stock.products.push(product);
}

function displayStock(stock: Stock): void {
    console.log('Stock de Productos:');
    stock.products.forEach((product) => {
        console.log(`ID: ${product.id}, Nombre: ${product.name}, Cantidad: ${product.quantity}, Precio: $${product.price}`);
    });
}

const stock: Stock = { products: [] };

// Agregar productos al stock
addProduct(stock, { id: 1, name: 'Laptop', quantity: 10, price: 1000 });
addProduct(stock, { id: 2, name: 'Mouse', quantity: 25, price: 20 });
addProduct(stock, { id: 3, name: 'Teclado', quantity: 15, price: 50 });
addProduct(stock, { id: 4, name: 'Monitor', quantity: 5, price: 300 });
addProduct(stock, { id: 5, name: 'Impresora', quantity: 8, price: 150 });

// Mostrar el stock en consola
displayStock(stock);
