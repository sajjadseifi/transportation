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
export default {
    defaultOpenKeys: [],
    navigation: [
        {
            component: Nav.Item,
            Icon: <Icon icon="dashboard" />,
            children: "داشبورد",
            route: "/admin/dashboard",
        },
        {
            component: Nav.Item,
            Icon: <Icon icon="setting" />,
            children: "تنظیمات",
            route: "/admin/setting",
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
        ,
        {
            component: Dropdown,
            Icon: <Icon icon="user" />,
            title: "کاربران",
            route: "/admin/users",
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
            title: "تیکت",
            route: "/admin/ticket",
            items: [
                {
                    component: Dropdown.Item,
                    title: "تمام تیکت ها",
                    route: "/admin/ticket/list",
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "مشاهده تیکت",
                    route: "/admin/ticket/form/1",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                }
            ]
        }

    ]
}