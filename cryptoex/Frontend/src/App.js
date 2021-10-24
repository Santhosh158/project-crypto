import Compare from './Compare';
import Exchange1 from './Exchange1';
import Exchange2 from './Exchange2';
import RadioButtons from './RadioButton';


function App() {
  const title = 'Chainalysis - Project Cryptoex';
  return (
    <div className="App">
      <h1><strong>{title}</strong></h1><br/>
      <div>
        <div className  = "Ex1">
          <p><Exchange1/></p>
        </div><br/>
        <div className = "Ex2">
          <Exchange2/>
        </div><br/>
        <div className = "Button">
          <RadioButtons/>
        </div><br/>
        <div className = "Submit">
          <Compare/>
        </div>
      </div>
      
      
    </div>
  );
}



export default App;
