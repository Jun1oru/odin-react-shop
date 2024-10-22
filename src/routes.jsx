import Main from "./components/Main/Main";
import Shop from "./components/Shop/Shop";

const routes = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
];

export default routes;