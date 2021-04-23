//default
import React from "react";
import { FixedCenterBox, FlexBox } from "../../components/box";
import { FormPersonal } from "../../components/form";
import { loginFormOption } from "../../common/form.option";
import LoginAsset from "../../assets/images/SVG/login-asset.svg";
import { ButtonAuthForm } from "../../common/form";
import { useState } from "react";

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
          <FlexBox justCenter alignCenter className="form-container">
            <FormPersonal
              onSubmit={loginHandler}
              formClass="w-100"
              column
              formOptions={loginFormOption}
              afterFields={({ diabled }) => (
                <ButtonAuthForm
                  className="mt-5"
                  title="ورود به سامانه"
                  {...{ diabled, loading }}
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
