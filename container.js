

class Container{

    constructor(){
        this.products = []
    }

    getAll(){
        return this.products
    }


    getById(id){
        let productFound = this.products.find(prod => prod.id === id)

        if(!productFound){
            return "Producto no encontrado"
        }
        return productFound

    }

    createProduct(prod){
        let id 
        this.products.length === 0 ? id = 1 : id = this.products[this.products.length - 1].id + 1

        const newProduct = {...prod, id}

        this.products.push(newProduct)
        
    }
    
    
    deleteById(id){
        let productFound = this.products.find(prod => prod.id === id)
        let index = this.products.indexOf(productFound)

        if(!productFound){
            return "Producto no encontrado para borrar"
        }
        this.products.splice(index,1)
    }

}

module.exports = Container;
