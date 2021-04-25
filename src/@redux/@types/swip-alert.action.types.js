export const SWIP_ALERT_OPEN = "SWIP_ALERT_OPEN";
export const SWIP_ALERT_CLOSE = "SWIP_ALERT_CLOSE";
export const SWIP_ALERT_CONTENT = "SWIP_ALERT_CONTENT";

//content is nul in arguman
export const open = (content = null) => reducerAction(SWIP_ALERT_OPEN, content);
//set content in base
export const setContent = (content) => reducerAction(SWIP_ALERT_CONTENT, content);
//contnet default is null
export const close = () => reducerAction(SWIP_ALERT_CLOSE);

export default {
    SWIP_ALERT_OPEN,
    SWIP_ALERT_CLOSE,
};