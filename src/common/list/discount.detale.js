import { roleType } from "../../constants";
import { discountApi } from "../../core/api";
import { discountColumn } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "تخفیف ها",
    keyList: "discounts",
    columns: discountColumn,
    displayProperty: "code",
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
            path: "/admin/discount/form"
        },
        {
            name: "delete",
            icon: "trash",
            paramName: "delete",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
            agent: discountApi.delete
        },
    ]
}
