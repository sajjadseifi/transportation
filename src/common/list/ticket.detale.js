import { roleType } from "../../constants";
import { ticketApi } from "../../core/api";
import { ticketColumn } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "تیکت ها",
    keyList: "discounts",
    columns: ticketColumn,
    getAgent: ticketApi.list,
    displayProperty: "title",
    selections: {
        size: [5, 10, 15, 20]
    },
    managment: [
        {
            name: "eye",
            icon: "eye",
            paramName: "eye",
            authorize: {
                role: roleType.TRANSPORT_ADMIN
            },
            path: "/admin/ticket/form"
        },
        {
            name: "delete",
            icon: "trash",
            paramName: "delete",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
            agent: ticketApi.delete
        },
    ]
}
