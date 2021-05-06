import { DateForm, InputPanelForm } from "../ui";


export default [
    [
        {
            name: "code",
            title: "کد تخفیف",
            width: "100%",
            type: "text",
            placeholder: " کد تخفیف را وارد نمایید",
            displayNone: true,
            component: InputPanelForm
        },
        {
            name: "uid",
            title: "کاربر",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: "ایدی کاربر مورد نظر را وارد کنید",
            component: InputPanelForm
        }
    ],
    [
        {
            name: "count",
            title: "تعداد",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: "تعداد را وارد نمایید",
            component: InputPanelForm
        },
        {
            name: "price",
            title: "قیمت تخفیف",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: "قیمت  را وارد نمایید",
            component: InputPanelForm
        }

    ],
    [
        {
            name: "percent",
            title: "درصد تخفیف",
            width: "100%",
            type: "text",
            placeholder: "درصد را وارد نمایید",
            isNumber: true,
            min: 0,
            max: 100,
            component: InputPanelForm
        },
        {
            name: "expire_date",
            title: "تاریخ انقضا",
            width: "100%",
            type: "text",
            placeholder: "تاریخ انقضا را وارد نمایید",
            isDate: true,
            component: DateForm

        }
    ],
    [
        {
            name: "description",
            title: "توضیحات تخفیف",
            width: "100%",
            type: "text",
            placeholder: "توضیحات را وارد نمایید",
            isNumber: true,
            textarea: true,
            min: 0,
            max: 100,
            component: InputPanelForm
        },
    ]
]
