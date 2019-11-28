class Product {
	constructor(){
	};
	availableProduct() {
		const a = "Product: Laptop, Brand: Dell, Price: 100£";
		const b = "Product: Tablet, Brand: Dell, Price: 50£"
		const c = "Product: Phone, Brand: Dell, Price: 20£"
		console.log(a, b, c)
	};
};


const c = new Product();
c.availableProduct();

module.exports = {
	"product": Product
}