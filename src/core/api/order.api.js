import { agentAxios } from ".";

export const driver = {
    todoOrders: (config = {}) => agentAxios.get(`/order/DriverToDoOrders`, config),
    previousOrders: (config = {}) => agentAxios.get(`/order/DriverPreviousOrders`, config),
    driverCanceledOrders: (config = {}) => agentAxios.get(`/order/DriverCusomerCancelOrders`, config),
    driverWaitingOrders: (config) => agentAxios.get(`/order/DriverWaitingOrders`, config),
    create: (order, config = {}) => agentAxios.post("/order", order, config),
    driverOrdersActiveList: (config = {}) => agentAxios.get("/order/DriverAcriveOrders/", config),
    driverAccept: (driverId = "", config = {}) => agentAxios.get(`/order/${driverId}/DriverAccept`, config),
    driverCancelOrder: (driverId,config = {}) => agentAxios.get(`/order/${driverId}/DriverCancelOrder`, config),
    expertAccept: (id,config = {}) => agentAxios.get(`/order/${id}/ExpertAccept`, config),
    expertCancel: (id,config = {}) => agentAxios.get(`/order/${id}/ExpertCancel`, config),

};
export const customer = {
    accept: (id, config = {}) => agentAxios.get(`/order/${id}/CustomerAccept`, config),
    cancel: (id, config = {}) => agentAxios.get(`/order/${id}/CustomerAccept`, config),
};
