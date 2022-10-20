import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"

export default function Footer() {
    const value = 66;


    return (
        <FooterBar>
            <h1><Link to="/habitos">Hábitos</Link></h1>
            <CircularProgressbarWithChildren
                value={50}
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52bf6ff",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    strokeLinecap: "round"

                })


                }
            >


            </CircularProgressbarWithChildren >



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
    div {
        width: 100px;
        height: 100px;
        margin-bottom: 60px;
        background-color: #52B6FF;
        border-radius: 50%;
    }
    svg{
        width: 100px;
        height: 100px;
        margin-bottom: 60px;
    }

    h1 {
        width: 50%;
        text-align: center;
        color: #52B6FF;
        font-size: 18px;
    }
    
`