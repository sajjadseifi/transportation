import { FormModel } from "../../helpers/models";
import { formActionTypes } from "../@types";
import { swalAlert } from "../../components/alert";


export const getFormById = (id, agentForm, keyForm) =>
    async (dispatch, getState) => {

        dispatch(formActionTypes.startRequest());

        try {
            const model = formModel.Model;


            const resposne = agentForm(id);

            if (!resposne)
                throw resposne;

            dispatch(formActionTypes.setForm(keyForm, resposne));
            // dispatch(formActionTypes.removeForm(keyForm));
        } catch (error) {
            swalAlert.warning("خطا هنگام بارگزاری داده مجددا اقدام نمایید");
            dispatch(formActionTypes.setErrors(error));
        } finally {
            dispatch(formActionTypes.finishedRequest());
        }
    };
export const removeFormByKey = (keyForm) => {
    dispatch(formActionTypes.removeForm(keyForm));
};
export const formSubmit = (
    formModel = new FormModel(),
    agentCreate = async (obj = {}, config = {}) => { },
    agentUpdate = async (obj = {}, config = {}) => { },
    { createDisplay = "", updateDisplay = "" }
) => async (dispatch, getState) => {

    dispatch(formActionTypes.startRequest());

    try {
        const model = formModel.Model;


        const resposne = !!formModel.id ?
            await agentUpdate(formModel.id, model) :
            await agentCreate(model);

        if (!resposne)
            throw resposne;

        //swip alert for update form 
        if (formModel.id)
            swalAlert.info(`ویرایش  ${updateDisplay}  با موفقیت انجام شد`);
        //swip alert for create form 
        else
            swalAlert.success(`${createDisplay} با موفقیت ثبت شد`);

    } catch (error) {
        swalAlert.warning("خطا هنگام اجرای عملیات");
        dispatch(formActionTypes.setErrors(error));
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};

export const formDelete = (
    formModel = new FormModel(),
    agentDelete = async (obj = {}, config = {}) => { },
    display
) => async (dispatch, getState) => {
    dispatch(formActionTypes.startRequest());

    try {
        const resposne = await agentDelete(formModel.id);
        if (!resposne)
            throw resposne;

        swalAlert.success(`${display} با موفقیت حذف شد`);
    } catch (error) {
        swalAlert.warning("خطا هنگام اجرای عملیات");
        dispatch(formActionTypes.setErrors(error));
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};