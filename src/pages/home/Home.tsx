import BarChartBox from "../../components/barChartBox/BarChartBox"
import ChartBox from "../../components/chartBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
import PaiChartBox from "../../components/paiChartBox/PaiChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox"
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box3"> 
      <ChartBox {...chartBoxProduct }/>
      </div>
      <div className="box box4">
      <PaiChartBox/>
      </div>
      <div className="box box5">
      <ChartBox {...chartBoxConversion}/>
      </div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...chartBoxConversion}/></div>
      <div className="box box9"><BarChartBox {...chartBoxRevenue}/></div>
    </div>
  )
}

export default Home