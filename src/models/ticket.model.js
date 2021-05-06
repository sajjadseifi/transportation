import FormModel from "./form.model"
import { UserInfoModel } from ".";

export class TicketModel extends FormModel {
    title;
    description;// "desc test",
    response;// "response of expert test",
    customer = new UserInfoModel(); //"http://127.0.0.1:8000/userinfo/8/",
    updated_at;//date
    created_at;//date
    expert = null; //

    constructor(
        title,
        description,
        response,
        customer,
        expert,
        created_at,
        updated_at
    ) {
        super();
        this.title = title;
        this.description = description;
        this.response = response;
        this.customer = customer;
        this.expert = expert;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    get Model() {
        const {
            description, response,
            title, customer, expert
        } = this;
        return {
            description, response,
            title, customer, expert
        };
    }
    static GenerateWithFormValues(formValues = {}) {
        const v = formValues;

        return new TicketModel(
            v.title || "",
            v.description || "",
            v.response || null,
            v.customer || "",
            v.expert || null,
            v.created_at || "",
            v.updated_at || ""
        );
    }
}