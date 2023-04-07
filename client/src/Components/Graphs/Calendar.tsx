'use client';
import React, { useState } from 'react';
import FullCalendar, { DateSelectArg, EventClickArg, EventContentArg } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calendar = (): JSX.Element => {
    const [calendarEvents, setCalendarEvents] = useState<FullCalendar.EventInput[]>([
        {
            title: "Event Now",
            start: new Date()
        }
    ]);

    const handleDateSelect = (arg: DateSelectArg) => {
        if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
            const newEvent: FullCalendar.EventInput = {
                title: "New Event",
                start: arg.start,
                end: arg.end,
                allDay: arg.allDay
            };
            setCalendarEvents(prevState => [...prevState, newEvent]);
        }
    };

    const handleEventClick = (arg: EventClickArg) => {
        if (window.confirm(`Are you sure you want to delete the event '${arg.event.title}'?`)) {
            setCalendarEvents(prevState => prevState.filter(event => event !== arg.event));
        }
    };

    const renderEventContent = (eventInfo: EventContentArg) => {
        return (
            <div>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </div>
        )
    };

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
            dateSelect={handleDateSelect}
            events={calendarEvents}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
        />
    )
};

export default Calendar;
