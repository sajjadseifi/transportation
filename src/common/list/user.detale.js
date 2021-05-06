import { roleType } from "../../constants";
import { userApi } from "../../core/api";
import { userColumn } from ".";

export default {
    title: "کاربران",
    keyList: "discounts",
    columns: userColumn,
    displayProperty: "username",
    getAgent: userApi.list,

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
            path: "/admin/users/form",
        },
        {
            name: "delete",
            icon: "trash",
            paramName: "delete",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
            agent: userApi.delete
        },
    ]
}
