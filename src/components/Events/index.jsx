import EventItem from "./components/EventItem";
import data from '../../data/events.json'
import { useState } from 'react'


const Events = () => {
    const [events] = useState( data.events )
    
    return (
        <div>
            Eventos
            {events.map((eventItem) => (
                <EventItem 
                    key={`event-item-${eventItem.id}`} 
                    name={eventItem.name}
                    date={eventItem.date}
                    image={eventItem.image} 
                />
            ))}
        </div>
    )
}

export default Events;