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
        id = null,
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
            count, price, percent, uid,
            expire_date, description, code
        } = this;

        return {
            count, price, percent, uid,
            expire_date, description, code
        };
    };
    static GenerateWithFormValues(formValues = {}) {
        const v = formValues;
        // console.log({ v });
        return new DisCountModel(
            v.id || null,
            v.count || "",
            v.price || "",
            v.percent || "",
            v.expire_date || "",
            v.description || "",
            v.uid || null,
            v.code || null,
        );
    }
}
