import { agentAxios } from ".";

export default {
    create: (ticket, config = {}) => agentAxios.post("/ticket",ticket, config),
};

