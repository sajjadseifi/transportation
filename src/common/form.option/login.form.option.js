import { InputAuthForm } from "../form";

export default [
    [{
        name: "username",
        icon: "user",
        title: "نام کاربری",
        width: "100%",
        type: "text",
        placeholder: "نام کاربری را وارد نمایید",
        component: InputAuthForm
    },
    {
        name: "password",
        icon: "key",
        title: "گذرواژه",
        width: "100%",
        type: "passowrd",
        placeholder: "گذرواژه را وارد نمایید",
        component: InputAuthForm
    }
    ],
]