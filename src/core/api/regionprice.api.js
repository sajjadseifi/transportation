import { agentAxios } from ".";

export default {
   all: (config = {}) => agentAxios.get(`/regionprice`, config),
   list: (params, config = {}) => agentAxios.list("/regionprice", params, config),
   get: (carId, config = {}) => agentAxios.get(`/regionprice/${carId}`, config),
   create: (car, config = {}) => agentAxios.post(`/regionprice/`, car, config),
   update: (carId, car, config = {}) => agentAxios.put(`/regionprice/${carId}/`, car, config),
   delete: (carId, config = {}) => agentAxios.del(`/regionprice/${carId}/`, config)
};
