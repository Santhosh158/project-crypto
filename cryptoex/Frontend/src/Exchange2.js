import {useEffect,useState} from 'react';
import MessageBox from './MessageBox';
import LoadingBox from './LoadingBox';


const Exchange2 = () => {
    const [bitalue,setBitValue] = useState([]);
    const [ethvalue,setEthValue] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                fetch('/api/Ex2')
                .then((res) => res.json())
                .then((data) => {
                    setBitValue(data.BTC);
                    setEthValue(data.ETH);
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
            <div className="Exchange2">
                <h2> Cryptocompare </h2>
                <div> Bitcoin </div>
                <div> {bitalue.USD} </div>
                <div> Ethereum </div>
                <div> {ethvalue.USD} </div>


            </div>
            )}
        </div> 
     );
}
 

export default Exchange2;
