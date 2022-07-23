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
      <Row>
        <Col xs='auto' md={4}>
          <Card body>섭취한 탄수화물량 :{' ' + nutrient[0] + 'g'}</Card>
        </Col>
        <Col xs='auto' md={4}>
          <Card body>섭취한 단백질량 : {' ' + nutrient[1] + 'g'}</Card>
        </Col>
        <Col xs='auto' md={4}>
          <Card body>섭취한 지방량 : {' ' + nutrient[2] + 'g'}</Card>
        </Col>
      </Row>
      <div>섭취한 총 칼로리 : {nutrient[3] + 'kcal'}</div>
      <PieChart nutrient={nutrient} chartData={chartData} />
    </div>
  );
}

export default TakenNutrient;
