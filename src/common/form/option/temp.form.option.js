import { DateForm, InputPanelForm, SelectFormPanel, } from "../ui";
import CheckBoxFormPanel from "../ui/checkbox.form";

export const formConfiguration = {

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
        isNumber: true,
        placeholder: "قیمت را وارد نمایید",
        component: InputPanelForm
    }],
    [
        {
            name: "date",
            title: "تاریخ",
            width: "100%",
            type: "text",
            placeholder: "تاریخ را وارد نمایید",
            isDate: true,
            component: DateForm

        },
        {
            name: "solam",
            title: "حال حرکت میزنن خفنا رو",
            width: "100%",
            options: [
                { value: "0", label: "تمیزو خوب" },
                { value: "1", label: "عالی و زیبا" },
                { value: "2", label: "امین و زمین" },
                { value: "3", label: "کال و تازه" }
            ],
            value: "sallam chtori",
            component: SelectFormPanel
        }
    ],
    [
        {
            full: true,
            name: "checkbox-name",
            type: "checkbox",
            title:"عنوان...",
            label: "این چک‌باکس سفارشی را انتخاب کنید",
            component: CheckBoxFormPanel
        }
    ], [
        {
            name: "radio-name",
            type: "radio",
            // title:"عنوان...",
            label: "این رادیو سفارشی را تغییر دهید",
            component: CheckBoxFormPanel
        }
    ]
]
