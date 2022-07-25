import { useState } from 'react';

function Weight() {
  let [체중, 체중변경] = useState(0);
  let [신장, 신장변경] = useState(0);
  let BMI = (체중 / ((신장 / 100) * (신장 / 100))).toFixed(1);
  return (
    <div>
      <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>
        오늘의 체중은?
      </h1>
      <div className='weight'>
        <p>
          당신의 키는?
          <input
            onChange={(e) => {
              if (e.target.value < 0) {
                신장변경(0);

                alert('양수만 입력 가능합니다.');
              } else {
                신장변경(e.target.value);
              }
            }}
          ></input>
          체중을 입력하세요!
          <input
            onChange={(e) => {
              체중변경(e.target.value);
            }}
          ></input>
          <button>누르기!</button>
        </p>
      </div>
      <div>당신의 BMI는 {BMI}</div>
      {0 == BMI ? <p>체중을 입력하세요</p> : null}
      {0 < BMI && BMI < 10 ? <p>뼈는 잘 있는거죠?</p> : null}
      {10 <= BMI && BMI < 18.5 ? <p>저체중이시네요</p> : null}
      {18.5 <= BMI && BMI < 23 ? <p>정상체중입니다</p> : null}
      {23 <= BMI && BMI < 25 ? <p>과체중이시네요</p> : null}
      {25 <= BMI && BMI < 30 ? <p>경도비만이에요</p> : null}
      {30 <= BMI && BMI < 40 ? <p>고도비만이에요</p> : null}
      {40 <= BMI && BMI < 60 ? <p>초고도비만이에요</p> : null}
      {60 <= BMI ? <p>사람이 아니신 것 같아요..</p> : null}
    </div>
  );
}

export default Weight;
