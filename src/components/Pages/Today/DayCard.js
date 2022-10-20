import styled from "styled-components"

export default function DayCard() {
    return (
        <DayCardContainer>
            <InfoDayCard>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: 4 dias</p>
                <p>Seu record: 5 dias</p>
            </InfoDayCard>
            <ion-icon name="checkbox"></ion-icon>
        </DayCardContainer>
    )
}

const DayCardContainer = styled.li`
    
    width: 100%;
    min-height: 94px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
        font-size: 70px;
        color: #E7E7E7;
    }

`

const InfoDayCard = styled.div`
      
      
    h3{
        font-size: 20px;
        margin-bottom: 7px;
        color: #666666;
    }

    p{
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
`