import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppLoading } from "../components/loading";
import { Routes as ROUTE } from "../routes";
import loadable, { lazy } from "@loadable/component";
import { useSecurity } from "../core/security";
import { roleType } from "../constants";
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
  const { dispatch: secDispatch } = useSecurity();

  const dispatch = useDispatch();

  //auto login
  useEffect(() => {
    setTimeout(() => {
      secDispatch({
        type: "SET_USER",
        payload: {
          role: roleType.SUPPER_ADMIN,
          levelInRole: 0,
        },
      });
    }, 1000);
  }, []);
  //auto login
  useEffect(() => {}, [dispatch]);

  if (false) return <AppLoading title={loadAccountTitle} />;

  return (
    <Suspense fallback={<AppLoading title={appLoadTitle} />}>
      <ROUTE />
    </Suspense>
  );
}

export default App;
