import { combineValidators } from "revalidate";
import { carFormOption } from "../option";
import { regionpriceApi as api } from "../../../core/api";

const validate = combineValidators({

});

export default {
   label: "هزینه مکانی",
   formTitle: "افزودن هزینه برای یک مسیر",
   formUpdateTitle: "ویرایش هزینه مکانی برای یک مسیر",
   formKey: "regionprice",
   validate: validate,
   formOptions: carFormOption,
   agentForm: api.get,
   createAgent: api.create,
   updateAgent: api.update,
   deleteAgent: api.delete,
   addFormPath: "/admin/regionprice/form",
   redirectPath: "/admin/regionprice/list"
};
