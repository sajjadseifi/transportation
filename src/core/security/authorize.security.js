import * as middleware from "../middleware";



export const initalAuthorize = {
    reverse: false,//defult if revers access section lower level and  high level is not access thi part 
    role: "_____ROLE_USER____",// level for index ,
    levelRevers: false,//default reevers false if your check lower level youser set this proprty to true
    levelInRole: 0,//level of user in your role
    rolesAccess: [],//acces this section 
    rolesNotAccess: [],//not access this section
};

export const createAuthorizeObject = () => ({ ...initalAuthorize });

export const isRevers = (authorize = initalAuthorize) => !!authorize.reverse;
export const isLevelRevers = (authorize = initalAuthorize) => !!authorize.levelRevers;

export const accesRoleAuthorize = ({ options, origin = initalAuthorize, user = userInfo }, next = (props, ref) => { }) => {
    let oor = options[origin.role]?.roleLevel || 0;
    let our = options[user.role]?.roleLevel || 0;
    if (typeof (oor | our) !== "number")
        return;

    //access lower level user
    if (isRevers(origin) && oor >= our)
        return next();
    //access higther level user
    if (oor <= our)
        return next();

    return;
};

export const accesLevelAuthorize = ({ origin = initalAuthorize, user = userInfo }, next = (props, ref) => { }) => {
    let olr = origin.levelInRole || 0;
    let ulr = user.levelInRole || 0;

    if (typeof (olr | ulr) !== "number")
        return;
    //access lower level user
    if (isLevelRevers(origin) && olr >= ulr)
        return next();
    //access higther level user
    if (olr <= ulr)
        return next();

    return;
};


export const accesStrickRoleAuthorize = ({ origin = initalAuthorize, user = userInfo }, next = (props, ref) => { }) => {
    //if contain role in array cann use dis section
    const access = (origin.rolesAccess.length == 0) || origin.rolesAccess.some(rl => rl && rl === user.role);

    if (access)
        return next();

    return false;
};

export const acccesStrickNotRoleAuthorize = ({ origin = initalAuthorize, user = userInfo }, next = (props, ref) => { }) => {
    //if contain role in array cannot use dis section
    const access = (origin.rolesNotAccess.length == 0) || !origin.rolesNotAccess.some(rl => rl && rl === user.role);

    if (access)
        return next();

    return false;
};


export const userInfo = {
    role: "",
    level: 0,
};
export const propsAuthorizeInfo = {
    origin: initalAuthorize,
    user: userInfo
}
export const checkAuthorization = (authorizeInfo = propsAuthorizeInfo, cbResult = (data) => { console.log({ data }) }) => {
    middleware.use(authorizeInfo,
        //check role access
        accesStrickRoleAuthorize,
        //check role is not access
        acccesStrickNotRoleAuthorize,
        //check access role with level for roles 
        accesRoleAuthorize,
        //check level for role of user 
        accesLevelAuthorize,
        //send data with property ok (true or false)
        (props) => {
            cbResult(true);
            console.log("authorized successfully");
        }
    );
};

export default {
    createAuthorizeObject,
    isRevers,
    accesRoleAuthorize,
    accesLevelAuthorize,
    accesStrickRoleAuthorize,
    acccesStrickNotRoleAuthorize,
    isLevelRevers,
    checkAuthorization,
};