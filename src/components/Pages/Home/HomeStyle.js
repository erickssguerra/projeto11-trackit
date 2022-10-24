import styled from "styled-components";

export const HomeStyle = styled.div`
    height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        width: 100px;
        cursor:pointer;
    }

    h1 {
        font-family: "Playball";
        font-size: 70px;
        color: #126BA5;
        margin-bottom: 33px;
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 300px;
        height: 45px;
        border: solid 1px #D4D4D4;
        border-radius: 5px;
        margin-bottom: 6px;
        padding: 10px;
        font-size: 20px;
        &::placeholder {
            color: #DBDBDB;
            font-size: 20px;
            padding: 10px;
        }
    }

    button {
        width: 300px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 21px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        margin-top: 25px;
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
    }

`

