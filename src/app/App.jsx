import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppLoading } from "../components/loading";
import { Routes as ROUTE } from "../routes";
import {  SecurityProvider } from "../core/security";
import { roleType } from "../core/security/roles.security";
import { securityOption, securitySimpleOption } from "../constants";
import loadable, { lazy } from "@loadable/component";

/* const LaizyCmp = lazy(() => import("~/LaizyCmp.jsx")); */
const Routes = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../routes/routes")), 3000)
    )
);

const appLoadTitle = "در حال اجرای برنامه ساعات خوشی را برای شما ارزومندیم";
const loadAccountTitle = "در حال ورود به حساب کاربری لطفا شکیبا باشید";
function App() {
  const dispatch = useDispatch();

  //auto login
  useEffect(() => {}, [dispatch]);

  if (false) return <AppLoading title={loadAccountTitle} />;

  return (
    <Suspense fallback={<AppLoading title={appLoadTitle} />}>
      <SecurityProvider
        user={{role: roleType.SUPPER_ADMIN,levelInRole: 2}}
        options={securitySimpleOption} >
        <ROUTE />
      </SecurityProvider>
    </Suspense>
  );
}

export default App;
