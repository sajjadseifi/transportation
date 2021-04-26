import {  Nav, Dropdown, Icon } from "rsuite";
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
                    // Icon: <Icon icon="paragraph" />
                },
                {
                    component: Dropdown.Item,
                    title: "Loyalty",
                    route: "/admin/cars/Loyalty",
                    // Icon: <Icon icon="plus" />
                },
                {
                    component: Dropdown.Item,
                    title: "Visit Depth",
                    route: "/admin/cars/Visit-Depth",
                    // Icon: <Icon icon="paragraph" />
                }
            ]
        }

    ]
}