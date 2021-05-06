import FormModel from "./form.model";
import { UserModel } from "./user.model";

export class SavedAddressModel extends FormModel {
    url;//url stirng
    id;//number
    user;//date stirng
    name;//name stirng
    address;//address stirng

    constructor(url, id, user, name, address) {
        super();
        this.url = url;
        this.id = id;
        this.user = user;
        //user = {id,username}
        this.name = name;
        this.address = address;

    }
    get FormData() {
        return {};
    }
    get Model() {
        const { name, address, user } = this;
        return {
            name, address, user
        };
    }
    static GenerateWithFormValues(formValues = {}) {
        const v = formValues;
        return new SavedAddressModel(
            v.url || "",
            v.id || "",
            v.user || null,
            v.name || "",
            v.address || ""
        );
    }
}