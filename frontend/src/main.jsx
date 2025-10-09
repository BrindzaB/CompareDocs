import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { StrictMode } from 'react';

import './index.css';
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import LoadingPage from "./components/LoadingPage.jsx";
import ResultPage from "./components/ResultPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/loading",
                element: <LoadingPage />
            },
            {
                path: "/result",
                element: <ResultPage />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
