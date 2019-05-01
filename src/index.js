import {roles} from './roles-model';
import {acl} from './create-roles';
import {an} from './set-permissions';
import {check} from './check-permissions';

export default acl;

export {
    acl,
    an,
    an as a,
    check
};