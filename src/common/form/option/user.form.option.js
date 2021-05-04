import { DateForm, InputPanelForm } from "../ui";
import CheckBoxFormPanel from "../ui/checkbox.form";


export default [
    [
        {
            name: "first_name",
            title: "نام",
            width: "100%",
            type: "text",
            placeholder: "نام کاربر را وارد مایید",
            component: InputPanelForm
        },
        {
            name: "last_name",
            title: "قیمت",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: "نام خانوادگی کاربر را وارد نمایید",
            component: InputPanelForm
        },
    ],
    [
        {
            name: "password",
            title: "'گذرواژه'",
            width: "100%",
            type: "text",
            placeholder: "گذرواژه را وارد مایید",
            component: InputPanelForm
        },
        {
            name: "correct-password",
            title: "قیمت",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: "تکرار گذرواژه را وارد نمایید",
            component: InputPanelForm
        },
    ],
    [{
        name: "username",
        title: "نام کاربری",
        width: "100%",
        type: "text",
        placeholder: "نام کاربری را وارد نمایید",
        component: InputPanelForm
    }, {
        name: "email",
        title: "ایمیل",
        width: "100%",
        type: "text",
        placeholder: "ایمیل را وارد نمایید",
        component: InputPanelForm
    }
    ],
    [
        {
            name: "date_joined",
            title: "تاریخ ثبت نام",
            width: "100%",
            type: "text",
            disabled: true,
            component: DateForm,

        },

    ],
    [
        {
            full: true,
            name: "is_active",
            type: "checkbox",
            label: "فعال بودن حساب کاربری",
            component: CheckBoxFormPanel
        }
    ],
    [
        {
            full: true,
            name: "is_superuser",
            type: "checkbox",
            label: "پشتیبان میباشد",
            component: CheckBoxFormPanel
        }
    ]
    ,
    [
        {
            full: true,
            name: "is_staff",
            type: "checkbox",
            label: "ابر کاربر (دسترسی به تمام بخش ها)",
            component: CheckBoxFormPanel
        }
    ]
]
