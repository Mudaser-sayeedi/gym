import "./Trainer.component.scss";


function Trainer({image}) {
  return (
    <div className="trainerContainer">
      <div className="trainerImage">
        <img src={image} alt="trainer_picture" />
      </div>
      <div className="trainerInfo">
        <h3>trainer name</h3>
        <p>gym trainer</p>
      </div>
    </div>
  );
}

export default Trainer;
