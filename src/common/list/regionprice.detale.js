import { regionpriceApi } from "../../core/api";
import { regionpriceColumn } from ".";
import { roleType } from "../../constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: "هزینه مکان های مشخص شده",
   keyList: "regionprice",
   columns: regionpriceColumn,
   getAgent: regionpriceApi.list,
   displayProperty: "expert",
   selections: {
      size: [5, 10, 15, 20]
   },
   managment: [
      {
         name: "edit",
         icon: "edit",
         paramName: "edit",
         authorize: {
            role: roleType.SUPPER_ADMIN
         },
         path: "/admin/regionprice/form"
      },
      {
         name: "delete",
         icon: "trash",
         paramName: "delete",
         authorize: {
            role: roleType.SUPPER_ADMIN,
         },
         agent: regionpriceApi.delete
      },
   ]
}
