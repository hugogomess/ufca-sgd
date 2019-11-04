export class Demand {
    constructor(
        public name: string,
        public description: string,
        public requester: string,
        public origin: string,
        public status: string,
        public id?: number,
    ) {}
}
