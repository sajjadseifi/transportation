import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppLoading } from "../components/loading";
import loadable, { lazy } from "@loadable/component";
import FormPersonal from "../components/form/FormPersonal";
/* const LaizyCmp = lazy(() => import("~/LaizyCmp.jsx")); */
import {Routes as ROUTE} from "../routes";
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

  useEffect(() => {}, [dispatch]);

  if (false) return <AppLoading title={loadAccountTitle} />;

  return (
    <Suspense fallback={<AppLoading title={appLoadTitle} />}>
      <ROUTE />
    </Suspense>
  );
}

export default App;
