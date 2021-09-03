import { useSelector, useDispatch } from "react-redux";
import Adress from "./Adress";
import axios from "axios";
import { useEffect } from "react";
import { setAdresses } from "../redux/actions/adressActions"
import '../App.css'

function Adresses() {
    const adresses = useSelector((state) => state.allAdresses.adresses);
    const dispatch = useDispatch();
    
    const fetchAdresses = async () => {
        const response = await axios
        .get("https://api.spacexdata.com/v3/payloads")
        .catch((err) => {
            console.log("Err", err); 
        });
        dispatch(setAdresses(response.data));
    };

    useEffect(() => {
        fetchAdresses()
    }, [])

    const renderList = adresses.map((ad) => {
        return(
            <div>
                <Adress adress={ad}/>
                <br />
            </div> 
        )
    });

    return (
        <>
            <div className="divp">
                {renderList}
            </div>
        </>
    )
}

export default Adresses
