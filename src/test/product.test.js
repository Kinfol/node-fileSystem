const p = require ('../product/product')

describe("products", () => {
	it("function exists", () =>{
		expect(typeof p.product).toBe("function")
        })
        
        it("should show available products", () =>{
            const cp = new p.product();
            cp.availableProduct();
            expect(cp.availableProduct()).toEqual ([[ 'Product: Laptop, Brand: Dell, Price: 100£'],
            [ 'Product: Tablet, Brand: Dell, Price: 100£']]);
        })
})
