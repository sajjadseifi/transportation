import { roleType } from "../../../constants";
import { userApi } from "../../core/api";
import { userColumn } from ".";

export default {
    title: "کاربران",
    keyList: "discounts",
    columns: userColumn,
    getAgent: userApi.all,
    
    selections: {
        size: [5, 10, 15, 20]
    },
    managment: [
        {
            name: "edit",
            icon: "edit",
            paramName: "edit",
            authorize: {
                role: roleType.TRANSPORT_ADMIN
            },
        },
        {
            name: "delete",
            icon: "trash",
            paramName: "delete",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
        },
    ]
}
