
export default class FormModel {

    constructor(id = null, dispalyName = "") {
        this.id = id;
        this.dispalyName = dispalyName;
    }

    setFormModel(id = null, dispalyName = "") {
        // this(id, dispalyName);
        // or 
        this.id = id;
        this.dispalyName = `( ${dispalyName} )`;
    }
    get FormData() { return null }
    get Model() { return null }
    static GenerateWithFormValues(formValues) {
        const v = formValues;
        return FormModel(v.id, v.dispalyName);
    }
}