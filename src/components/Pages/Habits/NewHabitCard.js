import { useState, useContext } from "react"
import styled from "styled-components"
import Weekday from "./Weekday"
import axios from "axios"
import { URL } from "../../../assets/constants"
import { AuthContext } from "../../../context/Auth"


export default function NewHabitCard({ newHabit, setNewHabit }) {
    const { token, setUpdate } = useContext(AuthContext)

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    const [arrayWeekdays, setArrayWeekdays] = useState([])
    const [form, setForm] = useState({ name: "", days: "" })
    console.log(arrayWeekdays)

    function inputControl(e) {
        setForm({
            ...form, [e.target.name]: e.target.value,

        })
    }



    console.log(form)
    function save(e) {
        e.preventDefault();

        const promise = axios.post(URL + "/habits", { ...form, days: arrayWeekdays }, config)
        promise.then((res) => {
            setForm({ name: "", days: "" })
            setArrayWeekdays([]);
            setNewHabit(true);
            setUpdate([]);
        }

        )
        promise.catch((err) => alert(err.response.data.message))


    }

    function selectedDays(index) {
        if (arrayWeekdays.includes(index)) {
            const selectedDay = arrayWeekdays.filter(a => a !== index)
            setArrayWeekdays([...selectedDay])
        } else {
            setArrayWeekdays([...arrayWeekdays, index])
        }
    }


    function cancel(e) {
        e.preventDefault();
        setNewHabit(false);
    }
    return (
        <HabitCardContainer newHabit={newHabit}>
            <form onSubmit={save}>
                <input
                    placeholder="nome do hábito"
                    name="name"
                    type="text"
                    onChange={inputControl}
                    value={form.name}
                    required
                />
                <ContainerWeekdays>
                    <Weekday arrayWeekdays={arrayWeekdays} selectedDays={selectedDays} />
                </ContainerWeekdays>
                <ContainerButtons>
                    <Button cancel={true} onClick={cancel}>Cancelar</Button>
                    <Button cancel={false} >Salvar</Button>
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
    display: ${({ newHabit }) => newHabit ? "flex" : "none"};
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
            margin-bottom: 8px;
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
    justify-content: flex-start;

`
const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`
const Button = styled.button`
        margin-left: 20px;
        border: none;
        font-size: 16px;
        height: 35px;
        width: 84px;
        border-radius: 5px;
        background-color: ${({ cancel }) => cancel ? "white" : "#52B6FF"};
        color: ${({ cancel }) => cancel ? "#52B6FF" : "white"};
        cursor: pointer;
`