import { agentAxios } from ".";


export default {
    login: (user, config = {}) => agentAxios.post("/authService/login", user, config),
    register: (user, config = {}) =>agentAxios.post("/auth/register", user, config = {}),
    forgetpassword: (email, config = {}) => agentAxios.post("/forgetpassword", { email }, config = {}),
};
