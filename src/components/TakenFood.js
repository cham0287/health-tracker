function TakenFood({ dietList }) {
  return (
    <div className='takenFood'>
      섭취한 음식 목록
      <ul type='disc'>
        {dietList.map((item, i) => {
          return (
            <li>
              {item.food}
              {item.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TakenFood;