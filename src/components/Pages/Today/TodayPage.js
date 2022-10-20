import Header from "../../Header"
import styled from "styled-components"
import DayCard from "./DayCard"
import Footer from "../../Footer"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br';



export default function TodayPage() {
    let today = dayjs().locale("pt-br").format("dddd, D/MM")
    today = today[0].toUpperCase() + today.substring(1).replace('-feira', '');

    return (
        <>
            <Header />
            <TodayContainer>
                <h1>{today}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
                <ul>
                    <DayCard />
                    <DayCard />
                    <DayCard />
                    <DayCard />
                </ul>
            </TodayContainer>
            <Footer />
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
    ul {
        width: 100%;
        margin-top: 18px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }

`