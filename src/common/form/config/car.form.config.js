import { combineValidators } from "revalidate";
import { carFormOption } from "../option";
import { carApi } from "../../../core/api";

const validate = combineValidators({

});

export default {
    formTitle: "افزودن ماشین جدید",
    formUpdateTitle: "ویرایش ماشین",
    formKey: "user",
    validate: validate,
    formOptions: carFormOption,
    agentForm: carApi.get,
    createAgent: carApi.create,
    updateAgent: carApi.update,
    deleteAgent: carApi.delete,
    addFormPath: "/admin/car/form"
};
