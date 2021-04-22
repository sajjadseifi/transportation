import { useEffect } from "react";
import { Screens } from "../screens";
import { useDispatch } from "react-redux";
import { AppLoading } from "../components/Loading";

// const LaizyCmp = lazy(() => import("~/LaizyCmp.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  if (false) return <AppLoading />;

  return <Screens />;
}

export default App;
