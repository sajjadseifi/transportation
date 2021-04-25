import { FormModel } from ".";

export default class AuthLogin extends FormModel {

    constructor(username, password) {
        super();
        this.username = username;
        this.password = password;
    }
    get FormData() {
        var formdata = new FormData();
        formdata.append('user_name', this.username);
        formdata.append('password', this.password);
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