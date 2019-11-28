const p = require ('./product.js')

// p.product = jest.fn();
describe("products", () => {
	it("should show available products", () =>{
		expect(typeof p.product).toBe("function")
		})
})