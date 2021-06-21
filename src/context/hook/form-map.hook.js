import { useDispatch, useSelector } from "./context.hook";
import { FormMapStateContext, FormMapProvider } from "../provider/form-map.privider"

export const useFormMapDispatch = () =>
   useDispatch(FormMapStateContext, "useFormMapDispatch", FormMapProvider.name)

export const useFormMapSeletor = (cb = (state) => state) =>
   useSelector(FormMapStateContext, "useFormMapSeletor", FormMapProvider.name, cb)
