import { agentAxios } from ".";

export const driver = {
    todoOrders: () => agentAxios.get(`/order/DriverToDoOrders`, config = {}),
    previousOrders: () => agentAxios.get(`/order/DriverPreviousOrders`, config = {}),
    driverCanceledOrders: () => agentAxios.get(`/order/DriverCusomerCancelOrders`, config = {}),
    driverWaitingOrders: () => agentAxios.get(`/order/DriverWaitingOrders`, config = {}),
    create: (order, config = {}) => agentAxios.post("/order", order, config),
    driverOrdersActiveList: (config = {}) => agentAxios.get("/order/DriverAcriveOrders/", config = {}),
    driverAccept: (driverId = "", config = {}) => agentAxios.get(`/order/${driverId}/DriverAccept`, config = {}),
    driverCancelOrder: () => agentAxios.get(`/order/${driverId}/DriverCancelOrder`, config = {}),
    expertAccept: (id) => agentAxios.get(`/order/${id}/ExpertAccept`, config = {}),
    expertCancel: (id) => agentAxios.get(`/order/${id}/ExpertCancel`, config = {}),

};
export const customer = {
    accept: (id, config = {}) => agentAxios.get(`/order/${id}/CustomerAccept`, config),
    cancel: (id, config = {}) => agentAxios.get(`/order/${id}/CustomerAccept`, config),
};
