import { FormModel } from "../../models";
import { formActionTypes, listActionTypes } from "../@types";
import { swalAlert } from "../../components/alert";
import { history } from "../..";
import { confirmRemoveSwal } from "../../common/swal";
import swal from "sweetalert";

export const getFormById = (id, agentForm, keyForm, redirectPath = "/", label = "") => async (dispatch) => {
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
            swalAlert.warning(label + " " + error.response.data.detail);
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
export const deleteFormQuestion = (dname, formModel, deleteAgent, redirectPath, keyList = null) => async (dispatch, getState) => {
    swal(confirmRemoveSwal(dname)).then((value) => {
        if (value == "remove")
            dispatch(formDelete(formModel, deleteAgent, redirectPath, keyList));
    });
};

export const formDelete = (
    formModel = new FormModel(),
    agentDelete = async (obj = {}, config = {}) => { },
    redirectPath = "/",
    keyList = null,
) => async (dispatch, getState) => {

    const formId = formModel.id;

    console.log({ formId });

    if (!formId)
        swalAlert.warning("ای دی نامعتر میباشد");

    dispatch(formActionTypes.startDeleteRequest());
    try {
        await agentDelete(formId);
        swalAlert.success(`${formModel.dispalyName} با موفقیت حذف شد`);
        if (!keyList)
            history.push(redirectPath);
        else{
            console.log({ keyList });
            dispatch(listActionTypes.deleteItemById(keyList, formId));
        }
    } catch (error) {
        if (error && error.response && error.response.data) {
            const detale = error.response.data.detale;
            swalAlert.warning(detale);
        } else
            swalAlert.warning("خطا هنگام اجرای عملیات");

        if (!keyList && error && error.status === 404)
            history.push(redirectPath);

    } finally {
        dispatch(formActionTypes.finishedDeleteRequest());
    }
};