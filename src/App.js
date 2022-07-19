import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";

function App() {
  return (
    <div className="App">
      POKEDUX PROJECT
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
    </div>
  );
}

export default App;
