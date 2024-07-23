import "./App.css";
import TicTacToe from "./components/TicTacToe";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      {/* <TicTacToe size={3} /> */}
      <Todo />
    </div>
  );
}

export default App;
