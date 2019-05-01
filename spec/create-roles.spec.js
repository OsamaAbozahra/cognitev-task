const acl = require('../lib/create-roles').acl;
const roles = require('../lib/roles-model');

describe("> Creating Roles", function () {

    it("should have a method called createRole", function () {
        expect(typeof acl.createRole).toBe('function');
    });

    it("should be able to create a new role", function () {
        expect(acl.createRole('admin')).toEqual({admin: {}});
    });

    it("should ignore creating the role if it is already exists", function () {
        expect(acl.createRole('admin')).toEqual({admin: {}});
    });


});