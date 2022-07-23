import { Row, Col, Card } from 'react-bootstrap';
import PieChart from '../charts/PieChart';
import { ChartData } from '../chartData';
import { useEffect, useState } from 'react';

function TakenNutrient({ nutrient }) {
  const [chartData, setChartData] = useState({
    labels: ChartData.map((data) => data.type),
    datasets: [
      {
        label: 'Users Gained',
        data: [nutrient[0], nutrient[1], nutrient[2]],
        backgroundColor: ['#3454c9', '#edf2f1', '#eb6b26'],
        // borderColor: 'black',
        // borderWidth: 20,
      },
    ],
    hoverOffset: 4,
  });
  useEffect(() => {
    setChartData({
      labels: ChartData.map((data) => data.type),
      datasets: [
        {
          label: 'Users Gained',
          data: [nutrient[0], nutrient[1], nutrient[2]],
          backgroundColor: ['#0db1b1eb', '#ffaa01', '#ff0000ad'],
          borderColor: 'black',
          borderWidth: 0,
        },
      ],
      hoverOffset: 4,
    });
  }, [nutrient]);

  let totalKcal = nutrient[0] * 4 + nutrient[1] * 4 + nutrient[2] * 9;

  return (
    <div className='takenNutrient'>
      <div className='calorie'>
        <div>섭취한 칼로리</div>
        <div>{nutrient[3] + 'kcal'}</div>
      </div>

      <div className='chart'>
        <PieChart nutrient={nutrient} chartData={chartData} />
      </div>
      <Row>
        <Col xs='auto' md={4}>
          <div className='eachNutrient'>
            탄수화물 :{' ' + nutrient[0].toFixed(1) + 'g'}
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachNutrient'>
            단백질 : {' ' + nutrient[1].toFixed(1) + 'g'}
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachNutrient'>
            지방 : {' ' + nutrient[2].toFixed(1) + 'g'}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs='auto' md={4}>
          <div className='eachPercent'>
            {((nutrient[0] * 400) / totalKcal).toFixed(1) + '%'}
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachPercent'>
            {((nutrient[1] * 400) / totalKcal).toFixed(1) + '%'}
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachPercent'>
            {((nutrient[2] * 900) / totalKcal).toFixed(1) + '%'}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TakenNutrient;
