import EventItem from "./EventItem"


const EventList = ({list}) => {
    return(
             <div className="EventList">
                {list.map((text, index) => (
                    <EventItem key={index} text={`${index+1}. ${text}`}></EventItem>
                ))}
            </div>
    )
}

export default EventList