import ProductItem from './ProductItem'

export default class ProductCatalog {

    // Let's just store data in static variables for simplicity here!
    static _productItems = new Map([
        ["1", new ProductItem("1", "Swansea City Shirt", 55.99, 20001, "2015-05-09")],
        ["2", new ProductItem("2", "Cardiff City Shirt", 49.99, 15009, "2018-12-08")],
        ["3", new ProductItem("3", "Bugatti Divo Sport", 4_000_000, 4, "2017-12-25")],
    ])

    static getAllProductItems() {
        let productItemsAsIterable = this._productItems.values()
        return Array.from(productItemsAsIterable)
    }

    static getProductItemById(id) {
        return this._productItems.get(id)
    }
}
