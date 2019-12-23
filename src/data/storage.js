const data = require('./data')

class Storage {
	constructor(){
    };

//method to map the products as objects and add new element to the object
getDefaultProducts(){
    return data.map(products => {
        return {
            name: products,
            checked: false
            };
        });
    };
}



module.exports = {
	"storage": Storage
}