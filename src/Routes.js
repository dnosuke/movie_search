import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme2 from "./pages/Filme";
import Home2 from "./pages/Home";
import Search from "./pages/Search";

export function AppRoutes() {
    return (
        
            <Routes>
                <Route index element={<Home2 />} />
                <Route path="search" element={<Search />} />
                <Route path="filme" element={<Filme2 />} />
            </Routes>
        
    )

}