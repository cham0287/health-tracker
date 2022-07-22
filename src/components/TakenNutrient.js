function TakenNutrient({ nutrient }) {
  return (
    <div className='nutrientChart'>
      <div>
        섭취한 탄수화물량 :<p>{nutrient[0]}</p>
      </div>
      <div>
        섭취한 단백질량 : <p>{nutrient[1]}</p>
      </div>
      <div>
        섭취한 지방량 : <p>{nutrient[2]}</p>
      </div>
    </div>
  );
}

export default TakenNutrient;
