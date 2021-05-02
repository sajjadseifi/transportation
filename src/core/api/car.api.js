import { agentAxios } from ".";


export default {
    create: (car, config = {}) => agentAxios.post("/car",car, config),
};
