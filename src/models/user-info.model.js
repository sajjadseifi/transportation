import FormModel from "./form.model";
import moment from "moment-jalaali"
import { ROLETYPE } from "../constants";
export class UserInfoModel extends FormModel {

    constructor(
        user, username, role,
        car, sex, phone_number,
        national_code, degree,
        descriptions, pic,
        car_license, car_card, car_insurance,
        car_technical_diagnosis,
        guarantee, birth_date
    ) {
        super();
        this.user = user;//id,
        this.username = username;//id,
        this.role = role;//number 0 1 2 ..
        this.car = car;//list
        this.sex = sex;//جنسیت number 0 1 2
        this.phone_number = phone_number;//string
        this.national_code = national_code;//string
        this.degree = degree;//number
        this.descriptions = descriptions;//string
        // this.pic = pic || null;//تصویر کاربر
        // this.car_license = car_license || null;//تصویر گواهینامه
        // this.car_card = car_card || null;//تصویر کارت وسیله نقلیه
        // this.car_insurance = car_insurance || null;//تصویر بیمه وسیله نقلیه
        // this.car_technical_diagnosis = car_technical_diagnosis || null;//تصویر معاینه فنی وسیله نقلیه
        // this.guarantee = guarantee || null;//تصویر ضمانت نامه
        this.birth_date = birth_date || null;//date
    }
    get FormObject() {
        const {
            user, username, role,
            car, sex, phone_number,
            national_code, degree,
            descriptions, pic,
            car_license, car_card, car_insurance,
            car_technical_diagnosis,
            guarantee, birth_date
        } = this;
        return {
            user, username, role,
            car, sex, phone_number,
            national_code, degree,
            descriptions, pic,
            car_license, car_card, car_insurance,
            car_technical_diagnosis,
            guarantee, birth_date
        }
    }
    get Model() {
        const infoForm = new FormData();
        infoForm.append("user", this.user);
        infoForm.append("role", this.role);
        infoForm.append("sex", this.sex);
        if (this.role == ROLETYPE.driver)
            infoForm.append("car", this.car);
        this.addFormDataWidthCond("phone_number", this.phone_number, infoForm);
        this.addFormDataWidthCond("national_code", this.national_code, infoForm);
        this.addFormDataWidthCond("degree", this.degree, infoForm);
        this.addFormDataWidthCond("descriptions", this.descriptions, infoForm);
        this.addFormDataWidthCond("pic", this.pic, infoForm);
        this.addFormDataWidthCond("car_license", this.car_license, infoForm);
        this.addFormDataWidthCond("car_card", this.car_card, infoForm);
        this.addFormDataWidthCond("car_insurance", this.car_insurance, infoForm);
        this.addFormDataWidthCond("car_technical_diagnosis", this.car_technical_diagnosis, infoForm);
        this.addFormDataWidthCond("guarantee", this.guarantee, infoForm);

        const d = new Date(this.birth_date).toISOString();
        const birth_date = moment(d).format("YYYY-MM-DD");
        this.addFormDataWidthCond("birth_date", birth_date, infoForm);
        return infoForm;
    }
    addFormDataWidthCond = (key, val, formData) => {
        if (val)//&& typeof val !== "string"
            formData.append(key, val);
    };
    static GenerateWithFormValues(formValues) {
        const v = formValues;
        console.log("v.birth_date", v.birth_date);

        //  descriptions: any, pic: any, car_license: any
        // , car_card: any, car_insurance: any,
        //  car_technical_diagnosis: any, guarantee: any, birth_date: any
        return new UserInfoModel(
            v.user || "",
            v.username || "",
            v.role || "",
            "http://127.0.0.1:8000/car/1/" || v.car || "",
            v.sex || "",
            v.phone_number || "",
            v.national_code || "",
            v.degree || "",
            v.descriptions || "",
            v.pic || "",
            v.car_license || "",
            v.car_card || "",
            v.car_insurance || "",
            v.car_technical_diagnosis || "",
            v.guarantee || "", v.birth_date || ""
        );
    }
}