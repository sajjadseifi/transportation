import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppLoading } from "../components/Loading";
// import { Screen } from "../screens";
// const LaizyCmp = lazy(() => import("~/LaizyCmp.jsx"));
import loadable, { lazy } from "@loadable/component";
const Screen = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../screens/Screen.jsx")), 3000)
    )
);

// const Screen = lazy(() => import("../screens/Screen.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  if (false) return <AppLoading />;

  return (
    <Suspense fallback={<AppLoading />}>
      <Screen />
    </Suspense>
  );
}

export default App;
