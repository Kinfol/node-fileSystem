const a = require('./storage')
const cp = new a.storage();

//array to hold new products
let inStore = []

class StoreProduct {
  constructor(){
    };
    
//method to take products in storage and set checked to true + push them to new array    
useProduct(product){
  const forSale = cp.getDefaultProducts().find(p => p.name === product)
  if (forSale) {
    forSale.checked = true
    inStore.push(forSale)
  }
  return {forSale}
}
}

//exporting class and array to be used in interface file.
module.exports = {
    "storeProduct": StoreProduct,
    inStore
}