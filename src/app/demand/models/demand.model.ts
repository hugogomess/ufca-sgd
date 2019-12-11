export class Demand {
    constructor(
        public name?: string,
        public description?: string,
        public requester?: string,
        public requester_email?: string,
        public origin?: string,
        public status?: string,
        public id?: number,
        public gut_matrix?: number,
        public created_at?: Date,
    ) {}
}
