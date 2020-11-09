import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Habib Vai";
  var name1 = "JOY Bangla";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit NoshtoJibon <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React App</p>
        <h1>
          This is react Boss!! {name} is {name1}
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
