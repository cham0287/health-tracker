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
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
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
          backgroundColor: [
            'rgba(75,192,192,1)',
            '#ecf0f1',
            '#50AF95',
            '#f3ba2f',
            '#2a71d0',
          ],
          borderColor: 'black',
          borderWidth: 0,
        },
      ],
      hoverOffset: 4,
    });
  }, [nutrient]);

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
            섭취한 탄수화물량 :{' ' + nutrient[0].toFixed(1) + 'g'}
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachNutrient'>
            섭취한 단백질량 : {' ' + nutrient[1].toFixed(1) + 'g'}
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachNutrient'>
            섭취한 지방량 : {' ' + nutrient[2].toFixed(1) + 'g'}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TakenNutrient;
