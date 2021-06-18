import FormModel from "./form.model";

export class RegionpriceModel extends FormModel {
   From_neighborhood;//string
   To_neighborhood;//string
   weight;//number
   expert;//id
   constructor(From_neighborhood,To_neighborhood,weight,expert) {
      super();
      this.From_neighborhood = From_neighborhood;
      this.To_neighborhood = To_neighborhood;
      this.weight = weight;
      this.expert = expert;
   }
   get FormData() {
      return null;
   }
   get Model() {
      const {From_neighborhood,To_neighborhood,weight,expert} = this;
      return {
         From_neighborhood,
         To_neighborhood,
         weight,
         expert,
      };
   }
   static GenerateWithFormValues(formValues = {}) {
      const v = formValues;
      return new RegionpriceModel(
         v.From_neighborhood || "",
         v.To_neighborhood || "",
         v.weight || "",
         v.expert || ""
      );
   }
}