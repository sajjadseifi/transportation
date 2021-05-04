import { carApi } from "../../core/api";
import { carColumn } from ".";
import { roleType } from "../../constants";

export default {
    title: "ماشین ها",
    keyList: "cars",
    columns: carColumn,
    getAgent: carApi.all,
    // initialData: data,
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
