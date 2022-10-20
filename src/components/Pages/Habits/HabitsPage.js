import Header from "../../Header";
import styled from "styled-components";
import HabitCard from "./HabitCard";
import Footer from "../../Footer";

export default function HabitsPage() {
    return (
        <>
            <Header />
            <HabitsContainer>
                <TopContainer>
                    <h1>Meus hábitos</h1>
                    <div><h2>+</h2></div>
                </TopContainer>
                <ul>
                    <HabitCard />

                </ul>
            </HabitsContainer>
            <Footer />
        </>
    )
}

const HabitsContainer = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    padding: 100px 18px;
    display: flex;
    flex-direction: column;

    ul {
        width: 100%;
        margin-top: 18px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }
    
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    h1 {
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #52B6FF;
        h2 {
            color: white;
            font-size: 27px;
            width: 40px;
            height: 35px;
            text-align: center;
            cursor: pointer;   
        }
}
`