import { agentAxios } from ".";

export default {
    all: (config = {}) => agentAxios.get(`/car`, config),
    list: (params, config = {}) => agentAxios.list("/car", params, config),
    get: (carId, config = {}) => agentAxios.get(`/car/${carId}`, config),
    create: (car, config = {}) => agentAxios.post(`/car/`, car, config),
    update: (carId, car, config = {}) => agentAxios.put(`/car/${carId}/`, car, config),
    delete: (carId, config = {}) => agentAxios.del(`/car/${carId}/`, config)
};
