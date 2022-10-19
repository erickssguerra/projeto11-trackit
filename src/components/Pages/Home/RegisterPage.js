import { HomeStyle } from "./HomeStyle"
import logobig from "../../../assets/logo.png"
import { URL } from "../../../assets/constants"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {

    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const navigate = useNavigate();
    function inputControl(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    function signup(e) {
        e.preventDefault();
        const promise = axios.post(URL + "/auth/sign-up", form);
        promise.then(() => {
            navigate("/")
        })
        promise.catch(err => alert(err.response.data))
    }

    return (
        <HomeStyle>
            <Link to="/"><img src={logobig} alt="logo" /></Link>
            <Link to="/"><h1>HabIt</h1></Link>
            <form onSubmit={signup}>
                <input
                    type="email"
                    placeholder="email"
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
                <input
                    placeholder="nome"
                    type="text"
                    onChange={inputControl}
                    value={form.name}
                    required
                    name="name" />
                <input
                    placeholder="URL da foto"
                    type="url"
                    onChange={inputControl}
                    value={form.image}
                    required
                    name="image" />
                <button type="submit">
                    Entrar
                </button>
            </form>
            <Link to="/"><p>Não tem uma conta? Cadastre-se!</p></Link>

        </HomeStyle>
    )

}