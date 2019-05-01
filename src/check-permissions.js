import {roles} from "./roles-model";

// Checking Permissions

export class check {
    static if(role) {

        let roleObj = roles[role];
        let ruleObj, checkingFlag = true;

        if (!roles[role]) {
            checkingFlag = false;
            throw new TypeError('This role does not exist');
        }


        return {
            can,
            to,
            from: to,
            when,
            value
        };

        function can(http_verb) {
            if (typeof http_verb !== "string")
                return false;

            let rule = roleObj.rules.filter((rule) => {
                return rule.verb === http_verb;
            });

            if (rule[0]) {
                ruleObj = rule[0];
            }
            else {
                checkingFlag = false;
            }
            return this;
        }

        function to(endpoint) {
            if (typeof endpoint !== "string") {
                return;
            }

            if (checkingFlag)
                if (!ruleObj.url || ruleObj.url !== endpoint)
                    checkingFlag = false;

            return this;
        }

        function when(paramsObj) {
            let url = ruleObj.url;
            let params = url.split("/");
            let parameter = params.filter((item) => {
                return item.startsWith(":");
            });

            parameter = parameter[0].slice(1);

            if (paramsObj[parameter] !== ruleObj.condition[parameter]) {
                checkingFlag = false;
            }

            return this;
        }

        function value() {
            return checkingFlag;
        }
    }
}
