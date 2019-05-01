"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acl = void 0;

var _rolesModel = require("./roles-model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var acl =
/*#__PURE__*/
function () {
  function acl() {
    _classCallCheck(this, acl);
  }

  _createClass(acl, null, [{
    key: "createRole",
    // Creating Roles
    value: function createRole(role) {
      if (typeof role !== "string") return;
      if (!_rolesModel.roles[role]) _rolesModel.roles[role] = {};
      return _rolesModel.roles;
    }
  }]);

  return acl;
}();

exports.acl = acl;