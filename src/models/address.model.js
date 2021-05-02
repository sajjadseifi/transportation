import FormModel from "./form.model";
import { User } from "./user.model";

export class SavedAddressModel extends FormModel {
    name;//name
    address;//address
    created_at;//date stirng
    updated_at;//date stirng
    user_Id = null;
    user = new User();//user,
    constructor(name, address, user_Id, user, created_at, updated_at) {
        super();
        this.name = name;
        this.address = address;
        this.user_Id = user_Id;
        this.user = user;
        this.updated_at = updated_at;
        this.created_at = created_at;
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
}