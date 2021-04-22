import { request } from ".";

export default {
    login: (user, config = {}) => request.post("/auth/login", user, config),
    register: (user, config = {}) => request.post("/auth/register", user, config = {}),
    forgetpassword: (email, config = {}) => request.post("/forgetpassword", { email }, config = {}),
};
