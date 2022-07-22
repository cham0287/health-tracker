import { useState } from 'react';
import data from '../data';
function Diet({ diet, setDiet }) {
  let [selectState, setSelectState] = useState('음식을 선택하세요');
  let [foodCount, setFoodCount] = useState(0);
  let [dietList, setDietList] = useState([{ food: '휠렛버거', count: 2 }]);
  console.log(diet);

  return (
    <div>
      <div>
        {selectState}x {foodCount}
      </div>
      <div>
        <label for='meal'>식사 구분 :</label>
        <select name='meal' id='meal'>
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
          type='number'
          onChange={(e) => {
            setFoodCount(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let newDiet = [...dietList];
            newDiet.push({ food: selectState, count: foodCount });
            setDietList(newDiet);
          }}
        >
          추가하기
        </button>
      </div>

      <ul>
        {dietList.map((item, i) => {
          return (
            <li>
              {item.food}
              {item.count}
            </li>
          );
        })}
      </ul>

      <div className='nutrientChart'>
        <div>
          섭취한 탄수화물량 :<p>g</p>
        </div>
        <div>
          섭취한 단백질량 : <p>g</p>
        </div>
        <div>
          섭취한 지방량 : <p>g</p>
        </div>
      </div>
    </div>
  );
}

export default Diet;
