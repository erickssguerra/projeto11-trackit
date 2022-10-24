
import styled from "styled-components"
import axios from "axios"
import { useContext } from "react"

import { AuthContext } from "../../../context/Auth"
import { weekdays, URL } from "../../../assets/constants"

export default function HabitCard({ habit }) {

    const { token, setUpdate } = useContext(AuthContext)
    const selectedDaysIndexes = habit.days;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function deletar() {
        if (window.confirm("Deseja apagar esse hábito?") === true) {
            const promise = axios.delete(URL + `/habits/${habit.id}`, config)
            promise.then((res) => {
                setUpdate([]);
            })
            promise.catch((err) => alert(err.response.data.message))
        }
    }

    return (
        <HabitCardContainer>
            <TopContainer>
                <h1 data-identifier="habit-name">{habit.name}</h1>
                <ion-icon data-identifier="delete-habit-btn" onClick={deletar} name="trash-outline" />
            </TopContainer>

            <ContainerWeekdays>
                {weekdays.map((day, index) =>
                    <Weekday
                        boolean={selectedDaysIndexes.includes(index)}
                        isCursorPointer={false}
                        key={index} >
                        {day}
                    </Weekday>)}
            </ContainerWeekdays>
        </HabitCardContainer>
    )
}

const Weekday = styled.div`
    width: 30px;
    height: 30px;
    border: #D4D4D4 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    border-radius: 5px;
    color: ${({ boolean }) => boolean ? "white" : "#DBDBDB"};
    background-color: ${({ boolean }) => boolean ? "#CFCFCF" : "white"};
    cursor: ${({ isCursorPointer }) => isCursorPointer ? "pointer" : "inherit"};
`

const HabitCardContainer = styled.li`
    width: 100%;
    min-height: 94px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    flex-direction: column;
`
const ContainerWeekdays = styled.div`
    display: flex;
    justify-content: flex-start;
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    word-break: break-all;
    color: #666666;
    font-size: 20px;
    margin-bottom: 8px;
    ion-icon {
        cursor: pointer;
        position: absolute;
        right: 28px;
    }
`
