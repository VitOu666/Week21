
import './App.css'
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Walk the dog", 2],
  ["Chores", 2],
  ["Sleep", 8],
];

const options = {
  title: "My Daily Activities",
};


function App() {
  return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
  />
  )
}

export default App
