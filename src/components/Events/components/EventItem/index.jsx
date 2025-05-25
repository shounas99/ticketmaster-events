const EventItem = ({ name, date, image}) => {
    return (
    <div>
        <img src={ image } alt="Image event" width={200} height={200}/>
        <h4>{name}</h4>
        <p>{date}</p>
    </div>
    )
}

export default EventItem;