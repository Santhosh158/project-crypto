import Compare from './Compare';
import Exchange1 from './Exchange1';
import Exchange2 from './Exchange2';
import RadioButtons from './RadioButton';


function App() {
  const title = 'Chainalysis - Project Cryptoex';
  return (
    <div className="App">
      <h1>{title}</h1>
      <div className  = "Ex1">
        <Exchange1/>
      </div>
      <div className = "Ex2">
        <Exchange2/>
      </div>
      <div className = "Submit">
        <Compare/>
      </div>
      <div className = "Button">
        <RadioButtons/>
      </div>
    </div>
  );
}



export default App;
