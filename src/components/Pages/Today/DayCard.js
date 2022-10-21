import styled from "styled-components"
import { AuthContext } from "../../../context/Auth"
import { useContext } from "react"
import { URL } from "../../../assets/constants"
import axios from "axios"

export default function DayCard({ cards }) {

    const { token, setUpdate } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function select(boolean, id) {
        if (boolean) {
            const promise = axios.post(URL + `/habits/${id}/uncheck`, null, config)
            promise.then((res) => {
                setUpdate([])
            })
            promise.catch((err) => console.log(err.response))


        } else {
            const promise = axios.post(URL + `/habits/${id}/check`, null, config)
            promise.then((res) => {
                setUpdate([])
            })
            promise.catch((err) => console.log(err.response))
        }
    }


    return (
        <>
            {cards.map((card) =>
                <DayCardContainer
                    isDone={card.done}
                    key={card.id}

                >
                    <InfoDayCard>
                        <h4>{card.name}</h4>
                        <p>Sequência atual:
                            <CurrentSequence
                                isDone={card.done} >
                                {card.currentSequence}
                            </CurrentSequence>
                        </p>
                        <p>Seu record:
                            <HighestSequence
                                isRecord={(
                                    card.done === true
                                    && card.currentSequence === card.highestSequence
                                    && card.highestSequence > 0)} >
                                {card.highestSequence}
                            </HighestSequence>
                        </p>
                    </InfoDayCard>
                    <ion-icon onClick={() => select(card.done, card.id)} name="checkbox"></ion-icon>
                </DayCardContainer>
            )}
        </>
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
        color: ${({ isDone }) => isDone ? "#8FC549" : "#E7E7E7"};
        cursor: pointer;
    }

`
const InfoDayCard = styled.div`
    h4{
        font-size: 20px;
        margin-bottom: 7px;
        color: #666666;
    }

    p{
        font-size: 13px;
        line-height: 16px;
        color: #666666;
        margin-right: 10px;
    }
    span {
        margin-left: 2px;
    }

 
`
const CurrentSequence = styled.span`
    color: ${({ isDone }) => isDone ? "#8FC549" : "#666666"};
    
`

const HighestSequence = styled.span`
    color: ${({ isRecord }) => isRecord ? "#8FC549" : "#666666"};
    
`