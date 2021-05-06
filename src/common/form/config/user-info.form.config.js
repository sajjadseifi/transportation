import { combineValidators } from "revalidate";
import { userInfoFormOption } from "../option";
import { userInfoApi } from "../../../core/api";
const validate = combineValidators({

});

export default {
    label: "اطلاعات تکمیلی",
    formTitle: "ثبت اطلاعات تکمیلی کاربر",
    formUpdateTitle: "ویرایش اطلاعات تکمیلی کاربر",
    formKey: "user-info",
    validate: validate,
    formOptions: userInfoFormOption,
    agentForm: userInfoApi.get,
    createAgent: userInfoApi.create,
    updateAgent: userInfoApi.update,
    deleteAgent: userInfoApi.delete,
    addFormPath: "/admin/user-info/form",
    redirectPath: "/admin/user-info/list"
};
