import { Nav, Dropdown, Icon } from "rsuite";
import { rolesLevel } from "../constants";

// authorize: {
//      reverse:false,defult if revers access section lower level and 
//     high level is not access thi part 
//     level: rolesLevel.TRANSPORT_ADMIN, level for index 
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
            title: "جادویی",
            route: "/admin/magic",
            authorize: {
                level: rolesLevel.TRANSPORT_ADMIN,
                // rolesAccess: [],
                // rolesNotAccess: [],
            },
            items: [
                {
                    component: Dropdown.Item,
                    title: "Action Name",
                    Icon: <Icon icon="plus" />,
                    route: "/admin/magic/Name",
                },
                {
                    component: Dropdown.Item,
                    title: "Action Params",
                    Icon: <Icon icon="paragraph" />,
                    route: "/admin/magic/Params",
                    authorize: {
                        level: rolesLevel.SUPPER_ADMIN,
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
                        level: rolesLevel.TRANSPORT_ADMIN,
                    },
                    // Icon: <Icon icon="paragraph" />
                },
                {
                    component: Dropdown.Item,
                    title: "Loyalty",
                    route: "/admin/cars/Loyalty",
                    authorize: {
                        level: rolesLevel.SUPPER_ADMIN,
                    },
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "Visit Depth",
                    route: "/admin/cars/Visit-Depth",
                    // Icon: <Icon icon="paragraph" />
                    authorize: {
                        level: rolesLevel.SUPPER_ADMIN,
                    },
                }
            ]
        }

    ]
}