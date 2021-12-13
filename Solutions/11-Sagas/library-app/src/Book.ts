class Book {
    constructor(public title: String, public author: String) {}

    toString() {
        return `${this.title}, by ${this.author}`
    }
}

export default Book;