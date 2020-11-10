import logo from "./logo.svg";
import "./App.css";

function App() {
  var fontColor = {
    color: "blue",
    backgroundColor: "lightsalmon",
  };
  var person = {
    name: "Habib Vai",
    post: "Neta",
    job: "Churls koiro na",
  };
  var person2 = {
    name: "Naeeem vai",
    post: "Don",
    job: "Jono Shebok",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>My First React App</p>

        <h1 style={fontColor}>
          This is react Boss!!{" "}
          {person.name + " " + person.job + " " + person.post}
        </h1>
        <p style={{ backgroundColor: "cyan", color: "red" }}>
          {person2.job + " " + person2.name}
        </p>
      </header>
    </div>
  );
}

export default App;
