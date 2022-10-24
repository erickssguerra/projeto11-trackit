import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "../../Header";
import NewHabitCard from "./NewHabitCard";
import Footer from "../../Footer";
import { MessageNoHabits, errorMessage, URL } from "../../../assets/constants";
import HabitCard from "./HabitCard";
import { AuthContext } from "../../../context/Auth";

export default function HabitsPage() {
    const { token, update, concluded } = useContext(AuthContext)
    const [habits, setHabits] = useState([])
    const [newHabit, setNewHabit] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        function tratarSucesso(response) {
            setHabits(response.data)
        }

        function tratarErro(error) {
            alert(errorMessage)
            navigate("/")
            window.location.reload()
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get(URL + "/habits", config)
        promise.then(tratarSucesso)
        promise.catch(tratarErro)
    }, [update, token, navigate])

    function createHabit() {
        setNewHabit(true)
    }

    return (
        <>
            <Header />
            <HabitsContainer>
                <TopContainer>
                    <h1>Meus hábitos</h1>
                    <div data-identifier="create-habit-btn" onClick={createHabit}>
                        <h2>+</h2>
                    </div>
                </TopContainer>

                <NewHabitCard setNewHabit={setNewHabit} newHabit={newHabit} />
                {habits.length === 0 ? <p data-identifier="no-habit-message" >{MessageNoHabits}</p> :
                    <ul>
                        {habits.map((habit) => <HabitCard habit={habit} key={habit.id} />)}
                    </ul>}
            </HabitsContainer>
            <Footer percentage={concluded} />
        </>
    )
}

const HabitsContainer = styled.div`
 
    height: 100%;
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

    p {
        margin-top: 28px;
        color: #666666;
        font-size: 18px;
        line-height: 24px;
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
