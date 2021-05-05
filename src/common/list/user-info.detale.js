import { roleType } from "../../constants";
import { userInfoApi } from "../../core/api";
import { userInfoColumn } from ".";

export default {
    title: "اطلاعات تکمیلی کاربران",
    keyList: "usersInfo",
    columns: userInfoColumn,
    getAgent: userInfoApi.list,
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
            path: "/admin/user-info/form/"
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
