import styled from "styled-components"
import { weekdays } from "../../../assets/constants"

export default function Weekday({ arrayWeekdays, selectedDays, isCursorPointer }) {

    return (
        <>
            {weekdays.map((day, index) =>
                <DayBox
                    key={index}
                    onClick={() => { selectedDays(index) }}
                    booleano={arrayWeekdays.includes(index)}
                    isCursorPointer={isCursorPointer}
                >
                    {day}
                </DayBox >)}
        </>
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
            color: ${({ booleano }) => booleano ? "white" : "#DBDBDB"};
            background-color: ${({ booleano }) => booleano ? "#CFCFCF" : "white"};
            cursor: ${({ isCursorPointer }) => isCursorPointer ? "pointer" : "inherit"}
            `