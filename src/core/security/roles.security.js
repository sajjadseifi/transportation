//level
export const USER_ADMIN_LEVEL = 0;
export const TRANSPORT_ADMIN_LEVEL = 1;
export const SUPPER_ADMIN_LEVEL = 2;
//name
export const SUPPER_ADMIN = "SUPPER_ADMIN";
export const TRANSPORT_ADMIN = "TRANSPORT_ADMIN";
export const USER_ADMIN = "USER_ADMIN";


export const rolesLevel = {
    [SUPPER_ADMIN]: SUPPER_ADMIN_LEVEL,
    [TRANSPORT_ADMIN]: TRANSPORT_ADMIN_LEVEL,
    [USER_ADMIN]: USER_ADMIN_LEVEL,
};

export const allow = {
    ALL: "ALL",
    NEVER: "NEVER",
};

export const roleType = {
    SUPPER_ADMIN,
    TRANSPORT_ADMIN,
    USER_ADMIN
};