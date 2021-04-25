import { FormModel } from "../../helpers/models";
import { formActionTypes } from "../@types";
import swal from "sweetalert";
import { swalAlert } from "../../components/alert";

export const formSubmit = (
    formModel = new FormModel(),
    agentCreate = async (obj = {}, config = {}) => { },
    agentUpdate = async (obj = {}, config = {}) => { },
    { createDisplay = "", updateDisplay = "" }
) => (dispatch, getState) => {

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
) => {
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