import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

import { HomeStyle } from "./HomeStyle"
import logobig from "../../../assets/logo.png"
import { URL } from "../../../assets/constants"

export default function RegisterPage() {

    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const [isBlocked, setIsBlocked] = useState(false);

    function inputControl(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function signup(e) {
        setIsBlocked(true);
        e.preventDefault();
        const promise = axios.post(URL + "/auth/sign-up", form);
        promise.then(() => {
            navigate("/");
        })
        promise.catch(err => {
            alert(err.response.data.message);
            setIsBlocked(false);
        })
    }

    return (
        <HomeStyle>
            <Link to="/"><img src={logobig} alt="logo" /></Link>
            <Link to="/"><h1>HabIt</h1></Link>
            <form onSubmit={signup}>
                <input
                    data-identifier="input-email"
                    type="email"
                    placeholder="email"
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
                <input
                    data-identifier="input-name"
                    placeholder="nome"
                    type="text"
                    onChange={inputControl}
                    value={form.name}
                    required
                    name="name"
                    disabled={isBlocked}
                />
                <input
                    data-identifier="input-photo"
                    placeholder="URL da foto"
                    type="url"
                    onChange={inputControl}
                    value={form.image}
                    required
                    name="image"
                    disabled={isBlocked}
                />
                <button type="submit">
                    {isBlocked ? <ThreeDots color="#FFF" /> : "Cadastrar"}
                </button>
            </form>
            <Link to="/">
                <p data-identifier="back-to-login-action">Já tem uma conta? Faça login!</p>
            </Link>
        </HomeStyle>
    )
}