import { reducerAction } from "./all.action.types";

export const ACTIVE_SIDEBAR = "ACTIVE_SIDEBAR";
export const DEACTIVE_SIDEBAR = "DEACTIVE_SIDEBAR";

const activeSidebar = () => reducerAction(ACTIVE_SIDEBAR);
const deActiveSidebar = () => reducerAction(DEACTIVE_SIDEBAR);


export default {
    ACTIVE_SIDEBAR,
    DEACTIVE_SIDEBAR,
    activeSidebar,
    deActiveSidebar,
};