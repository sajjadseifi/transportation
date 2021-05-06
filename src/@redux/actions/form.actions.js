import { FormModel } from "../../models";
import { formActionTypes } from "../@types";
import { swalAlert } from "../../components/alert";
import { history } from "../..";

export const getFormById = (id, agentForm, keyForm, redirectPath = "/") => async (dispatch) => {
    dispatch(formActionTypes.startRequest());

    try {
        const response = await agentForm(id);

        if (!response)
            throw response;

        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 200);
        });

        // dispatch(formActionTypes.removeForm(keyForm));
        dispatch(formActionTypes.setForm(keyForm, response));
    } catch (error) {
        if (error && error.response && error.response.data)
            swalAlert.warning(error.response.data.detail);
        else
            swalAlert.warningToLoadData().then((ok) => ok && dispatch(getFormById(id, agentForm, keyForm)));

        if (error && error.response && error.response.status === 404)
            history.push(redirectPath);

    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};

export const removeFormByKey = (keyForm) => (dispatch, getState) => {
    dispatch(formActionTypes.removeForm(keyForm));
};
export const formSubmit = (
    formModel,
    agentCreate = async (obj = {}, config = {}) => { },
    agentUpdate = async (obj = {}, config = {}) => { },
    redirectPath = "/",
    restForm = () => { }
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
        else {
            swalAlert.success(`${formModel.dispalyName} با موفقیت ثبت شد`);
            console.log("RESETFORM");
            restForm();
        }

    } catch (error) {
        if (error && error.status === 404) {
            if (error && error.response && error.response.data) {
                const detale = error.response.data.detale;
                swalAlert.warning(detale);
            }
            history.push(redirectPath);
        } else {
            swalAlert.warning("ذخیره انجام نشد دوباره تلاش کنید");
            dispatch(formActionTypes.setErrors(error));
        }
    } finally {
        dispatch(formActionTypes.finishedRequest());
    }
};

export const formDelete = (
    formModel = new FormModel(),
    agentDelete = async (obj = {}, config = {}) => { },
    redirectPath = "/",
) => async (dispatch, getState) => {

    const formId = formModel.id;

    console.log({ formId });

    if (!formId)
        swalAlert.warning("ای دی نامعتر میباشد");

    dispatch(formActionTypes.startDeleteRequest());
    try {
        await agentDelete(formId);
        swalAlert.success(`${formModel.dispalyName} با موفقیت حذف شد`);
        history.push(redirectPath);

    } catch (error) {
        if (error && error.response && error.response.data) {
            const detale = error.response.data.detale;
            swalAlert.warning(detale);
        } else
            swalAlert.warning("خطا هنگام اجرای عملیات");

        if (error && error.status === 404)
            history.push(redirectPath);

    } finally {
        dispatch(formActionTypes.finishedDeleteRequest());
    }
};