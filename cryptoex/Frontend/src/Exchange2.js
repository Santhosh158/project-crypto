import {useEffect,useState} from 'react';
import axios from 'axios';
import MessageBox from './MessageBox';
import LoadingBox from './LoadingBox';

const Exchange2 = () => {
    const [value,setValue] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const {data} = await axios.get('/api/Ex2');
                setLoading(false);
                setValue(data);

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
                <h1> Exchange 2 </h1>
                <h2> {value} </h2>
            </div>
            )}
        </div> 
     );
}
 
export default Exchange2;