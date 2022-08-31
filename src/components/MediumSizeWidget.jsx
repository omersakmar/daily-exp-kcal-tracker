import React from "react";
import BodyInfo from "./DailyBodyInfo/BodyInfo";
import FinancialInfo from "./DailyFinancialInfo/FinancialInfo";
import "./MediumSizeWidget.css";

const MediumSizeWidget = (props) => {
  return (
    <div className="medium-widget">
      <div className="body-info-div">
        <BodyInfo
          dailyWeight={props.dailyWeight}
          dailyCalorieGoals={props.dailyCalorieGoals}
        />
      </div>
      <div className="financial-info-div">
        <FinancialInfo dailyExpense={props.dailyExpense} />
      </div>
    </div>
  );
};

export default MediumSizeWidget;
