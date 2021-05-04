export { default as authReducer } from "./auth.reducer";
export { default as formReducer } from "./form.reducer";
export { default as listReducer } from "./list.reducer";
export { default as menuReducer } from "./menu.reducer";

export {
    startRequest,
    finishedRequest,
    finishedDeleteRequest,
    startDeleteRequest
} from "./all.redcuer";