import { CarSearchItme, SearchPull, UsersSearchItme } from "../../../components/searchpull";
import { DEGREE, PER_DEGREE, PER_ROLETYPE, PER_SEXTYPE, ROLETYPE, SEXTYPE } from "../../../constants";
import { carApi, userApi } from "../../../core/api";
import { selectOptsGenerator } from "../../../core/utils/utils";
import { DateForm, InputPanelForm, SelectFormPanel } from "../ui";
// selectOptsGenerator
export default [
    [
        {
            name: "user",
            title: "کاربر",
            width: "100%",
            type: "text",
            placeholder: "کاربر را انتخاب نمایید",
            keyList:"users-options",
            SingleComponet: UsersSearchItme,
            agentList: userApi.list,
            component: SearchPull
        }
        ,
        {
            name: "car",
            title: "ماشین",
            width: "100%",
            type: "text",
            keyList:"cars-options",
            placeholder: "ماشین را انتخاب نمایید",
            SingleComponet: CarSearchItme,
            agentList: carApi.list,
            component: SearchPull,
        }
    ],

    [
        {
            name: "role",
            title: "نقش کاربری",
            width: "100%",
            val: 1,
            options: selectOptsGenerator(ROLETYPE, PER_ROLETYPE),
            component: SelectFormPanel
        }, {
            name: "sex",
            title: "جنسیت",
            width: "100%",
            val: 3,
            options: selectOptsGenerator(SEXTYPE, PER_SEXTYPE),
            component: SelectFormPanel
        },
        {
            name: "degree",
            title: "سطح سواد تحصیلی",
            width: "100%",
            val: 0,
            options: selectOptsGenerator(DEGREE, PER_DEGREE),
            component: SelectFormPanel
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
