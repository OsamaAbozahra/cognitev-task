import {roles} from "./roles-model";

export class acl {

    // Creating Roles
    static createRole(role) {
        if (typeof role !== "string")
            return;

        if (!roles[role])
            roles[role] = {};

        return roles;
    }
}