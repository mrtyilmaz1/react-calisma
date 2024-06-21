
import { useEffect, useState } from 'react';
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'



let BASE_URL = "https://api.freecurrencyapi.com/v1/latest/"
let API_KEY = "fca_live_N102RtgmZxB8kzPV0GCkn5eil9S9G7yWhiVEOr2F"


function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(null);


    useEffect(() => {
        exchange();
    }, [amount, fromCurrency, toCurrency, result]);



    const exchange = async () => {


        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        setResult((response.data.data[toCurrency] * amount).toFixed(4));
    }
    return (
        <div className="currency-div">
            <div className='tittle'>
                <h3>Döviz Kuru Uygulamsı</h3>
            </div>
            <div style={{ marginTop: "25px" }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className="amount" />
                <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option" >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: "25px" }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option" >
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    type="number" className="result" />
            </div>



        </div>
    )
}

export default Currency