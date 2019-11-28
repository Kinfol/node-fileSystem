class Product {
	constructor(){
	};
	availableProduct() {
		const a = "Product: Laptop, Brand: Dell, Price: 100£";
		const b = "Product: Tablet, Brand: Dell, Price: 50£"
		console.log(a, b)
	};
};


const c = new Product();
c.availableProduct();

module.exports = {
	"product": Product
}