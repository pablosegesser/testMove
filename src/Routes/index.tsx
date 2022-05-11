import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

export const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};
