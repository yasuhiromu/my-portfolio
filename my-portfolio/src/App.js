import './App.css';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div id='set'>
        <Button variant="contained" onClick={()=>{abc();}}>Hello World</Button>
      </div>
    </div>
  );
}

function abc(){
  alert("Hello")
}

export default App;
