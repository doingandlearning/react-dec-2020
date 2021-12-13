class Film {
    constructor(public name: String, public genre: String, public blurb: String) {}

    toString() {
        return `${this.name} [${this.genre}], ${this.blurb}`
    }
}

export default Film;