export default (displayName = "") => ({
    title: `ایا از پاک کردن ( ${displayName} ) مطمئن هستید`,
    text: "درصورت پاک گشتن ، داده قابل بازیابی نخواهد بود!",
    icon: "warning",
    buttons: {
        delete: {
            text: "پاک کردن",
            value: "remove",
        },
        cancel: "خیر",
    },
    dangerMode: true
});