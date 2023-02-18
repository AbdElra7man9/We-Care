import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calender = () => {
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
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
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            // weekends={false}

            events={[
                { title: 'event 1', date: '2023-02-15' },
                { title: 'event 2', date: '2019-04-02' }
            ]}
            dateClick={handleDateClick}
            eventContent={renderEventContent}

        />
    )
}
export default Calender