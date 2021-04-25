import { FormModel } from "./form.model";

export class authLogin extends FormModel {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    get FormData() {
        var formdata = new FormData();
        formdata.append('user_name', username);
        formdata.append('password', password);
        formdata.append('device_information', '{}');

        return formdata;
    }
    get Model() {
        return {
            username: this.username,
            password: this.password
        }
    }
}