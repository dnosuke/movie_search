import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TopRated from "./components/TopRated";
import Filme from "./pages/Filme";
import Result from "./pages/Result";

export function AppRoutes() {
    return (
        
            <Routes>
                <Route path="home" element={<Result />} />
                <Route index element={<TopRated />} />
                <Route path="/filme" element={<Filme />} />
            </Routes>
        
    )

}