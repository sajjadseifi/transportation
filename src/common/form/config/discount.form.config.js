import { combineValidators } from "revalidate";
import { discountFormOption } from "../option";
import { discountApi } from "../../../core/api";

const validate = combineValidators({

});

export default {
    label: "تخفیف",
    formTitle: "افزودن تخفیف جدید",
    formUpdateTitle: "ویرایش تخفیف",
    formKey: "discount",
    validate: validate,
    displayProperty:"code",
    formOptions: discountFormOption,
    agentForm: discountApi.get,
    createAgent: discountApi.create,
    updateAgent: discountApi.update,
    deleteAgent: discountApi.delete,
    addFormPath: "/admin/discount/form",
    redirectPath: "/admin/discount/list"
};
