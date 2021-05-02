import FormModel from "./form.model";

export class User extends FormModel {
    username;
    email;
    first_name;
    last_name;
    password;
    is_active;//boolean
    is_superuser;//boolean
    date_joined;//date time string
    constructor(
        first_name, last_name, username, email, password,
        is_active = null, is_superuser = null, date_joined = null
    ) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.is_active = is_active;
        this.is_superuser = is_superuser;
        this.date_joined = date_joined;

    }
    get FormData() { return null }
    get Model() {
        const { first_name, last_name, username, email, password } = this;
        return { first_name, last_name, username, email, password };
    }
}
