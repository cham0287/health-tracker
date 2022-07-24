import AddTraining from '../components/Workout/AddTraining';
import TrainingList from '../components/Workout/TrainingList';
import { useState } from 'react';

function Workout() {
  let [trainList, setTrainList] = useState([
    {
      part: '운동부위',
      name: '운동이름',
      weight: '무게',
      times: '횟수',
      num: '세트수',
    },
  ]);
  return (
    <div>
      <div>운동 기록 페이지</div>
      <AddTraining trainList={trainList} setTrainList={setTrainList} />
      <TrainingList trainList={trainList} setTrainList={setTrainList} />
    </div>
  );
}

export default Workout;
