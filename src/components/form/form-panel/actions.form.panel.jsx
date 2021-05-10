//default
import React from "react";
import { Link } from "react-router-dom";
import { roleType } from "../../../constants";
import ButtonForm from "../../UI/button/button.form";
import { Security } from "../../../core/security";
import { FlexBox } from "../../box";
import { Icon } from "rsuite";
const ActionsFormPanel = ({
  isUpdate = false,
  deleteHandler = () => {},
  deleteLoading = false,
  loading = false,
  isFormExist = false,
  disabled = false,
  removeFormState = () => {},
  addFormPath = "",
  singleName = "",
}) => {
  return (
    <>
      {isUpdate && (
        <Link className="px-4" onClick={removeFormState} to={addFormPath}>
          <FlexBox alignCenter justCenter>
            <Icon icon="arrow-left" />
            <h4 className="px-2">{`افزودن ${singleName}`}</h4>
          </FlexBox>
        </Link>
      )}
      <div>
        <Security role={roleType.SUPPER_ADMIN}>
          {isUpdate && (
            <ButtonForm
              onClick={deleteHandler}
              disabled={deleteLoading || loading}
              loading={deleteLoading}
              type="danger"
            >
              حذف
            </ButtonForm>
          )}
        </Security>
        <ButtonForm
          IsButton
          type={isUpdate ? "info" : "success"}
          loading={isFormExist && loading}
          disabled={disabled || deleteLoading}
        >
          {isUpdate ? "ویرایش" : "ثبت"}
        </ButtonForm>
      </div>
    </>
  );
};

export default ActionsFormPanel;
