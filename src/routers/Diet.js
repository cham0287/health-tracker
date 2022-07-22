import { useState } from 'react';
import TakenFood from '../components/TakenFood';
import TakenNutrient from '../components/TakenNutrient';
import SelectOption from '../components/SelectOption';

function Diet() {
  let [selectState, setSelectState] = useState('음식을 선택하세요');
  let [foodCount, setFoodCount] = useState(0);
  let [breakfastList, setBreakfastList] = useState([]);
  let [lunchList, setLunchList] = useState([]);
  let [dinnerList, setDinnerList] = useState([]);
  let [snackList, setSnackList] = useState([]);
  let [mealTime, setMealTime] = useState('');
  let [mealType, setMealType] = useState('아침');
  let [nutrient, setNutrient] = useState([0, 0, 0]);

  return (
    <div>
      <SelectOption
        selectState={selectState}
        setSelectState={setSelectState}
        foodCount={foodCount}
        setFoodCount={setFoodCount}
        breakfastList={breakfastList}
        setBreakfastList={setBreakfastList}
        lunchList={lunchList}
        setLunchList={setLunchList}
        dinnerList={dinnerList}
        setDinnerList={setDinnerList}
        snackList={snackList}
        setSnackList={setSnackList}
        mealTime={mealTime}
        setMealTime={setMealTime}
        nutrient={nutrient}
        setNutrient={setNutrient}
      />
      <TakenFood
        breakfastList={breakfastList}
        setBreakfastList={setBreakfastList}
        lunchList={lunchList}
        setLunchList={setLunchList}
        dinnerList={dinnerList}
        setDinnerList={setDinnerList}
        snackList={snackList}
        setSnackList={setSnackList}
        mealType={mealType}
        setMealType={setMealType}
        nutrient={nutrient}
        setNutrient={setNutrient}
      />
      <TakenNutrient nutrient={nutrient} />
    </div>
  );
}

export default Diet;
