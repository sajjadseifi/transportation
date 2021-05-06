import FormModel from "./form.model";

export class UserModel extends FormModel {
    username = "";
    email = "";
    first_name = "";
    last_name = "";
    password = "";
    is_active = false;//boolean
    is_superuser = false;//boolean
    is_staff = false;//boolean
    date_joined = new Date();//date time string
    constructor(
        first_name, last_name,
        username, email, password,
        is_active, is_superuser,
        is_staff, date_joined
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
        this.is_staff = is_staff;
    }
    get FormData() { return null }
    get Model() {
        const {
            first_name,
            last_name,
            username,
            email,
            password,
            is_active,
            is_superuser,
            is_staff,
        } = this;
        return {
            first_name,
            last_name,
            username,
            email,
            password,
            is_active,
            is_superuser,
            is_staff,
        };
    }
    static GenerateWithFormValues(formValues) {
        const v = formValues;
        return new UserModel(
            v.first_name || "",
            v.last_name || "",
            v.username || "",
            v.email || "",
            v.password || "",
            v.is_active || false,
            v.is_superuser || false,
            v.is_staff || false
        );
    }
}
