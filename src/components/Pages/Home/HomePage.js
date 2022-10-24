import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import { HomeStyle } from "./HomeStyle"
import logobig from "../../../assets/logo.png"
import { URL } from "../../../assets/constants";
import { AuthContext } from "../../../context/Auth";

export default function HomePage() {

    const { setToken, setImage, setUsername } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [isBlocked, setIsBlocked] = useState(false);

    function inputControl(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    function login(e) {
        setIsBlocked(true);
        e.preventDefault();
        const promise = axios.post(URL + "/auth/login", form);
        promise.then((res) => {
            setToken(res.data.token);
            setImage(res.data.image);
            setUsername(res.data.name);
            navigate("/hoje");
            setIsBlocked(false);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            setIsBlocked(false);
        });
    }

    return (
        <HomeStyle>
            <Link to="/"><img src={logobig} alt="logo" /></Link>
            <Link to="/"><h1>HabIt</h1></Link>
            <form onSubmit={login}>
                <input
                    data-identifier="input-email"
                    placeholder="email"
                    type="email"
                    onChange={inputControl}
                    value={form.email}
                    required
                    name="email"
                    disabled={isBlocked}
                />
                <input
                    data-identifier="input-password"
                    placeholder="senha"
                    type="password"
                    onChange={inputControl}
                    value={form.password}
                    required
                    name="password"
                    disabled={isBlocked}
                />
                <button data-identifier="login-btn">
                    {isBlocked ? <ThreeDots color="#FFF" /> : "Entrar"}
                </button>
            </form>
            <Link to="/cadastro">
                <p data-identifier="sign-up-action" >Não tem uma conta? Cadastre-se!</p>
            </Link>

        </HomeStyle>
    )
}
