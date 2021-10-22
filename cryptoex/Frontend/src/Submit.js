import Exchange1 from "./Exchange1";
import Exchange2 from "./Exchange2";

const Ex1 = Exchange1.Exchange1;
const Ex2 = Exchange2.Exchange2;

const Submit = () => {
    
    let buy = null;
    if (Ex1 === "Crypto value - Ex1"){
        buy = Ex1;
    }
    else {
        buy = Ex2;
    }
    console.log({buy})


    return (
        <div className="Submit">
            <button> Submit </button>
        </div>
    )
}


export default Submit;