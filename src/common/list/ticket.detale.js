import { roleType } from "../../../constants";
import { ticketApi } from "../../core/api";
import { ticketColumn } from ".";

export default {
    title: "بلیت ها",
    keyList: "discounts",
    columns: ticketColumn,
    getAgent: ticketApi.all,
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
