import { combineValidators } from "revalidate";
import { regionpriceFormOption } from "../option";
import { regionpriceApi as api } from "../../../core/api";

const validate = combineValidators({

});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   label: "هزینه مکانی",
   formTitle: "افزودن هزینه برای یک مسیر",
   formUpdateTitle: "ویرایش هزینه مکانی برای یک مسیر",
   formKey: "regionprice",
   validate: validate,
   formOptions: regionpriceFormOption,
   agentForm: api.get,
   createAgent: api.create,
   updateAgent: api.update,
   deleteAgent: api.delete,
   addFormPath: "/admin/regionprice/form",
   redirectPath: "/admin/regionprice/list"
};
