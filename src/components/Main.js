import Carousel from 'react-bootstrap/Carousel';
import workoutImg from '../img/workout.jpg';
import dietImg from '../img/diet.jpg';
import weightImg from '../img/weight.jpg';

function Main() {
  return (
    <div className='mainPage'>
      <div className='mainTitle'>운동도우미</div>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={workoutImg} alt='Second slide' />
          <Carousel.Caption>
            <h3>운동 기록 기능</h3>
            <p>매일 한 운동을 부위별로 기록하세요</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={dietImg} alt='Second slide' />

          <Carousel.Caption>
            <div style={{ color: 'black' }}>
              <h3>식단 기록 기능</h3>
              <p>먹은 음식을 기록하고 섭취한 칼로리와 탄단지를 알아보세요</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={weightImg} alt='Third slide' />

          <Carousel.Caption>
            <h3>체중 기록 기능</h3>
            <p>체중을 기록하고 변화를 확인하세요</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Main;
