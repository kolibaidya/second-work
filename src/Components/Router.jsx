import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contract from "./Contract";
import Login from "./Login";
import Button from "./Button";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'About',
                Component: About
            },
            {
                path: 'Service',
                Component: Services
            },
            {
                path: 'Contract',
                Component: Contract
            },
            {
                path: 'Login',
                Component: Login
            },
            {
                path: 'Click Here',
                Component: Button
            },
        ]
    }
]);

export default router