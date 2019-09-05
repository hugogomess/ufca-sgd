export class User {

    constructor(
        public username?: string,
        public firstName?: string,
        public email?: string,
        public password?: string,
        public isAdmin?: boolean,
        public isDemandManager?: boolean,
        public isProjectManager?: boolean,
        public lastName?: string,

        ) {}
}
