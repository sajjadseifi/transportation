import { CarModel } from "./car.model";
import FormModel from "./form.model";
import { UserModel } from "./user.model";

export class UserInfoModel extends FormModel {
    userId = "";
    carId = "";
    user = new UserModel();//userModel,
    role;//number 0 1 2 ..
    car = new CarModel();
    sex;//number 0 1
    phone_number;//string
    national_code;//string
    degree;//number
    descriptions;//string
    pic = null;
    car_license = null;
    car_card = null
    car_insurance = null;
    car_technical_diagnosis = null;
    guarantee = null;
    birth_date = null;
    
}