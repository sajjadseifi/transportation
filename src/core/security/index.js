import * as authorizeSecurity from "./authorize.security";
export { default as Security } from "./security";
export {
    SUPPER_ADMIN,
    TRANSPORT_ADMIN,
    USER_ADMIN,
    USER_ADMIN_LEVEL,
    TRANSPORT_ADMIN_LEVEL,
    SUPPER_ADMIN_LEVEL,
    rolesLevel,
} from "./roles.security";

export {
    accesLevelAuthorize,
    accesRoleAuthorize,
    createAuthorizeObject,
    isRevers,
    acccesStrickNotRoleAuthorize,
    checkAuthorization
} from "./authorize.security";

export { authorizeSecurity };

export { SecurityProvider, useSecurity } from "./context.security";

export default {
    ...authorizeSecurity,
};
