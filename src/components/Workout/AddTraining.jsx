import { useState } from 'react';
import workoutData from '../../workoutData';

function AddTraining({ part1, setPart1, part2, setPart2, part3, setPart3 }) {
  let [part, setPart] = useState('선택');
  let [selectTrain, setSelectTrain] = useState('선택');
  let [weight, setWeight] = useState(0);
  let [times, setTimes] = useState(0);
  let [setNum, setSetNum] = useState(0);
  return (
    <div className='addTraining'>
      <div style={{ textAlign: 'center', fontSize: '32px' }}>운동 추가</div>
      <div>
        <label for='training'>운동 부위 :</label>
        <select
          name='training'
          id='training'
          onChange={(e) => {
            setPart(e.target.value);
          }}
        >
          <option>선택</option>
          <option>등/이두</option>
          <option>가슴/삼두</option>
          <option>하체/어깨/복근</option>
        </select>
      </div>
      <div>
        <label for='diet'>운동 구분 : </label>
        <select
          name='diet'
          id='diet'
          onChange={(e) => {
            setSelectTrain(e.target.value);
          }}
        >
          <option>선택</option>
          {part === '등/이두'
            ? workoutData[0].map((train, i) => {
                return <option>{train}</option>;
              })
            : null}
          {part === '가슴/삼두'
            ? workoutData[1].map((train, i) => {
                return <option>{train}</option>;
              })
            : null}
          {part === '하체/어깨/복근'
            ? workoutData[2].map((train, i) => {
                return <option>{train}</option>;
              })
            : null}
        </select>
      </div>
      <div>
        <label>중량(kg) : </label>
        <input
          type='number'
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        ></input>
        <br />
        <label>횟수 :</label>
        <input
          type='number'
          onChange={(e) => {
            setTimes(e.target.value);
          }}
        ></input>
        <br />
        <label>세트수 : </label>
        <input
          type='number'
          onChange={(e) => {
            setSetNum(e.target.value);
          }}
        ></input>
        <button
          type='submit'
          onClick={() => {
            if (
              part == '선택' ||
              selectTrain == '선택' ||
              weight <= 0 ||
              times < 1 ||
              setNum < 1
            ) {
              alert('올바른 값을 입력하세요');
              return;
            }
            if (part == '등/이두') {
              let newList = [
                ...part1,
                {
                  name: selectTrain,
                  weight: weight,
                  times: times,
                  num: setNum,
                },
              ];
              setPart1(newList);
            }
            if (part == '가슴/삼두') {
              let newList = [
                ...part2,
                {
                  name: selectTrain,
                  weight: weight,
                  times: times,
                  num: setNum,
                },
              ];
              setPart2(newList);
            }
            if (part == '하체/어깨/복근') {
              let newList = [
                ...part3,
                {
                  name: selectTrain,
                  weight: weight,
                  times: times,
                  num: setNum,
                },
              ];
              setPart3(newList);
            }
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}

export default AddTraining;
