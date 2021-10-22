import Exchange1 from './Exchange1';
import Exchange2 from './Exchange2';
import Submit from './Submit';


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
        <Submit/>
      </div>
    </div>
  );
}



export default App;
