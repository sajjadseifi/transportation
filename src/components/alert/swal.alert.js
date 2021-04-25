import swal from "sweetalert";
export const swalBase = (title, icon) => swal({ title, icon });
export const error = (title) => swalBase(title, "error");
export const warning = (title) => swalBase(title, "warning");
export const info = (title) => swalBase(title, "info");
export const success = (title) => swalBase(title, "success");

export const warningToLoadData = async () => {
    return await swal({
        text: "خطا هنگام بارگزاری داده مجددا اقدام نمایید",
        button: { text: "تلاش دوباره" },
        icon: "warning",
    })
}

export default {
    swalBase,
    error,
    info,
    success,
    warning,
    warningToLoadData
};