import { FormModel } from ".";

export default class TempModel extends FormModel {

    constructor(name, code, price) {
        super();
        this.name = name;
        this.code = code;
        this.price = price;
    }
    get FormData() {
        return null;
    }
    get Model() {
        return null;
    }

}