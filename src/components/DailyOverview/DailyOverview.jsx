import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { getRandomInt } from "../../helpers";
import MediumSizeWidget from "../MediumSizeWidget";
const MonthlyOverview = () => {
  const [dailyWeight, setDailyWeight] = useState(0);

  const [dailyCalories, setDailyCalories] = useState(0);

  const [dailyExpense, setDailyExpense] = useState(0);

  const handleDailyWeight = () => {
    let currentWeight = getRandomInt(60, 80);
    setDailyWeight(currentWeight);
  };

  const handleDailyCalories = () => {
    let dailyCalorieConsumption = getRandomInt(500, 2000);
    setDailyCalories(dailyCalorieConsumption);
  };

  const handleDailyExpense = () => {
    let dailyExpenseLog = faker.finance.amount(1, 200, 2, "$");
    setDailyExpense(dailyExpenseLog);
  };

  useEffect(() => {
    handleDailyWeight();

    handleDailyCalories();

    handleDailyExpense();
  }, []);
  return (
    <div>
      <MediumSizeWidget
        dailyWeight={dailyWeight}
        dailyCalorieGoals={dailyCalories}
        dailyExpense={dailyExpense}
      />
    </div>
  );
};

export default MonthlyOverview;
