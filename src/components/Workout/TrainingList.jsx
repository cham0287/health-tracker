import { Row, Col } from 'react-bootstrap';

function TrainingList({ part1, part2, part3 }) {
  return (
    <div className='trainingList'>
      <div style={{ textAlign: 'center', fontSize: '32px' }}>운동 목록</div>

      <Row>
        <Col xs='auto' md={4}>
          <div className='eachPart' style={{ background: '#1db6ae' }}>
            등/이두
          </div>
          <div className='partBox'>
            <ol>
              {part1.map((train) => {
                return (
                  <li>
                    {train.part}
                    {train.name}
                    {train.weight}kg
                    {train.times}회{train.num}세트
                  </li>
                );
              })}
            </ol>
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachPart' style={{ background: '#ffaa01' }}>
            가슴/삼두
          </div>
          <div className='partBox'>
            <ol>
              {part2.map((train) => {
                return (
                  <li>
                    {train.part}
                    {train.name}
                    {train.weight}kg
                    {train.times}회{train.num}세트
                  </li>
                );
              })}
            </ol>
          </div>
        </Col>
        <Col xs='auto' md={4}>
          <div className='eachPart' style={{ background: '#f94c2e' }}>
            하체/어깨/복근
          </div>
          <div className='partBox'>
            <ol>
              {part3.map((train) => {
                return (
                  <li>
                    {train.part}
                    {train.name}
                    {train.weight}kg
                    {train.times}회{train.num}세트
                  </li>
                );
              })}
            </ol>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default TrainingList;
