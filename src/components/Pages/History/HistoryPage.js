import Header from "../../Header";
import styled from "styled-components";
import Footer from "../../Footer";

export default function HistoryPage() {
    return (
        <>
            <Header />
            <HistoryContainer>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryContainer>
            <Footer />
        </>
    )
}

const HistoryContainer = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    padding: 100px 18px;
    display: flex;
    flex-direction: column;
    
    h1 {
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
    }
    p{
        margin-top: 28px;
        color: #666666;
        font-size: 18px;
        line-height: 24px;
    }
    
`