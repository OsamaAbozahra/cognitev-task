"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "acl", {
  enumerable: true,
  get: function get() {
    return _createRoles.acl;
  }
});
Object.defineProperty(exports, "an", {
  enumerable: true,
  get: function get() {
    return _setPermissions.an;
  }
});
Object.defineProperty(exports, "a", {
  enumerable: true,
  get: function get() {
    return _setPermissions.an;
  }
});
Object.defineProperty(exports, "check", {
  enumerable: true,
  get: function get() {
    return _checkPermissions.check;
  }
});
exports["default"] = void 0;

var _rolesModel = require("./roles-model");

var _createRoles = require("./create-roles");

var _setPermissions = require("./set-permissions");

var _checkPermissions = require("./check-permissions");

var _default = _createRoles.acl;
exports["default"] = _default;