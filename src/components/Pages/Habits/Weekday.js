import styled from "styled-components"

export default function Weekday(props) {
    const { day } = props
    return (
        <DayBox>
            {day}
        </DayBox>
    )
}

const DayBox = styled.div`
    width: 30px;
    height: 30px;
    border: #D4D4D4 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    border-radius: 5px;
    color: #DBDBDB;
    cursor: pointer;
`