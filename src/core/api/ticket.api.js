import { agentAxios } from ".";

export default {
    all: (config = {}) => agentAxios.get(`/ticket`, config),
    list: (params, config = {}) => agentAxios.list("/ticket", params, config),
    get: (ticketId, config = {}) => agentAxios.get(`/ticket/${ticketId}`, config),
    create: (ticket, config = {}) => agentAxios.post("/ticket", ticket, config),
    update: (ticketId, ticket, config = {}) => agentAxios.put(`/ticket/${ticketId}`, ticket, config),
    delete: (ticketId, config = {}) => agentAxios.del(`/ticket/${ticketId}`, config)
};

