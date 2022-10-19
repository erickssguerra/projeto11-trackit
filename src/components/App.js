import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";
import HomePage from "./Pages/Home/HomePage";
import RegisterPage from "./Pages/Home/RegisterPage";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
            </Routes>

        </BrowserRouter>
    )
}