import { HomeStyle } from "./HomeStyle"
import logobig from "../../../assets/logo.png"
import { Link } from "react-router-dom"


export default function HomePage() {

    return (
        <HomeStyle>
            <Link to="/"><img src={logobig} alt="logo" /></Link>
            <Link to="/"><h1>HabIt</h1></Link>
            <form>
                <input
                    placeholder="email"
                    type="email" />
                <input
                    placeholder="senha"
                    type="password" />
                <button>Entrar</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </HomeStyle>
    )
}
