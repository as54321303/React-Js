import logo from './logo.svg';
import './App.css';
function App() {

  function hello()
  {
    alert('Hello Ayush');
  }


  return (
    <div className="App">
           <h1>Hello World</h1>
           <button onClick={hello}>Click Me</button>
           <button onClick={()=>alert("Hello Mahesh")}>Click Me2</button>
    </div>
  );
}

export default App;
