import { Nav, Dropdown, Icon } from "rsuite";
import { roleType } from "../constants";

// authorize: {
//      (reverse & reverse):false,defult if revers access section lower role and 
//     high role is not access thi part 
//     role: roleType.TRANSPORT_ADMIN, role for index 
//     rolesAccess: [],//acces this section 
//     rolesNotAccess: [],//not access this section
// },
//roles
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    defaultOpenKeys: [],
    // eslint-disable-next-line no-sparse-arrays
    navigation: [
        {
            component: Nav.Item,
            Icon: <Icon icon="dashboard" />,
            children: "داشبورد",
            route: "/app/dashboard",
        },
        {
            component: Nav.Item,
            Icon: <Icon icon="setting" />,
            children: "تنظیمات",
            route: "/app/setting",
        },
        {
            component: Dropdown,
            title: "حساب کاربری",
            Icon: <Icon icon="dashboard" />,
            route: "/app/account",
            authorize: {
                role: roleType.CUSTOMER,
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "مشخصات فردی",
                    Icon: <Icon icon="plus" />,
                    route: "/account/:username/profile",
                },
                {
                    component: Dropdown.Item,
                    title: "مسیر های من",
                    Icon: <Icon icon="plus" />,
                    route: "/account/:username/profile",
                },
                {
                    component: Dropdown.Item,
                    title: "کیف پول",
                    Icon: <Icon icon="plus" />,
                    route: "/account/:username/wallet",
                },
                {
                    component: Dropdown.Item,
                    title: "تغییر گذرواژه",
                    Icon: <Icon icon="plus" />,
                    route: "/account/:username/change-pass",
                }
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="magic" />,
            title: "تمپلیت",
            route: "/admin/temp/",
            authorize: {
                role: roleType.TRANSPORT_ADMIN,
                // rolesAccess: [],
                // rolesNotAccess: [],
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "لیست ها",
                    Icon: <Icon icon="plus" />,
                    route: "/admin/temp/list",
                },
                {
                    component: Dropdown.Item,
                    title: "افزودن",
                    Icon: <Icon icon="paragraph" />,
                    route: "/admin/temp/form",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                },
                {
                    component: Dropdown.Item,
                    title: "ویرایش",
                    Icon: <Icon icon="paragraph" />,
                    route: "/admin/temp/form/10",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                }
            ]
        },

        {
            component: Dropdown,
            Icon: <Icon icon="user" />,
            title: "کاربران",
            route: "/admin/users",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "تمام کاربران",
                    route: "/admin/users/list",
                    // Icon: <Icon icon="plus" />
                }
                ,
                {
                    component: Dropdown.Item,
                    title: "افزودن کاربر",
                    route: "/admin/users/form",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                },
                {
                    component: Dropdown.Item,
                    title: "ویرایش کاربر",
                    route: "/admin/users/form/1",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                }
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="user-info" />,
            title: "اطلاعات شخصی کاربران",
            route: "/admin/users",
            authorize: {
                role: roleType.TRANSPORT_ADMIN,
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "تمام کاربران",
                    route: "/admin/user-info/list",
                    // Icon: <Icon icon="plus" />
                }
                ,
                {
                    component: Dropdown.Item,
                    title: "افزودن اطلاعات شخصی کاربر",
                    route: "/admin/user-info/form",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                },
                {
                    component: Dropdown.Item,
                    title: "ویرایش اطلاعات شخصی کاربر",
                    route: "/admin/user-info/form/1",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                }
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="car" />,
            title: "ماشین",
            route: "/admin/car",
            authorize: {
                role: roleType.DRIVER,
                rolesNotAccess: [roleType.CUSTOMER, roleType.SUPPER_ADMIN]
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "تمام ماشین ها",
                    route: "/admin/car/list",
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "افزودن ماشین",
                    route: "/admin/car/form",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                },
                {
                    component: Dropdown.Item,
                    title: "ویرایش ماشین",
                    route: "/admin/car/form/10",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="plus" />
                }
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="ticket" />,
            title: "سفارش ها",
            route: "/app/order",
            items: [
                {
                    component: Dropdown.Item,
                    title: "سفر های من",
                    route: "/app/order/list?username=",
                },
                {
                    component: Dropdown.Item,
                    title: "سفر های راننده",
                    route: "/app/order/list?driver=true&username=",
                },
                {
                    component: Dropdown.Item,
                    title: "سفر جدید",
                    route: "/app/order/create?username=",
                },
                {
                    component: Dropdown.Item,
                    title: "درخواست های سفر",
                    route: "/app/order/request/:username",
                    authorize: {
                        role: roleType.DRIVER,
                        rolesNotAccess: [roleType.SUPPER_ADMIN]
                    },
                },
                {
                    component: Dropdown.Item,
                    title: "رسید ها",
                    route: "/app/order/offer",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                }
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="ticket" />,
            title: "مالی",
            route: "/admin/ticket",
            items: [
                {
                    component: Dropdown.Item,
                    title: "شارژ کیف پول",
                    route: "/admin/ticket/list",
                },
                {
                    component: Dropdown.Item,
                    title: "رسید ها",
                    route: "/admin/ticket/form/1",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                }
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="ticket" />,
            title: "تیکت",
            route: "/app/ticket",
            items: [
                {
                    component: Dropdown.Item,
                    title: "مدیریت تیکت ها",
                    route: "/admin/ticket/list",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                },
                {
                    component: Dropdown.Item,
                    title: "ثبت تیکت",
                    route: "/app/ticket/create",
                },
                {
                    component: Dropdown.Item,
                    title: "ثبت های من",
                    route: "/app/ticket/:username",
                },
            ]
        },
        {
            component: Dropdown,
            Icon: <Icon icon="percent" />,
            title: "تخفیف",
            route: "/admin/discount",
            authorize: {
                role: roleType.SUPPER_ADMIN,
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "تمام تخفیف ها",
                    route: "/admin/discount/list",
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "افزودن تخفیف",
                    route: "/admin/discount/form",
                },
                {
                    component: Dropdown.Item,
                    title: "ویرایش تخفیف",
                    route: "/admin/discount/form/10",
                }
            ]
        },
    ]
}
