const p = require ('../product/product')

describe("products", () => {
	it("should show available products", () =>{
		expect(typeof p.product).toBe("function")
		})
})