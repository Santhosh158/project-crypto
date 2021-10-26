import Compare from './Compare';
import Exchange1 from './Exchange1';
import Exchange2 from './Exchange2';
import RadioButtons from './RadioButton';


function App() {
  const title = 'Chainalysis';
  return (
    <div className="App">
      <div className="Title">
        <div className="Bitcoin"/>
        <div className="Ethereum"/>
      <h1>{title}</h1><br/>
      <h2>Cryptoex </h2>
      </div>
      <div>
        <div className  = "Ex1">
          <Exchange1/>
          
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
      <footer> <small>&copy; Copyright 2021, Chainalysis-Cryptoex-Santhosh Babu</small> </footer> 

    </div>
  );
}



export default App;
