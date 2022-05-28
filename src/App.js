
import Dogs from './components/Dogs';
import Dog from './components/Dog';



function App() {
  return (
    <div className="app">
    
      <Dogs />
      <button className="btn btn--1" onClick={() => window.location.reload()}>
       Recarga
      </button>
      <Dog />
      
      
    </div>
  );
}

export default App;
