class Product {
	constructor(){
	};
	availableProduct() {
		const a = [ "Product: Laptop, Brand: Dell, Price: 100£"];
		const b = ["Product: Tablet, Brand: Dell, Price: 100£"];
        return [a, b];
	};

};

module.exports = {
	"product": Product
}