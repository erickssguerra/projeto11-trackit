import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"

export default function Footer({ percentage }) {

    return (
        <FooterBar>
            <h1><Link to="/habitos">Hábitos</Link></h1>
            <Link to="/hoje"><CircularProgressbarWithChildren
                value={percentage}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    strokeLinecap: 'round'
                })} npm
            ><p>Hoje</p>
            </CircularProgressbarWithChildren ></Link>
            <h1><Link to="/historico">Histórico</Link></h1>
        </FooterBar>
    )
}

const FooterBar = styled.div`
    position: fixed;
    height: 70px;
    background-color: white;
    width: 100%;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 20px black;

    svg{
        width: 91px;
        height: 91px;
        margin-bottom: 60px; 
    }

    h1 {
        width: 50%;
        text-align: center;
        font-size: 18px;
        color: #52B6FF;
    }
    a {
        color:  #52B6FF;
    }

    p {
        margin-bottom: 190px;
        color: white;
        font-size: 18px;
    }

  

`