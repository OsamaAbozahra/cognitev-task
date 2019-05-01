const roles = require('../lib/roles-model');
const acl = require('../lib/create-roles').acl;
const an = require('../lib/set-permissions').an;
const check = require('../lib/check-permissions').check;

describe("> Setting Roles", function () {

    acl.createRole('admin');
    an('admin').can('post').to('/users');

    it("should check an already created role", function () {
        expect(function () {
            check.if('teacher')
        }).toThrowError('This role does not exist');
    });

});