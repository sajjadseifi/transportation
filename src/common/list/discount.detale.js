import { roleType } from "../../constants";
import { discountApi } from "../../core/api";
import { discountColumn } from ".";

export default {
    title: "تخفیف ها",
    keyList: "discounts",
    columns: discountColumn,
    getAgent: discountApi.all,
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
