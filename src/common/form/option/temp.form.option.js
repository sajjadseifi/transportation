import { DateForm, InputPanelForm, } from "../ui";

export const formConfiguration={

};

export default [
    [{
        name: "name",
        title: "نام ",
        width: "100%",
        type: "text",
        placeholder: "نام را وارد نمایید",
        component: InputPanelForm
    }, {
        name: "code",
        title: "کد",
        width: "100%",
        type: "text",
        placeholder: "کد را وارد نمایید",
        component: InputPanelForm
    }, {
        name: "price",
        title: "قیمت",
        width: "100%",
        type: "text",
        placeholder: "قیمت را وارد نمایید",
        component: InputPanelForm
    }],
    [
        {
            name: "date",
            title: "تاریخ",
            width: "100%",
            type: "date",
            placeholder: "قیمت را وارد نمایید",
            component: DateForm
        }
    ]
]