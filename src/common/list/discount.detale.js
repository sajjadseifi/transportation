import { roleType } from "../../constants";
import { discountApi } from "../../core/api";
import { discountColumn } from ".";

export default {
    title: "تخفیف ها",
    keyList: "discounts",
    columns: discountColumn,
    getAgent: discountApi.list,
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
            path:"/admin/discount/form/"
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
