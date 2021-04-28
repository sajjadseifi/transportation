import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppLoading } from "../components/loading";
import loadable, { lazy } from "@loadable/component";
import swal from "sweetalert";
/* const LaizyCmp = lazy(() => import("~/LaizyCmp.jsx")); */
import { Routes as ROUTE } from "../routes";
import { SecurityLayout } from "../layout";
import { rolesLevel } from "../core/security";
import { roleType } from "../core/security/roles.security";
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
      <SecurityLayout level={rolesLevel[roleType.TRANSPORT_ADMIN]}>
        SALLAM
      </SecurityLayout>
      <ROUTE />
    </Suspense>
  );
}

export default App;
