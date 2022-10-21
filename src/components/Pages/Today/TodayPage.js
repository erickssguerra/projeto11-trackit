import Header from "../../Header"
import styled from "styled-components"
import DayCard from "./DayCard"
import Footer from "../../Footer"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br';
import { AuthContext } from "../../../context/Auth"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { URL } from "../../../assets/constants"




export default function TodayPage() {
    let today = dayjs().locale("pt-br").format("dddd, D/MM")
    today = today[0].toUpperCase() + today.substring(1).replace('-feira', '')
    const [cards, setCards] = useState([])
    const [status, setStatus] = useState([])

    const navigate = useNavigate()
    const { token, update, setValor, valor } = useContext(AuthContext)



    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }


        function inCaseOfSuccess(response) {
            setCards(response.data)
            let cardsDone = response.data.filter(card => card.done)
            setStatus(cardsDone)
            if (cardsDone.length !== 0) {

                let percentage = (cardsDone.length / response.data.length * 100).toFixed(0)
                setValor(percentage)
            } else {
                let percentage = 0;
                setValor(percentage)
            }
            console.log(cardsDone)
        }

        function inCaseOfError(error) {
            alert(error.response.data.message)
            navigate("/")
            window.location.reload()
        }

        const promise = axios.get(URL + "/habits/today", config)
        promise.then(inCaseOfSuccess);
        promise.catch(inCaseOfError);


    }, [update, navigate, token])


    return (
        <>
            <Header />
            <TodayContainer>
                <h1>{today}</h1>
                {cards.length === 0 ? <h2>Nenhum hábito para hoje</h2> :
                    status.length === 0 ?
                        <h2>Nenhum hábito concluído</h2>
                        :
                        <h3>{valor} % dos hábitos concluídos</h3>
                }
                <ul>
                    <DayCard cards={cards} />
                </ul>
            </TodayContainer>
            <Footer percentage={valor} />
        </>
    )
}

const TodayContainer = styled.div`
    background-color: #F2F2F2;
    height: 100%;
    padding: 100px 18px;
    h1 {
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
        
    }
    h2 {
        color: #BABABA;
        font-size: 18px;
        line-height: 22.5px;
    }
    h3 {
        color: #8FC549;
        font-size: 18px;
        line-height: 22.5px;
    }
    ul {
        width: 100%;
        margin-top: 18px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }

`