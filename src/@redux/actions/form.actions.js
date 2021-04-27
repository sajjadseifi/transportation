import { FormModel } from "../../models";
import { formActionTypes } from "../@types";
import { swalAlert } from "../../components/alert";

export const getFormById = (id, agentForm, keyForm) => async (dispatch) => {
    dispatch(formActionTypes.startRequest());

    try {
        const resposne = agentForm(id);

        if (false)
            throw new Error(resposne || "RESPONSE_FAILD");

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        });

        const temp = {
            name: "sajjad",
            code: "FX-500",
            price: 500475,
            date: new Date()
        };

        // dispatch(formActionTypes.removeForm(keyForm));
        dispatch(formActionTypes.setForm(keyForm, temp));
    } catch (error) {
        //redirect if data in not defind
        swalAlert.warningToLoadData().then((ok) => {
            if (ok)
                dispatch(getFormById(id, agentForm, keyForm));
        });
        // dispatch(formActionTypes.setErrors(error));
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};

export const removeFormByKey = (keyForm) => (dispatch, getState) => {
    dispatch(formActionTypes.removeForm(keyForm));
};
export const formSubmit = (
    formModel = new FormModel(),
    agentCreate = async (obj = {}, config = {}) => { },
    agentUpdate = async (obj = {}, config = {}) => { }
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
            swalAlert.info(`ویرایش  ${formModel.dispalyName}  با موفقیت انجام شد`);
        //swip alert for create form 
        else
            swalAlert.success(`${formModel.dispalyName} با موفقیت ثبت شد`);

    } catch (error) {
        swalAlert.warning("ذخیره انجام نشد دوباره تلاش کنید");
        dispatch(formActionTypes.setErrors(error));
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};

export const formDelete = (
    formModel = new FormModel(),
    agentDelete = async (obj = {}, config = {}) => { },
) => async (dispatch, getState) => {
    dispatch(formActionTypes.startRequest());
    try {
        const resposne = await agentDelete(formModel.id);
        if (!resposne)
            throw resposne;

        swalAlert.success(`${formModel.dispalyName} با موفقیت حذف شد`);
    } catch (error) {
        swalAlert.warning("خطا هنگام اجرای عملیات");
        dispatch(formActionTypes.setErrors(error));
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};