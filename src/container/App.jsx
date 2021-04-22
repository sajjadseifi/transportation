import { useEffect } from "react";
import Pages from "../pages/Pages.jsx";
import { useDispatch } from "react-redux";
import {AppLoading} from "../components/Loading";

// const LaizyCmp = lazy(() => import("~/LaizyCmp.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => { }, [dispatch]);


  if(false)
    return <AppLoading/>

  return (<Pages />);
}

export default App;
