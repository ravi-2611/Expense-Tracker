import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props){
    const values=props.barData.map(barDatium=>{
        return (barDatium.value)
    })

    const maxValue=Math.max(...values);

  return(<div className="chart">
    {props.barData.map(barDatium=>{
      return <ChartBar key={barDatium.label} label={barDatium.label} value={barDatium.value} maxValue={maxValue}/>
    })}
  </div>)
}

export default Chart;