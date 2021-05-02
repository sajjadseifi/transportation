import FormModel from "./form.model";

export class DisCountModel extends FormModel {
    // _id;//uniq id
    code = null;//not required
    uid = null;//string
    count;//number
    price;//number
    percent;//number,
    expire_date;//date,
    description;//text
    constructor(
        did = null,
        count,
        price,
        percent,
        expire_date,
        description,
        uid,
        code = null,
    ) {
        super(id);
        this.count = count;
        this.price = price;
        this.percent = percent;
        this.expire_date = expire_date;
        this.description = description;
        this.uid = uid;
        this.code = code;
    }

    get Model() {
        const {
            count, price, percent, expire_date,
            description, uid, code, id
        } = this;

        return {
            count, price, percent, expire_date,
            description, uid, code, id
        };
    };
}