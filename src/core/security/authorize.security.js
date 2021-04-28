import * as middleware from "../middleware";



export const initalAuthorize = {
    reverse: false,//defult if revers access section lower level and  high level is not access thi part 
    level: 0,// level for index 
    rolesAccess: [],//acces this section 
    rolesNotAccess: [],//not access this section
};


export const createAuthorizeObject = () => ({ ...initalAuthorize });

export const isRevers = (authorize = initalAuthorize) => !!authorize.reverse;

export const accesLevelAuthorize = ({ origin = initalAuthorize, user = userInfo }, next = (props) => { }) => {

    //access lower level user
    if (isRevers(origin) && origin.level >= user.level)
        return next();

    //access higther level user
    if (origin.level <= user.level)
        return next();

    return;
};

export const accesRoleAuthorize = ({ origin = initalAuthorize, user = userInfo }, next = (props) => { }) => {

    const access = (origin.rolesAccess.length == 0) || origin.rolesAccess.some(rl => rl && rl === user.role);

    if (access)
        return next();

    return false;
};

export const acccesNotRoleAuthorize = ({ origin = initalAuthorize, user = userInfo }, next = (props) => { }) => {

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
    console.log({ authorizeInfo });
    middleware.use(authorizeInfo,
        //check level user
        accesLevelAuthorize,
        //check role access
        accesRoleAuthorize,
        //check role is not access
        acccesNotRoleAuthorize,
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
    acccesNotRoleAuthorize,
    checkAuthorization,
};