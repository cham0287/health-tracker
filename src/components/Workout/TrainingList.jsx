import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function TrainingList({ part1, part2, part3, setPart1, setPart2, setPart3 }) {
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
              {part1.map((train, i) => {
                return (
                  <li>
                    {train.part}
                    {train.name}
                    {train.weight}kg
                    {train.times}회{train.num}세트
                    <button
                      onClick={() => {
                        let newPart = [...part1];
                        newPart.splice(i, 1);
                        setPart1(newPart);
                      }}
                    >
                      <i class='fa-solid fa-trash'></i>
                    </button>
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
              {part2.map((train, i) => {
                return (
                  <li>
                    {train.part}
                    {train.name}
                    {train.weight}kg
                    {train.times}회{train.num}세트
                    <button
                      onClick={() => {
                        let newPart = [...part2];
                        newPart.splice(i, 1);
                        setPart2(newPart);
                      }}
                    >
                      <i class='fa-solid fa-trash'></i>
                    </button>
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
              {part3.map((train, i) => {
                return (
                  <li>
                    {train.part}
                    {train.name}
                    {train.weight}kg
                    {train.times}회{train.num}세트
                    <button
                      onClick={() => {
                        let newPart = [...part3];
                        newPart.splice(i, 1);
                        setPart3(newPart);
                      }}
                    >
                      <i class='fa-solid fa-trash'></i>
                    </button>
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
