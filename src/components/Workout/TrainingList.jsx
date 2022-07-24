function TrainingList({ trainList }) {
  return (
    <div className='selectOption'>
      <div>운동목록</div>
      <ol>
        {trainList.map((train) => {
          return (
            <li>
              {train.part}
              {train.name}
              {train.weight}kg
              {train.times}회{train.num}세트
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export default TrainingList;
