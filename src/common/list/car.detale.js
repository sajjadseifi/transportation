import { carApi } from "../../core/api";
import { carColumn } from ".";
import { roleType } from "../../constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "ماشین ها",
    keyList: "cars",
    columns: carColumn,
    getAgent: carApi.list,
    displayProperty: "name",
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
            path: "/admin/car/form"
        },
        {
            name: "delete",
            icon: "trash",
            paramName: "delete",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
            agent: carApi.delete
        },
    ]
}
