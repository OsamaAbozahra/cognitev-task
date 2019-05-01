import {roles} from "./roles-model";

// Setting Permissions

export function an(role) {

    if (typeof role !== "string")
        return;

    let roleName = roles[role];

    if (roleName === undefined)
        throw new TypeError('This role does not exist, please create it first');

    let endpointName, verbName;

    return {
        can,
        to,
        from: to,
        when
    };

    function can(http_verb) {

        if (typeof http_verb !== "string")
            return;

        let verb = http_verb.toLowerCase();
        verbName = verb;
        let http_verbs = ['get', 'post', 'put', 'patch', 'delete'];

        if (http_verbs.indexOf(verb) === -1) {
            return;
        } else {
            roleName.rules = roleName.rules || [];
            roleName.rules.push({verb: verb});
        }
        return this;
    }

    function to(endpoint) {
        if (typeof endpoint !== "string")
            return;

        endpointName = endpoint;

        let roleObj = roleName.rules.filter((rule) => {
            return rule.verb === verbName
        });

        roleObj[0].url = endpoint;
        return this;
    }

    function when(paramsObj) {
        let roleWithRestriction = roleName.rules.filter((rule) => {
            return rule.verb === verbName
        });

        roleWithRestriction[0].restriction = true;
        roleWithRestriction[0].condition = paramsObj;
    }
}