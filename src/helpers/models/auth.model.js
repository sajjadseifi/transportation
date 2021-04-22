export class authLogin {

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
}