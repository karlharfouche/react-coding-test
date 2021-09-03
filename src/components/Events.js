import { useSelector, useDispatch } from "react-redux";
import Event from "./Event";
import axios from "axios";
import { useEffect } from "react";
import { setEvents } from "../redux/actions/eventsActions"
import '../App.css'

function Events() {
    const events = useSelector((state) => state.allEvents.events);
    const dispatch = useDispatch();
    
    const fetchEvents = async () => {
        const response = await axios
        .get("https://api.spacexdata.com/v3/history")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setEvents(response.data));
    };

    useEffect(() => {
        fetchEvents()
    }, [])

    const renderList = events.map((ev) => {
        return(
            <>
                <Event event={ev}/>
                <br />
            </>
        )
    });

    return (
        <>
            <div className="divh">
              {renderList}
            </div>
            
        </>
    )
}

export default Events
