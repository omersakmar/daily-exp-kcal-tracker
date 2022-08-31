import React from "react";

const FinancialInfo = (props) => {
  return (
    <div>
      <ul>
        Daily Expense
        <li>{props.dailyExpense}</li>
      </ul>
    </div>
  );
};

export default FinancialInfo;
