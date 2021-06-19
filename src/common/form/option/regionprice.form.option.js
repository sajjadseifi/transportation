import { InputPanelForm } from "../ui";


// eslint-disable-next-line import/no-anonymous-default-export
export default [
   [
      {
         name: "From_neighborhood",
         title: "از محله",
         width: "100%",
         type: "text",
         placeholder: "نام محله را وارد نمایید",
         component: InputPanelForm
      }
   ],
   [
      {
         name: "To_neighborhood",
         title: "به محله",
         width: "100%",
         type: "text",
         placeholder: "نام محله را وارد نمایید",
         component: InputPanelForm
      }
   ],
   [
      {
         name: "weight",
         title: "اندازه",
         width: "100%",
         type: "text",
         placeholder: "مقدار را وارد نمایید",
         component: InputPanelForm
      }
   ]

]
