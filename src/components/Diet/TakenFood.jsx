import { Nav } from 'react-bootstrap';

function TakenFood({
  breakfastList,
  setBreakfastList,
  lunchList,
  setLunchList,
  dinnerList,
  setDinnerList,
  snackList,
  setSnackList,
  mealType,
  setMealType,
}) {
  return (
    <div className='takenFood' style={{ fontSize: '24px' }}>
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
      {mealType == '아침' ? (
        <MealList
          dietList={breakfastList}
          setBreakfastList={setBreakfastList}
          mealType={mealType}
        />
      ) : null}
      {mealType == '점심' ? (
        <MealList
          dietList={lunchList}
          setLunchList={setLunchList}
          mealType={mealType}
        />
      ) : null}
      {mealType == '저녁' ? (
        <MealList
          dietList={dinnerList}
          setDinnerList={setDinnerList}
          mealType={mealType}
        />
      ) : null}
      {mealType == '간식' ? (
        <MealList
          dietList={snackList}
          setSnackList={setSnackList}
          mealType={mealType}
        />
      ) : null}
    </div>
  );
}

function MealList({
  dietList,
  setBreakfastList,

  setLunchList,

  setDinnerList,

  setSnackList,

  mealType,
}) {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {dietList.map((item, i) => {
        return (
          <li>
            {item.food + ' '}x{' ' + item.count}
            <button
              onClick={() => {
                console.log(mealType);
                let newPart = [...dietList];
                newPart.splice(i, 1);
                if (mealType === '아침') {
                  setBreakfastList(newPart);
                  console.log('안녕');
                }
                if (mealType == '점심') {
                  setLunchList(newPart);
                }
                if (mealType == '저녁') {
                  setDinnerList(newPart);
                }
                if (mealType == '간식') {
                  setSnackList(newPart);
                }
              }}
            >
              <i class='fa-solid fa-trash'></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TakenFood;
