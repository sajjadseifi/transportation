//level
export const CUSTOMER_LEVEL = 0;
export const DRIVER_LEVEL = 1;
export const TRANSPORT_ADMIN_LEVEL = 2;
export const SUPPER_ADMIN_LEVEL = 3;
//name
export const SUPPER_ADMIN = "SUPPER_ADMIN";
export const TRANSPORT_ADMIN = "TRANSPORT_ADMIN";
export const CUSTOMER = "CUSTOMER";
export const DRIVER = "DRIVER";

export const roleType = {
    SUPPER_ADMIN,
    TRANSPORT_ADMIN,
    CUSTOMER,
    DRIVER
};

export const securitySimpleOption = {
    [SUPPER_ADMIN]: SUPPER_ADMIN_LEVEL,
    [TRANSPORT_ADMIN]: TRANSPORT_ADMIN_LEVEL,
    [DRIVER]: DRIVER_LEVEL,
    [CUSTOMER]: CUSTOMER_LEVEL,
};
export const securityOption = {
    [SUPPER_ADMIN]: {
        roleLevel: SUPPER_ADMIN_LEVEL,
        // levelInRole: 5
    },
    [TRANSPORT_ADMIN]: {
        roleLevel: TRANSPORT_ADMIN_LEVEL,
        // levelInRole: 5
    },
    [DRIVER]: {
        roleLevel: DRIVER_LEVEL,
        // levelInRole: 
    },
    [CUSTOMER]: {
        roleLevel: CUSTOMER_LEVEL,
        // levelInRole: 5
    }
}
