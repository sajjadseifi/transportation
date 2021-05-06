import { DateForm, InputPanelForm } from "../ui";

export default [
    [
        {
            name: "user",
            title: "کاربر",
            width: "100%",
            type: "text",
            placeholder: "کاربر را انتخاب نمایید",
            component: InputPanelForm
        }
        ,
        {
            name: "car",
            title: "ماشین",
            width: "100%",
            type: "text",
            placeholder: "ماشین را انتخاب نمایید",
            component: InputPanelForm
        }
    ],

    [
        {
            name: "role",
            title: "نقش کاربری",
            width: "100%",
            type: "text",
            placeholder: "نقش را تعیین نمایید",
            component: InputPanelForm
        }, {
            name: "sex",
            title: "جنسیت",
            width: "100%",
            type: "text",
            placeholder: "جنسیت کاربر را انتخاب کنید",
            component: InputPanelForm
        },
        {
            name: "degree",
            title: "سطح سواد تحصیلی",
            width: "100%",
            type: "text",
            placeholder: "مدرک تحصیلی کاربر",
            component: InputPanelForm
        }
    ],
    [
        {
            name: "pic",
            title: "تصویر شخص",
            width: "100%",
            type: "file",
            placeholder: "عکس شخصی کاربر",
            component: InputPanelForm
        },
        {
            name: "car_license",
            title: "تصویر گواهینامه",
            width: "100%",
            type: "file",
            placeholder: " را وارد کنید تصویر گواهینامه",
            component: InputPanelForm
        },
        {
            name: "car_card",
            title: "تصویر کارت وسیله نقلیه",
            width: "100%",
            type: "file",
            placeholder: "تصویر کارت وسیله نقلیه را وارد کنید",
            component: InputPanelForm

        }
    ],
    
    [
        {
            name: "car_insurance",
            title: "تصویر بیمه وسیله نقلیه",
            width: "100%",
            type: "file",
            placeholder: "تصویر بیمه وسیله نقلیه را وارد نمایید",
            component: InputPanelForm
        },
        {
            

            name: "car_technical_diagnosis",
            title: "تصویر معاینه فنی وسیله نقلیه",
            width: "100%",
            type: "file",
            placeholder: "تصویر معاینه فنی وسیله نقلیه را وارد نمایید",
            component: InputPanelForm
        },
        {
            name: "guarantee",
            title: "تصویر ضمانت نامه",
            width: "100%",
            type: "file",
            placeholder: "تصویر ضمانت نامه را وارد نمایید",
            component: InputPanelForm

        }
    ],
    [
        {
            name: "phone_number",
            title: "شماره تماس",
            width: "100%",
            type: "text",
            placeholder: "شماره تلفن را وارد نمایید",
            component: InputPanelForm
        },
        {
            name: "national_code",
            title: "کد ملی",
            width: "100%",
            type: "text",
            placeholder: "کد ملی را وارد نمایید",
            component: InputPanelForm
        },
        {
            name: "birth_date",
            title: "تاریخ تولد",
            width: "100%",
            type: "text",
            placeholder: "تاریخ تولد را وارد نمایید",
            isDate: true,
            component: DateForm

        }
    ]
]
