import axios from "axios";
import { FormModel } from "../../helpers/models";
import { formActionTypes } from "../@types";


export const formSubmit = (
    formModel = new FormModel(),
    agentForm = async (obj = {}, config = {}) => { }
) => (dispatch, getState) => {

    dispatch(formActionTypes.startRequest());

    try {
        const model = formModel.Model;


        const resposne = await agentCreate(model);
        if (!resposne)
            throw resposne;

        if (formModel.id) {
            //swip alert for update form 
        } else {
            //swip alert for create form 
        }
    } catch (error) {
        dispatch(formActionTypes.setErrors(error));
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};