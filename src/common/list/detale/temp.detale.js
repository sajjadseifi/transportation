import tempColumn from "../culumn/temp.column";
import momentJalali from "moment-jalaali";
import { rolesLevel } from "../../../constants";
let data = [
    {
        name: "سبزینه",
        code: "FC-402",
        price: 5000,
        date: momentJalali().format("YYYY/MM/DD"),
    },
    {
        name: "همبرگرز",
        code: "ًَ213ُSQ",
        price: 8500,
        date: momentJalali().format("YYYY/MM/DD"),
    },
    {
        name: "کمپرستور",
        code: "RS-45",
        price: 885500,
        date: momentJalali().format("YYYY/MM/DD"),
    },
    {
        name: "سولاریوم",
        code: "B-V4578",
        price: 563214,
        date: momentJalali().format("YYYY/MM/DD"),
    },
];

export default {
    title: "لیست تمپلیت ها",
    keyList: "temp",
    columns: tempColumn,
    // initialData: data,
    selections: {
        size: [5, 10, 15, 20]
    },
    managment: {
        // "prop":{
        // showLevel:0 or 1 or 2 ..... 
        // show:false //#by default show options true,
        // authorize:false //#by default show options true,
        // component: <></>
        // render={({ loading })=>< Component  loading={ loading } />}
        // }
        //by defaut rendered icon...
        edit: {
            authorize: {
                level: rolesLevel.TRANSPORT_ADMIN
            },
        },
        delete: {
            authorize: {
                level: rolesLevel.SUPPER_ADMIN,
            },
        },
    }
}
