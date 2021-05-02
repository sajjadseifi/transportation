import FormModel from "./form.model";

export class CarModel extends FormModel {
    name;//string
    brand;
    number_of_wheels;//number
    tonnage;//number
    tanker;//boolean
    refrigerator;//boolean
    transit;//boolean
    created_at;//string date
    updated_at;//string date
    constructor(name, brand, number_of_wheels, tonnage, tanker, refrigerator, transit, created_at, updated_at) {
        super();
        this.name = name;
        this.brand = brand;
        this.number_of_wheels = number_of_wheels;
        this.tonnage = tonnage;
        this.tanker = tanker;
        this.refrigerator = refrigerator;
        this.transit = transit;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    get FormData() {
        return null;
    }
    get Model() {
        const { name, brand, number_of_wheels, tonnage, tanker, refrigerator, transit } = this;
        return {
            name,
            brand,
            number_of_wheels,
            tonnage,
            tanker,
            refrigerator,
            transit
        };
    }
}