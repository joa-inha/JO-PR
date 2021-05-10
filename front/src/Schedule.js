import React, {useState} from 'react';
import ListHead from './ListHead';
import Calendar, {MonthView} from 'react-calendar';
import './Calendar.css';

function  Schedule(){
    const [value, onChange] = useState(new Date());

    return(
        <div>
            <ListHead boardName = "일정"/>
            <div className = "calendar-container">
                <Calendar
                onChange={onChange}
                value={value}
                defaultView = "month"
                />
            </div>
        </div>
    );
}

export default Schedule;