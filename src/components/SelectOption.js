import data from '../data';

function SelectOption({
  setSelectState,
  setFoodCount,
  dietList,
  setDietList,
  foodCount,
  selectState,
}) {
  return (
    <>
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
    </>
  );
}

export default SelectOption;
