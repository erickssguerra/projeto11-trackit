import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "../assets/GlobalStyle";
import HomePage from "./Pages/Home/HomePage";
import TodayPage from "./Pages/Today/TodayPage";
import RegisterPage from "./Pages/Home/RegisterPage";
import AuthProvider from "../context/Auth";
import HabitsPage from "./Pages/Habits/HabitsPage";
import HistoryPage from "./Pages/History/HistoryPage";



export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/historico" element={<HistoryPage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}