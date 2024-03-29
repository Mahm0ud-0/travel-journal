

export default function Card(props) {


    return (

        <div className="card">
            <img src={props.imageUrl}/>
            <section>
                <div className="card-stats">
                    <div className="location">
                        <div>
                            <svg fill="#009688" width="20px" height="20px" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.76l.65.56.65-.56C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"/><circle cx="12" cy="10" r="2"/></svg>
                            <span>{props.location.toUpperCase()}</span>
                        </div>
                            <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <div className="date">
                        {props.startDate} - {props.endDate}
                    </div>
                </div>
                <p>
                    {props.description}
                </p>
            </section>
        </div>

    )
}