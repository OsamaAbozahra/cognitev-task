"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = void 0;

var _rolesModel = require("./roles-model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Checking Permissions
var check =
/*#__PURE__*/
function () {
  function check() {
    _classCallCheck(this, check);
  }

  _createClass(check, null, [{
    key: "if",
    value: function _if(role) {
      var roleObj = _rolesModel.roles[role];
      var ruleObj,
          checkingFlag = true;

      if (!_rolesModel.roles[role]) {
        checkingFlag = false;
        throw new TypeError('This role does not exist');
      }

      return {
        can: can,
        to: to,
        from: to,
        when: when,
        value: value
      };

      function can(http_verb) {
        if (typeof http_verb !== "string") return false;
        var rule = roleObj.rules.filter(function (rule) {
          return rule.verb === http_verb;
        });

        if (rule[0]) {
          ruleObj = rule[0];
        } else {
          checkingFlag = false;
        }

        return this;
      }

      function to(endpoint) {
        if (typeof endpoint !== "string") {
          return;
        }

        if (checkingFlag) if (!ruleObj.url || ruleObj.url !== endpoint) checkingFlag = false;
        return this;
      }

      function when(paramsObj) {
        var url = ruleObj.url;
        var params = url.split("/");
        var parameter = params.filter(function (item) {
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
  }]);

  return check;
}();

exports.check = check;