import React from "react";

const BodyInfo = (props) => {
  return (
    <div className="body-info-wrapper">
      <ul className="body-info-list">
        Weight
        <li>{props.dailyWeight} kg </li>
        Daily Calorie Intake
        <li>{props.dailyCalorieGoals} </li>
      </ul>
    </div>
  );
};

export default BodyInfo;
