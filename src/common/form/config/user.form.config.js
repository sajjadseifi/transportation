import { combineValidators } from "revalidate";
import { userFormOption } from "../option";
import { userApi } from "../../../core/api";
const validate = combineValidators({

});

export default {
    formTitle: "افزودن کاربر جدید",
    formUpdateTitle: "ویرایش کاربر",
    formKey: "user",
    validate: validate,
    formOptions: userFormOption,
    agentForm: userApi.get,
    createAgent: userApi.create,
    updateAgent: userApi.update,
    deleteAgent: userApi.delete,
    addFormPath: "/admin/users/form",
    redirectPath: "/admin/users/list"
};
