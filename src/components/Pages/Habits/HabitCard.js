import styled from "styled-components"
import Weekday from "./Weekday"

export default function HabitCard() {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <HabitCardContainer>
            <form>
                <input
                    placeholder="nome do hábito"
                />
                <ContainerWeekdays>
                    {weekdays.map((d, i) => <Weekday day={d} key={i} />)}
                </ContainerWeekdays>
                <ContainerButtons>
                    <div><h1 >Cancelar</h1></div>
                    <button  >Salvar</button>
                </ContainerButtons>
            </form>

        </HabitCardContainer>

    )

}

const HabitCardContainer = styled.li`

    width: 100%;
    min-height: 94px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        input {
            width: 100%;
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
    }
    
`
const ContainerWeekdays = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    button {
        margin-left: 20px;
        border: none;
        font-size: 16px;
        height: 35px;
        width: 84px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: white;
        cursor: pointer;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;

        h1{
            margin-left: 20px;
            font-size: 16px;
            color: #52B6FF;
            cursor: pointer;
        }
    }

`