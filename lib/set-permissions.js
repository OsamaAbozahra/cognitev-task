"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.an = an;

var _rolesModel = require("./roles-model");

// Setting Permissions
function an(role) {
  if (typeof role !== "string") return;
  var roleName = _rolesModel.roles[role];
  if (roleName === undefined) throw new TypeError('This role does not exist, please create it first');
  var endpointName, verbName;
  return {
    can: can,
    to: to,
    from: to,
    when: when
  };

  function can(http_verb) {
    if (typeof http_verb !== "string") return;
    var verb = http_verb.toLowerCase();
    verbName = verb;
    var http_verbs = ['get', 'post', 'put', 'patch', 'delete'];

    if (http_verbs.indexOf(verb) === -1) {
      return;
    } else {
      roleName.rules = roleName.rules || [];
      roleName.rules.push({
        verb: verb
      });
    }

    return this;
  }

  function to(endpoint) {
    if (typeof endpoint !== "string") return;
    endpointName = endpoint;
    var roleObj = roleName.rules.filter(function (rule) {
      return rule.verb === verbName;
    });
    roleObj[0].url = endpoint;
    return this;
  }

  function when(paramsObj) {
    var roleWithRestriction = roleName.rules.filter(function (rule) {
      return rule.verb === verbName;
    });
    roleWithRestriction[0].restriction = true;
    roleWithRestriction[0].condition = paramsObj;
  }
}