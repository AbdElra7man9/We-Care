import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";


const Calender = () => {
    const [calendarEvents, setCalendarEvents] = useState([
        {
            title: "Event Now",
            start: new Date()
        }
    ]);
    const handleDateClick = arg => {
        if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
            let newEl = {
                title: "New Event",
                start: arg.date,
                allDay: arg.allDay
            };
            setCalendarEvents([newEl, ...calendarEvents]);
        }
    };
    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            // weekends={false}
            dateClick={(e) => handleDateClick(e)}
            events={calendarEvents}

            eventContent={renderEventContent}

        />
    )
}
export default Calender