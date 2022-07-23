import { Nav } from 'react-bootstrap';

function TakenFood({
  breakfastList,
  lunchList,
  dinnerList,
  snackList,
  mealType,
  setMealType,
}) {
  return (
    <div className='takenFood' style={{ fontSize: '25px' }}>
      섭취한 음식 목록
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link0'
            onClick={() => {
              setMealType('아침');
            }}
          >
            아침
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-1'
            onClick={() => {
              setMealType('점심');
            }}
          >
            점심
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-2'
            onClick={() => {
              setMealType('저녁');
            }}
          >
            저녁
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-3'
            onClick={() => {
              setMealType('간식');
            }}
          >
            간식
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {mealType == '아침' ? <MealList dietList={breakfastList} /> : null}
      {mealType == '점심' ? <MealList dietList={lunchList} /> : null}
      {mealType == '저녁' ? <MealList dietList={dinnerList} /> : null}
      {mealType == '간식' ? <MealList dietList={snackList} /> : null}
    </div>
  );
}

function MealList({ dietList }) {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {dietList.map((item, i) => {
        return (
          <li>
            {item.food}x{item.count}
          </li>
        );
      })}
    </ul>
  );
}

export default TakenFood;
