const p = require ('../product/product')

describe("products", () => {
	it("function exists", () =>{
		expect(typeof p.product).toBe("function")
        })
        
    it("should show available products", () =>{
        console.log = jest.fn();
        const cp = new p.product();
        cp.availableProduct();
        expect(console.log.mock.calls.length).toEqual(1);
        expect(console.log.mock.calls[0][0]).toEqual("Product: Laptop, Brand: Dell, Price: 100£");
    })
})
