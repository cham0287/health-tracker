import data from '../../data';

function SelectOption({
  setSelectState,
  setFoodCount,
  foodCount,
  selectState,
  mealTime,
  setMealTime,
  breakfastList,
  setBreakfastList,
  lunchList,
  setLunchList,
  dinnerList,
  setDinnerList,
  snackList,
  setSnackList,
  nutrient,
  setNutrient,
}) {
  let 찾은메뉴 = data.find((food) => {
    return food.name == selectState;
  });

  return (
    <div className='selectOption'>
      <div style={{ textAlign: 'center', fontSize: '32px' }}>음식추가</div>
      <form action='/diet/post' method='POST'>
        <div>
          <label for='meal'>식사 구분 :</label>
          <select
            name='meal'
            id='meal'
            onChange={(e) => {
              setMealTime(e.target.value);
            }}
          >
            <option>선택</option>
            <option>아침</option>
            <option>점심</option>
            <option>저녁</option>
            <option>간식</option>
          </select>
        </div>
        <div>
          <label for='diet'>섭취한 음식 : </label>
          <select
            name='diet'
            id='diet'
            onChange={(e) => {
              setSelectState(e.target.value);
            }}
          >
            <option>선택</option>
            {data.map((food, i) => {
              return <option>{food.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label for='fdCount'>수량 : </label>
          <input
            name='fdCount'
            type='number'
            onChange={(e) => {
              setFoodCount(e.target.value);
            }}
          ></input>
          <button
            type='submit'
            onClick={() => {
              if (mealTime == '선택') {
                alert('음식을 선택하세요');

                return;
              } else if (foodCount < 1) {
                alert('1 이상의 숫자를 입력하세요');

                return;
              } else if (mealTime == '아침') {
                let newDiet = [...breakfastList];
                newDiet.push({ food: selectState, count: foodCount });
                setBreakfastList(newDiet);
              } else if (mealTime == '점심') {
                let newDiet = [...lunchList];
                newDiet.push({ food: selectState, count: foodCount });
                setLunchList(newDiet);
              } else if (mealTime == '저녁') {
                let newDiet = [...dinnerList];
                newDiet.push({ food: selectState, count: foodCount });
                setDinnerList(newDiet);
              } else if (mealTime == '간식') {
                let newDiet = [...snackList];
                newDiet.push({ food: selectState, count: foodCount });
                setSnackList(newDiet);
              }
              setNutrient([
                nutrient[0] + 찾은메뉴.carbonhydrate * foodCount,
                nutrient[1] + 찾은메뉴.protein * foodCount,
                nutrient[2] + 찾은메뉴.fat * foodCount,
                nutrient[3] + 찾은메뉴.calorie * foodCount,
              ]);
            }}
          >
            추가하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectOption;
