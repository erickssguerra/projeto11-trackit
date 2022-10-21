import { HomeStyle } from "./HomeStyle"
import logobig from "../../../assets/logo.png"
import { URL } from "../../../assets/constants";
import { Link } from "react-router-dom"
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/Auth"
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const { setToken, setImage, setUsername } = useContext(AuthContext)
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate()

    function inputControl(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    function login(e) {
        e.preventDefault();
        const promise = axios.post(URL + "/auth/login", form)
        promise.then((res) => {
            setToken(res.data.token);
            setImage(res.data.image);
            setUsername(res.data.name);
            navigate("/hoje")
        });
        promise.catch((err) => alert(err.response.data.message));
    }

    return (
        <HomeStyle>
            <Link to="/"><img src={logobig} alt="logo" /></Link>
            <Link to="/"><h1>HabIt</h1></Link>
            <form onSubmit={login}>
                <input
                    placeholder="email"
                    type="email"
                    onChange={inputControl}
                    value={form.email}
                    required
                    name="email"
                />
                <input
                    placeholder="senha"
                    type="password"
                    onChange={inputControl}
                    value={form.password}
                    required
                    name="password"
                />
                <button>Entrar</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </HomeStyle>
    )
}
