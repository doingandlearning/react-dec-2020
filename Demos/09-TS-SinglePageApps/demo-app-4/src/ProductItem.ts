export default class ProductItem {
    constructor(
        public id: string,
        public description: string,
        public price: number,
        public likes: number,
        public mostRecentLike: string)
        {}
}