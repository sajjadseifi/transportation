import { combineValidators } from "revalidate";
import { tempFormOption } from "../option";

const validate = combineValidators({

});

export default {
    formTitle: "عنوان نمونه",
    formKey: "temp",
    validate: validate,
    formOptions: tempFormOption,
    agentForm: async (id) => { },
    createAgent: async (temp) => { },
    updateAgent: async (id, temp) => { },
    deleteAgent: async (id) => { },
    addFormPath: "/admin/temp/form"
};
