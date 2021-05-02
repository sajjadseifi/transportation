import { agentAxios } from ".";

export default {
    create: (car, config = {}) => agentAxios.post("/discount",car, config),
};

