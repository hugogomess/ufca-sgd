export class User {
    //first name, last name, etc is in snake case because api response data is in snake case. 
    constructor(
        public id?: number,
        public first_name?: string,
        public last_name?: string,
        public username?: string,
        public email?: string,
        public password?: string,
        public is_admin?: boolean,
        public is_demand_manager?: boolean,
        public is_project_manager?: boolean
    ) {}
}

export interface UsersResponse {
    results: User[];
}
