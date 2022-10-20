import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState, useContext } from "react";
import { AuthContext } from "../context/Auth"


export default function Header() {
    const { image, username } = useContext(AuthContext)

    return (
        <ContainerHeader>
            <Link to="/"><h1>HabIt</h1></Link>
            <img src={image} alt={username} />
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
            width: 100%;
            height: 70px;
            background-color: #126BA5;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 18px;
            position: fixed;
            top: 0;
            z-index: 1;
            box-shadow: 0px 2px 10px black;
            h1 {
            font-family: 'Playball';
            font-size: 50px;
            color: white;
            }
            img {
                width: 51px;
                height: 51px;
                border-radius: 51px;
                object-fit: cover;
            }

            `