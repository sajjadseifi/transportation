//default
import React from "react";
import { FixedCenterBox, FlexBox } from "../../components/box";
import { FormPersonal } from "../../components/form";
import { loginFormOption } from "../../common/form.option";
import LoginAsset from "../../assets/images/SVG/login-asset.svg";
import { ButtonAuthForm } from "../../common/form";
import { useState } from "react";
import { authValidation } from "../../helpers/validation";
import { combineValidators } from "revalidate";

const authValidate = combineValidators({
  username: authValidation.usernameValidator,
  password: authValidation.passwordValidator,
});

const LoginScreen = (props) => {
  const [loading, setLoading] = useState(false);

  const loginHandler = (values) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <FixedCenterBox className="login-screen">
      <div className="login-card login-card-show">
        <div className="image-container">
          <img src={LoginAsset} />
        </div>
      </div>
      <FixedCenterBox>
        <div className="login-card login-form">
          <FlexBox
            className
            culumn
            justCenter
            alignCenter
            className="form-container"
          >
            <h3 className="auth-title">سامانه حمل و نقل</h3>
            <FormPersonal
              validate={authValidate}
              onSubmit={loginHandler}
              formClass="w-100"
              column
              formOptions={loginFormOption}
              afterFields={({ disabled }) => (
                <ButtonAuthForm
                  className="mt-5"
                  title="ورود به سامانه"
                  {...{ disabled, loading }}
                />
              )}
            />
          </FlexBox>
        </div>
      </FixedCenterBox>
    </FixedCenterBox>
  );
};

export default LoginScreen;
