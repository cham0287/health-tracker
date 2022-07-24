import AddTraining from '../components/Workout/AddTraining';
import TrainingList from '../components/Workout/TrainingList';
import { useState } from 'react';

function Workout() {
  let [part1, setPart1] = useState([]);
  let [part2, setPart2] = useState([]);
  let [part3, setPart3] = useState([]);

  return (
    <div>
      <div>운동 기록 페이지</div>
      <AddTraining
        part1={part1}
        setPart1={setPart1}
        part2={part2}
        setPart2={setPart2}
        part3={part3}
        setPart3={setPart3}
      />
      <TrainingList part1={part1} part2={part2} part3={part3} />
    </div>
  );
}

export default Workout;
