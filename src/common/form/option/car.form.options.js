import { InputPanelForm } from "../ui";
import CheckBoxFormPanel from "../ui/checkbox.form";


export default [
    [
        {
            name: "name",
            title: "نام ماشین",
            width: "100%",
            type: "text",
            placeholder: "نام ماشین را وارد مایید",
            component: InputPanelForm
        },
        {
            name: "brand",
            title: "برند ماشین",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: " برند ماشین را وارد نمایید",
            component: InputPanelForm
        },
    ],
    [
        {
            name: "number_of_wheels",
            title: "'تعداد چرخ های ماشین'",
            width: "100%",
            type: "text",
            placeholder: "تعداد چرخ را وارد مایید",
            isNumber: true,
            component: InputPanelForm
        },
        {
            name: "tonnage",
            title: " تناژ (گنجایش بار) ماشین",
            width: "100%",
            type: "text",
            isNumber: true,
            placeholder: "مقدار تناژ  را وارد نمایید",
            component: InputPanelForm
        },
    ],
    [
        {
            full: true,
            name: "tanker",
            type: "checkbox",
            label: "ماشین تانکر میباشد",
            component: CheckBoxFormPanel
        }
    ],
    [
        {
            full: true,
            name: "refrigerator",
            type: "checkbox",
            label: "ماشین یخچال میباشد",
            component: CheckBoxFormPanel
        }
    ]
    ,
    [
        {
            full: true,
            name: "transit",
            type: "checkbox",
            label: "ماشین ترانزیت مباشد",
            component: CheckBoxFormPanel
        }
    ]
]
