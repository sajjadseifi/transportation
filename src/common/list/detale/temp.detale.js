import tempColumn from "../culumn/temp.column";
import momentJalali from "moment-jalaali";
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
}
