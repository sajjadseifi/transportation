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
        {
            component: Dropdown,
            Icon: <Icon icon="car" />,
            title: "ماشین",
            route: "/admin/cars",
            items: [
                {
                    component: Dropdown.Item,
                    title: "Geo",
                    route: "/admin/cars/Geo",
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "Devices",
                    route: "/admin/cars/Geo",
                    authorize: {
                        role: roleType.TRANSPORT_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                },
                {
                    component: Dropdown.Item,
                    title: "Loyalty",
                    route: "/admin/cars/Loyalty",
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "Visit Depth",
                    route: "/admin/cars/Visit-Depth",
                    // Icon: <Icon icon="paragraph" />
                    authorize: {
                        role: roleType.SUPPER_ADMIN,
                    },
                }
            ]
        }

    ]
}