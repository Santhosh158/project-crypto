import {useEffect,useState} from 'react';
import MessageBox from './MessageBox';
import LoadingBox from './LoadingBox';


const Exchange1 = () => {
    const [btcvalue,setBtcValue] = useState([]);
    const [ethvalue,setEthValue] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                fetch('/api/Ex1')
                .then((res) => res.json())
                .then((data) => {
                    setBtcValue(data.bitcoin);
                    setEthValue(data.ethereum);
                    // console.log(data);
                    setLoading(false);
                // setValue(data);
                })
            } catch(err){
                setLoading(false);
                setError(err.message);
            }
        }
        fetchData(); 
    }, []);
    return (  
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ): error ? (
                <MessageBox variant="danger"> {error} </MessageBox>
            ) : (
            <div className="Exchange1">
                <h1> Coingecko </h1>
                <div> Bitcoin </div>
                <div> {btcvalue.usd} </div>
                <div> Ethereum </div>
                <div> {ethvalue.usd} </div>


            </div>
            )}
        </div> 
     );
}



export default  Exchange1;
