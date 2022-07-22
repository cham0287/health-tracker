import { useState } from 'react';
import TakenFood from '../components/TakenFood';
import TakenNutrient from '../components/TakenNutrient';
import SelectOption from '../components/SelectOption';

function Diet({ diet, setDiet }) {
  let [selectState, setSelectState] = useState('음식을 선택하세요');
  let [foodCount, setFoodCount] = useState(0);
  let [dietList, setDietList] = useState([{ food: '휠렛버거', count: 2 }]);
  let [mealTime, setMealTime] = useState('');
  console.log(diet);

  return (
    <div>
      <SelectOption
        setSelectState={setSelectState}
        setFoodCount={setFoodCount}
        dietList={dietList}
        selectState={selectState}
        foodCount={foodCount}
        setDietList={setDietList}
      />
      <TakenFood dietList={dietList} />
      <TakenNutrient />
    </div>
  );
}

export default Diet;
