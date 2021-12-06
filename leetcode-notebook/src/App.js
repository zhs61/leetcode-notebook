import "./App.css";
import TodayFeed from "./components/TodayFeed";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div>
      <h2>Leetcode Notebook</h2>
      <ToolBar />
      <TodayFeed />
    </div>
  );
}

export default App;
