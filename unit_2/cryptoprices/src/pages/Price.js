import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

export default function Price (props) {
    const apiKey= ""
    const params= useParams()
    const symbol = params.symbol
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
    
    const [ coin, setCoin] = useState(null);
    const getCoin = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data)
        } catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        getCoin();
    }, [])

    const loaded = () => {
        return(
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return coin && coin.rate ? loaded() : loading();
}