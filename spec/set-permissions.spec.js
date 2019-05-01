const an = require('../lib/set-permissions').an;
const acl = require('../lib/create-roles').acl;
const roles = require('../lib/roles-model');

describe("> Setting Roles", function () {

    acl.createRole('admin');

    it("should take an already created role", function () {
        expect(an('admin')).toBeDefined();
    });

    it("should not take uncreated role", function () {
        expect(function () {
            an('teacher')
        }).toThrowError('This role does not exist, please create it first');
    });

});