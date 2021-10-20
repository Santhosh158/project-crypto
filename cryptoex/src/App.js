import Exchange1 from './Exchange1';
import Exchange2 from './Exchange2';

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
    </div>
  );
}

export default App;
