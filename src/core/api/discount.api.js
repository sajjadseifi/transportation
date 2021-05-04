import { agentAxios } from ".";

export default {
    all: (config = {}) => agentAxios.get(`/discount`, config),
    get: (discountId, config = {}) => agentAxios.get(`/discount/${discountId}`, config),
    create: (discount, config = {}) => agentAxios.post("/discount",discount, config),
    update: (discountId, discount, config = {}) => agentAxios.put(`/discount/${discountId}`, discount, config),
    delete: (discountId, config = {}) => agentAxios.del(`/discount/${discountId}`, config),
};